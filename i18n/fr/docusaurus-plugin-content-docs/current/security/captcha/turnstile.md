---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile est un service CAPTCHA qui aide à protéger votre site web contre le spam et les abus. Ce guide vous accompagnera dans le processus de configuration de Turnstile avec Logto.

## Prérequis {#prerequisites}

- Un compte Cloudflare

## Configuration {#setup}

1. Rendez-vous sur le [Tableau de bord Cloudflare](https://dash.cloudflare.com/login) et sélectionnez votre compte.
2. Naviguez vers **Turnstile** > **Add widget**.
3. Remplissez le formulaire avec les informations suivantes :
   - **Nom du widget** : N'importe quel nom que vous souhaitez donner au widget
   - **Nom d’hôte** : Le domaine de point de terminaison de Logto, par exemple https://[tenant-id].logto.app
   - **Mode du widget** : Laissez la valeur par défaut

## Obtenir la clé de site et la clé secrète {#get-the-site-key-and-secret-key}

1. Accédez à un widget que vous venez de créer, puis cliquez sur **Manage widget**.
2. Faites défiler vers le bas et copiez la **clé de site** et la **clé secrète**.

## Bring your UI {#bring-your-ui}

Si vous utilisez [Bring your UI](/customization/bring-your-ui/), Logto ne peut pas injecter ou exécuter Turnstile automatiquement dans votre frontend personnalisé. Après avoir activé le CAPTCHA dans la Console Logto, votre interface personnalisée doit charger le script Turnstile, afficher le widget et envoyer le jeton retourné à l’Experience API.

Chargez le script Turnstile dans votre interface personnalisée :

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

Ajoutez un conteneur pour le widget :

```html
<div id="turnstile-container"></div>
```

Avant de commencer l’interaction, affichez Turnstile avec votre clé de site et transmettez le jeton de rappel comme `captchaToken` dans `PUT /api/experience` :

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

## Activer le CAPTCHA {#enable-captcha}

N'oubliez pas d'activer la protection contre les bots CAPTCHA après avoir configuré le fournisseur CAPTCHA.

Rendez-vous sur la page Sécurité, trouvez l’onglet CAPTCHA, puis activez le bouton à bascule "Activer CAPTCHA".
