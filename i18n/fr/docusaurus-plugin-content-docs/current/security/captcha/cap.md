---
slug: /security/captcha/cap
sidebar_label: Cap
---

# Cap

[Cap](https://capjs.js.org) est une alternative CAPTCHA open-source et auto-hébergée basée sur la preuve de travail, sans énigmes visuelles ni dépendances à des services tiers, ce qui la rend particulièrement adaptée aux régions où les services CAPTCHA externes sont inaccessibles. Ce guide vous accompagne dans la configuration de Cap avec Logto.

## Prérequis {#prerequisites}

- Une instance [Cap Standalone](https://capjs.js.org/guide/capd/index.html) publiquement accessible via HTTPS, car la page de connexion du navigateur et Logto doivent toutes deux y accéder.

## Créer une clé de site {#create-a-site-key}

1. Ouvrez le tableau de bord de votre instance Cap Standalone et connectez-vous avec votre clé d'administration.
2. Créez une nouvelle clé de site. Si vous restreignez les origines CORS, ajoutez le domaine de l'endpoint Logto, tel que `https://[tenant-id].logto.app`.
3. Copiez la **clé de site** et la **clé secrète**. La clé secrète n'est affichée qu'une seule fois.

## Configurer Logto {#configure-logto}

Dans **Console > Sécurité > CAPTCHA**, choisissez **Cap** et renseignez les informations suivantes :

- **Cap endpoint** : L’URL de base de votre instance Cap Standalone, par exemple `https://cap.example.com`
- **Site key** : La clé de site que vous avez copiée ci-dessus
- **Secret key** : La clé secrète que vous avez copiée ci-dessus

Vous pouvez également configurer Cap via la Management API avec `PUT /api/captcha-provider` :

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
Utilisez HTTPS pour votre endpoint Cap en production. Les navigateurs bloquent les requêtes HTTP mixtes depuis une page de connexion HTTPS, et HTTP envoie la clé secrète sans chiffrement.
:::

## Note de sécurité {#security-note}

Le challenge d'instrumentation de Cap évalue des scripts dans le navigateur pour détecter les bots. Lorsque Cap est activé, la page de connexion intégrée de Logto autorise l'origine Cap, les blob workers, WebAssembly (`'wasm-unsafe-eval'`) et l'évaluation dynamique de JavaScript (`'unsafe-eval'`) dans sa politique de sécurité du contenu (CSP).

## Apportez votre interface utilisateur {#bring-your-ui}

Si vous utilisez [Apportez votre interface utilisateur](/customization/bring-your-ui/), Logto ne peut pas injecter ni exécuter Cap automatiquement dans votre frontend personnalisé. Après avoir activé CAPTCHA dans la Console Logto, votre interface personnalisée doit charger `@cap.js/widget`, afficher le widget et envoyer le jeton résolu à l’Experience API.

Chargez `@cap.js/widget` dans votre interface personnalisée (ou installez-le et intégrez-le dans votre build frontend) :

```html
<script src="https://cdn.jsdelivr.net/npm/@cap.js/widget" async></script>
```

:::note
Si vous chargez `@cap.js/widget` depuis un CDN au lieu de l'intégrer, ajoutez l'origine du CDN (comme `https://cdn.jsdelivr.net`) à `scriptSrc` et `connectSrc` dans vos [sources CSP personnalisées](/customization/bring-your-ui/#configure-custom-csp-sources) afin que le script du widget et son solveur WebAssembly puissent se charger.
:::

Ajoutez l’élément `<cap-widget>` pointant vers votre endpoint Cap Standalone et la clé de site :

```html
<cap-widget data-cap-api-endpoint="https://cap.example.com/<siteKey>/"></cap-widget>
```

Écoutez l’événement `solve` (`event.detail.token`), envoyez le jeton à usage unique comme `captchaToken` dans `PUT /api/experience`, puis réinitialisez le widget avec `widget.reset()` après l’avoir consommé :

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
      reject(new Error(event.detail?.message ?? 'La vérification Cap a échoué'));
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
  // Les jetons Cap sont à usage unique ; réinitialisez le widget après avoir consommé le jeton.
  widget.reset();
}
```

## Activer CAPTCHA {#enable-captcha}

N'oubliez pas d'activer la protection CAPTCHA contre les bots après avoir configuré le fournisseur CAPTCHA.

Rendez-vous sur la page Sécurité, trouvez l’onglet CAPTCHA et activez le bouton "Activer CAPTCHA".
