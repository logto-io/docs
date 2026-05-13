---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile ist ein CAPTCHA-Dienst, der deine Website vor Spam und Missbrauch schützt. Diese Anleitung führt dich durch den Prozess der Einrichtung von Turnstile mit Logto.

## Voraussetzungen {#prerequisites}

- Ein Cloudflare-Konto

## Einrichtung {#setup}

1. Gehe zum [Cloudflare Dashboard](https://dash.cloudflare.com/login) und wähle dein Konto aus.
2. Navigiere zu **Turnstile** > **Widget hinzufügen**.
3. Fülle das Formular mit den folgenden Angaben aus:
   - **Widget-Name**: Beliebiger Name für das Widget
   - **Hostname**: Die Endpunkt-Domain von Logto, z. B. https://[tenant-id].logto.app
   - **Widget-Modus**: Standard belassen

## Site Key und Secret Key abrufen {#get-the-site-key-and-secret-key}

1. Navigiere zu einem gerade erstellten Widget und klicke auf **Widget verwalten**.
2. Scrolle nach unten und kopiere den **Site Key** und den **Secret Key**.

## Bring your UI {#bring-your-ui}

Wenn du [Bring your UI](/customization/bring-your-ui/) verwendest, kann Logto Turnstile nicht automatisch in dein individuelles Frontend einfügen oder ausführen. Nachdem du CAPTCHA in der Logto Console aktiviert hast, muss dein individuelles UI das Turnstile-Skript laden, das Widget rendern und das zurückgegebene Token an die Experience API senden.

Lade das Turnstile-Skript in deinem individuellen UI:

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

Füge einen Container für das Widget hinzu:

```html
<div id="turnstile-container"></div>
```

Bevor du mit der Interaktion beginnst, rendere Turnstile mit deinem Site Key und übergebe das Callback-Token als `captchaToken` in `PUT /api/experience`:

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.turnstile.render('#turnstile-container', {
    sitekey: '<siteKey>',
    callback: resolve,
    'error-callback': reject,
    size: 'flexible',
  });
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
