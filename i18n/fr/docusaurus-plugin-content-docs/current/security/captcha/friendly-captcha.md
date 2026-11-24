---
slug: /security/captcha/friendly-captcha
sidebar_label: Friendly Captcha
---

# Friendly Captcha

[Friendly Captcha](https://friendlycaptcha.com) v2 est un service CAPTCHA axé sur la confidentialité, conforme au RGPD, basé sur la preuve de travail sans énigmes visuelles. Ce guide vous accompagne dans la configuration de Friendly Captcha avec Logto.

## Prérequis {#prerequisites}

- Un compte Friendly Captcha

## Obtenir le sitekey et la clé API {#get-the-sitekey-and-api-key}

1. Connectez-vous au [tableau de bord Friendly Captcha](https://app.friendlycaptcha.com) et allez dans **Applications**.
2. Cliquez sur **+ Nouvelle application** et sélectionnez **v2**.
3. Si vous restreignez les origines autorisées sur l'application, ajoutez le domaine de votre point de terminaison Logto (par exemple, `https://[tenant-id].logto.app`).
4. Gardez le point de terminaison global (`global.frcapi.com`) activé sauf si vous restreignez le sitekey au [point de terminaison UE](https://developer.friendlycaptcha.com/docs/v2/guides/eu-endpoint) (`eu.frcapi.com`, disponible avec les offres Advanced et Enterprise), puis copiez le **Sitekey** (commence par `FC`).
5. Ouvrez **Clés API** dans le tableau de bord, créez une nouvelle **clé API** et copiez-la.

## Configurer Logto {#configure-logto}

1. Allez dans **Console > Sécurité > CAPTCHA**, sélectionnez **Friendly Captcha**, puis saisissez la **clé de site** et la **clé API**. Laissez **API endpoint** sur **Global**, ou choisissez **EU** si votre sitekey est restreint au point de terminaison UE.
2. Vous pouvez également le configurer via la Management API (`PUT /api/captcha-provider`). `apiEndpoint` est optionnel et accepte `"global"` (par défaut) ou `"eu"` :

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

## Apportez votre interface utilisateur {#bring-your-ui}

Si vous utilisez [Apportez votre interface utilisateur](/customization/bring-your-ui/), Logto ne peut pas injecter ou exécuter automatiquement Friendly Captcha dans votre frontend personnalisé. Après avoir activé CAPTCHA dans la Console Logto, votre interface personnalisée doit charger `@friendlycaptcha/sdk`, monter le widget, attendre le jeton de complétion, puis l'envoyer à l’Experience API.

Installez le SDK Friendly Captcha v2 dans votre projet d’interface personnalisée :

```bash
npm install @friendlycaptcha/sdk
```

Ajoutez un conteneur pour le widget :

```html
<div id="friendly-captcha-container"></div>
```

Montez le widget avec `FriendlyCaptchaSDK`, attendez `frc:widget.complete` pour lire `event.detail.response`, transmettez ce jeton à usage unique comme `captchaToken` dans `PUT /api/experience`, puis réinitialisez via `widget.reset()` après avoir consommé le jeton afin que les tentatives suivantes obtiennent un nouveau jeton :

```js
import { FriendlyCaptchaSDK } from '@friendlycaptcha/sdk';

// Instanciation du SDK Friendly Captcha
const sdk = new FriendlyCaptchaSDK();
const element = document.querySelector('#friendly-captcha-container');

const widget = sdk.createWidget({
  element,
  sitekey: '<siteKey>',
  // Définir sur 'eu' si vous avez choisi le point de terminaison API UE dans Logto.
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

// Avant de démarrer l'interaction, obtenez le jeton à usage unique :
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
  // Les jetons sont à usage unique ; réinitialisez le widget pour obtenir un nouveau jeton lors d'une nouvelle tentative.
  widget.reset();
}
```

## Activer CAPTCHA {#enable-captcha}

N'oubliez pas d'activer la protection CAPTCHA contre les bots après avoir configuré le fournisseur CAPTCHA.

Rendez-vous sur la page Sécurité, trouvez l’onglet CAPTCHA, puis activez le bouton "Activer CAPTCHA".
