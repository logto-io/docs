---
slug: /security/captcha/friendly-captcha
sidebar_label: Friendly Captcha
---

# Friendly Captcha

[Friendly Captcha](https://friendlycaptcha.com) v2 ist ein datenschutzorientierter, DSGVO-konformer CAPTCHA-Dienst, der auf Proof-of-Work basiert und keine visuellen Rätsel verwendet. Diese Anleitung führt dich durch die Einrichtung von Friendly Captcha mit Logto.

## Voraussetzungen {#prerequisites}

- Ein Friendly Captcha-Konto

## Sitekey und API-Schlüssel erhalten {#get-the-sitekey-and-api-key}

1. Melde dich beim [Friendly Captcha Dashboard](https://app.friendlycaptcha.com) an und gehe zu **Applications**.
2. Klicke auf **+ New Application** und wähle **v2** aus.
3. Wenn du erlaubte Ursprünge für die Anwendung einschränkst, füge deine Logto-Endpunkt-Domain hinzu (z. B. `https://[tenant-id].logto.app`).
4. Lasse den globalen Endpunkt (`global.frcapi.com`) aktiviert, es sei denn, du beschränkst den Sitekey auf den [EU-Endpunkt](https://developer.friendlycaptcha.com/docs/v2/guides/eu-endpoint) (`eu.frcapi.com`, verfügbar in Advanced- und Enterprise-Plänen), und kopiere den **Sitekey** (beginnt mit `FC`).
5. Öffne **API Keys** im Dashboard, erstelle einen neuen **API key** und kopiere ihn.

## Logto konfigurieren {#configure-logto}

1. Gehe zu **Console > Security > CAPTCHA**, wähle **Friendly Captcha** aus und gib den **Site key** sowie den **API key** ein. Belasse **API endpoint** auf **Global** oder wähle **EU**, wenn dein Sitekey auf den EU-Endpunkt beschränkt ist.
2. Alternativ kannst du dies über die Management API (`PUT /api/captcha-provider`) konfigurieren. `apiEndpoint` ist optional und akzeptiert `"global"` (Standard) oder `"eu"`:

```json
{
  "config": {
    "type": "FriendlyCaptcha",
    "siteKey": "<siteKey>",
    "secretKey": "<apiKey>",
    "apiEndpoint": "global"
  }
}
```

## Bring your UI {#bring-your-ui}

Wenn du [Bring your UI](/customization/bring-your-ui/) verwendest, kann Logto Friendly Captcha nicht automatisch in dein individuelles Frontend einfügen oder ausführen. Nachdem du CAPTCHA in der Logto Console aktiviert hast, muss dein individuelles UI `@friendlycaptcha/sdk` laden, das Widget einbinden, auf das Abschluss-Token warten und es an die Experience API senden.

Installiere das Friendly Captcha v2 SDK in deinem individuellen UI-Projekt:

```bash
npm install @friendlycaptcha/sdk
```

Füge einen Container für das Widget hinzu:

```html
<div id="friendly-captcha-container"></div>
```

Binde das Widget mit `FriendlyCaptchaSDK` ein, warte auf `frc:widget.complete`, um `event.detail.response` auszulesen, übergebe dieses Einmal-Token als `captchaToken` in `PUT /api/experience` und setze das Widget mit `widget.reset()` zurück, nachdem das Token verwendet wurde, damit Wiederholungen ein neues Token erhalten:

```js
import { FriendlyCaptchaSDK } from '@friendlycaptcha/sdk';

const sdk = new FriendlyCaptchaSDK();
const element = document.querySelector('#friendly-captcha-container');

const widget = sdk.createWidget({
  element,
  sitekey: '<siteKey>',
  // Setze auf 'eu', wenn du den EU API endpoint in Logto gewählt hast.
  apiEndpoint: 'global',
});

const getCaptchaToken = () => {
  if (widget.getState() === 'completed') {
    return Promise.resolve(widget.getResponse());
  }

  return new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('frc:widget.complete', onComplete);
      widget.removeEventListener('frc:widget.error', onError);
    };

    const onComplete = (event) => {
      cleanup();
      resolve(event.detail.response);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail.error.detail || event.detail.error.code));
    };

    widget.addEventListener('frc:widget.complete', onComplete);
    widget.addEventListener('frc:widget.error', onError);

    if (['init', 'reset', 'unactivated'].includes(widget.getState())) {
      widget.start();
    }
  });
};

// Vor Beginn der Interaktion das Einmal-Token abrufen:
const captchaToken = await getCaptchaToken();

try {
  await fetch('/api/experience', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      interactionEvent: 'SignIn',
      captchaToken,
    }),
  });
} finally {
  // Tokens sind Einmal-Tokens; setze das Widget zurück, damit Wiederholungen ein neues Token erhalten.
  widget.reset();
}
```

## CAPTCHA aktivieren {#enable-captcha}

Denke daran, den CAPTCHA-Botschutz zu aktivieren, nachdem du den CAPTCHA-Anbieter eingerichtet hast.

Gehe zur Sicherheitsseite, finde den CAPTCHA-Tab und aktiviere den Schalter bei "Enable CAPTCHA".
