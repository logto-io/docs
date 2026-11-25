---
slug: /security/captcha/geetest
sidebar_label: GeeTest
---

# GeeTest

[GeeTest](https://www.geetest.com) CAPTCHA v4 ist ein adaptiver CAPTCHA-Dienst mit lokalisierten Herausforderungen, der weit verbreitet in Festlandchina eingesetzt wird, wo globale Anbieter wie Google reCAPTCHA möglicherweise schwer erreichbar sind. Diese Anleitung führt dich durch den Prozess der Einrichtung von GeeTest CAPTCHA v4 mit Logto.

## Voraussetzungen {#prerequisites}

- Ein GeeTest-Konto mit aktiviertem CAPTCHA v4.

## Hole die CAPTCHA-ID und den Schlüssel {#get-the-captcha-id-and-key}

1. Melde dich beim [GeeTest-Dashboard](https://auth.geetest.com/login) an.
2. Erstelle eine Anwendung und ein **CAPTCHA v4**-Ereignis.
3. Kopiere die **CAPTCHA-ID** und den **CAPTCHA-Schlüssel** aus dem Dashboard.

## Logto konfigurieren {#configure-logto}

1. Gehe zu **Konsole > Sicherheit > CAPTCHA**.
2. Wähle **GeeTest** als CAPTCHA-Anbieter.
3. Gib die **CAPTCHA-ID** und den **CAPTCHA-Schlüssel** ein, die du aus dem GeeTest-Dashboard kopiert hast, und speichere deine Änderungen.

Alternativ kannst du GeeTest über die Management API (`PUT /api/captcha-provider`) konfigurieren, wobei `type` auf `"Geetest"`, `siteKey` auf deine CAPTCHA-ID und `secretKey` auf deinen CAPTCHA-Schlüssel gesetzt wird:

```json
{
  "config": {
    "type": "Geetest",
    "siteKey": "<captchaId>",
    "secretKey": "<captchaKey>"
  }
}
```

:::note
Die integrierte Anmeldeerfahrung von Logto initialisiert GeeTest v4 im `bind`-Modus, passt die UI-Sprache automatisch an und aktualisiert die Content Security Policy-Header, um GeeTest SDK-, API- und statische Ursprünge zuzulassen, solange GeeTest aktiviert ist.
:::

## Bring your UI {#bring-your-ui}

Wenn du [Bring your UI](/customization/bring-your-ui/) verwendest, kann Logto GeeTest nicht automatisch in dein benutzerdefiniertes Frontend einfügen oder ausführen. Nachdem du CAPTCHA in der Logto-Konsole aktiviert hast, muss dein benutzerdefiniertes UI das GeeTest v4-Skript laden, die Herausforderung ausführen und das serialisierte Validierungsergebnis als `captchaToken` an die Experience API senden.

Lade das GeeTest v4-Skript in dein benutzerdefiniertes UI:

```html
<script src="https://static.geetest.com/v4/gt4.js" async defer></script>
```

Bevor du die Interaktion startest, initialisiere GeeTest v4 im `bind`-Modus mit `window.initGeetest4`, rufe `captcha.showCaptcha()` auf und lese das Validierungsergebnis mit `captcha.getValidate()` innerhalb von `onSuccess` aus. Da `captcha.getValidate()` vier Felder zurückgibt (`lot_number`, `captcha_output`, `pass_token` und `gen_time`), serialisiere das Objekt mit `JSON.stringify(validate)` und übergebe es als `captchaToken` in `PUT /api/experience`:

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.initGeetest4(
    {
      captchaId: '<captchaId>',
      product: 'bind',
      onError: reject,
    },
    (captcha) => {
      captcha
        .onReady(() => {
          captcha.showCaptcha();
        })
        .onSuccess(() => {
          const validate = captcha.getValidate();

          if (!validate) {
            reject(new Error('Missing GeeTest validation result'));
            return;
          }

          // `validate` enthält: lot_number, captcha_output, pass_token, gen_time
          resolve(JSON.stringify(validate));
        })
        .onError(reject)
        .onClose(() => {
          reject(new Error('GeeTest CAPTCHA wurde geschlossen'));
        });
    }
  );
});

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
```

## CAPTCHA aktivieren {#enable-captcha}

Denke daran, den CAPTCHA-Botschutz zu aktivieren, nachdem du den CAPTCHA-Anbieter eingerichtet hast.

Gehe zur Sicherheitsseite, finde den CAPTCHA-Tab und aktiviere den Schalter bei „CAPTCHA aktivieren“.
