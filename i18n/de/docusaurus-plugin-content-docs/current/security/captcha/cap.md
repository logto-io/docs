---
slug: /security/captcha/cap
sidebar_label: Cap
---

# Cap

[Cap](https://capjs.js.org) ist eine Open-Source, selbst gehostete CAPTCHA-Alternative, die auf Proof-of-Work basiert – ohne visuelle Rätsel oder Abhängigkeiten von Drittanbietern. Dadurch eignet sie sich besonders für Regionen, in denen externe CAPTCHA-Dienste nicht erreichbar sind. Diese Anleitung führt dich durch die Einrichtung von Cap mit Logto.

## Voraussetzungen {#prerequisites}

- Eine öffentlich erreichbare [Cap Standalone](https://capjs.js.org/guide/capd/index.html) Instanz über HTTPS, da sowohl die Anmeldeseite im Browser als auch Logto darauf zugreifen müssen.

## Einen Site Key erstellen {#create-a-site-key}

1. Öffne das Dashboard deiner Cap Standalone Instanz und melde dich mit deinem Admin-Schlüssel an.
2. Erstelle einen neuen Site Key. Wenn du CORS-Ursprünge einschränkst, füge die Endpunkt-Domain von Logto hinzu, z. B. `https://[tenant-id].logto.app`.
3. Kopiere den **Site Key** und **Secret Key**. Der Secret Key wird nur einmal angezeigt.

## Logto konfigurieren {#configure-logto}

Wähle in **Konsole > Sicherheit > CAPTCHA** **Cap** aus und fülle die folgenden Angaben aus:

- **Cap-Endpunkt**: Die Basis-URL deiner Cap Standalone Instanz, z. B. `https://cap.example.com`
- **Site Key**: Der oben kopierte Site Key
- **Secret Key**: Der oben kopierte Secret Key

Alternativ kannst du Cap über die Management API mit `PUT /api/captcha-provider` konfigurieren:

```json
{
  "config": {
    "type": "Cap",
    "endpoint": "https://cap.example.com",
    "siteKey": "<siteKey>",
    "secretKey": "<secretKey>"
  }
}
```

:::note
Verwende in der Produktion HTTPS für deinen Cap-Endpunkt. Browser blockieren gemischte HTTP-Anfragen von einer HTTPS-Anmeldeseite, und HTTP sendet den Secret Key unverschlüsselt.
:::

## Sicherheitshinweis {#security-note}

Caps Instrumentierungs-Challenge führt Skripte im Browser aus, um Bots zu erkennen. Während Cap aktiviert ist, erlaubt die integrierte Anmeldeseite von Logto den Cap-Ursprung, Blob-Worker, WebAssembly (`'wasm-unsafe-eval'`) und dynamische JavaScript-Ausführung (`'unsafe-eval'`) in ihrer Content Security Policy.

## Bring your UI {#bring-your-ui}

Wenn du [Bring your UI](/customization/bring-your-ui/) verwendest, kann Logto Cap nicht automatisch in dein individuelles Frontend einbinden oder ausführen. Nachdem du CAPTCHA in der Logto-Konsole aktiviert hast, muss dein individuelles UI `@cap.js/widget` laden, das Widget rendern und das gelöste Token an die Experience API senden.

Lade `@cap.js/widget` in deinem individuellen UI (oder installiere und bundle es in deinem Frontend-Build):

```html
<script src="https://cdn.jsdelivr.net/npm/@cap.js/widget" async></script>
```

:::note
Wenn du `@cap.js/widget` von einem CDN statt als Bundle lädst, füge den CDN-Ursprung (z. B. `https://cdn.jsdelivr.net`) zu `scriptSrc` und `connectSrc` in deinen [benutzerdefinierten CSP-Quellen](/customization/bring-your-ui/#configure-custom-csp-sources) hinzu, damit das Widget-Skript und sein WebAssembly-Solver geladen werden können.
:::

Füge das `<cap-widget>`-Element hinzu, das auf deinen Cap Standalone-Endpunkt und den Site Key verweist:

```html
<cap-widget data-cap-api-endpoint="https://cap.example.com/<siteKey>/"></cap-widget>
```

Höre auf das `solve`-Event (`event.detail.token`), sende das Einmal-Token als `captchaToken` in `PUT /api/experience` und setze das Widget mit `widget.reset()` zurück, nachdem es verwendet wurde:

```js
await customElements.whenDefined('cap-widget');
const widget = document.querySelector('cap-widget');

const captchaToken =
  widget.token ??
  (await new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('solve', onSolve);
      widget.removeEventListener('error', onError);
    };

    const onSolve = (event) => {
      cleanup();
      resolve(event.detail.token);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail?.message ?? 'Cap verification failed'));
    };

    widget.addEventListener('solve', onSolve);
    widget.addEventListener('error', onError);
    widget.solve().catch((error) => {
      cleanup();
      reject(error);
    });
  }));

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
  // Cap-Tokens sind Einmal-Tokens; setze das Widget nach Verbrauch des Tokens zurück.
  widget.reset();
}
```

## CAPTCHA aktivieren {#enable-captcha}

Denke daran, den CAPTCHA-Botschutz zu aktivieren, nachdem du den CAPTCHA-Anbieter eingerichtet hast.

Gehe zur Sicherheitsseite, finde den CAPTCHA-Tab und aktiviere den Schalter bei "CAPTCHA aktivieren".
