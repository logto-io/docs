---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise est un service de Google qui protège les sites web contre la fraude et les abus grâce à une détection avancée des bots, sans perturber l'expérience utilisateur. Ce guide vous accompagnera dans la configuration de reCAPTCHA Enterprise avec Logto.

## Prérequis {#prerequisites}

- Un projet Google Cloud

## Configurer une clé reCAPTCHA {#setup-a-recaptcha-key}

1. Rendez-vous sur la [page reCAPTCHA de la Google Cloud Console](https://console.cloud.google.com/security/recaptcha).
2. Cliquez sur le bouton **Créer une clé** à côté de "Clés reCAPTCHA".
3. Remplissez le formulaire avec les informations suivantes :
   - **Nom d’affichage** : Le nom que vous souhaitez donner à la clé
   - **Type d’application** : Site web
   - **Liste de domaines** : Ajoutez le domaine de l’endpoint Logto
   - **Type de vérification** : Choisissez entre **Basé sur le score (invisible)** ou **Case à cocher**. Cela détermine la façon dont reCAPTCHA sera affiché aux utilisateurs. Voir [Mode de vérification](#verification-mode) pour plus de détails.
4. Après avoir créé la clé, vous serez redirigé vers la page de détails de la clé, copiez l’**ID**.

## Configurer une clé API {#setup-an-api-key}

1. Rendez-vous sur la [page Identifiants de la Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Cliquez sur le bouton **Créer des identifiants** et sélectionnez **Clé API**.
3. Copiez la clé API.
4. Optionnellement, vous pouvez restreindre la clé API à **reCAPTCHA Enterprise API** pour plus de sécurité.
5. Pensez à laisser "Restrictions d’application" sur **Aucune** si vous ne comprenez pas ce que c’est.

## Obtenir l’ID du projet {#get-project-id}

1. Copiez l’**ID du projet** depuis la [page d’accueil de la Google Cloud Console](https://console.cloud.google.com/welcome).

## Mode de vérification {#verification-mode}

reCAPTCHA Enterprise prend en charge deux modes de vérification :

- **Invisible** : Vérification basée sur le score qui s’exécute automatiquement en arrière-plan sans interaction utilisateur. C’est le mode par défaut.
- **Case à cocher** : Affiche le widget classique "Je ne suis pas un robot" qui nécessite une interaction utilisateur.

:::note
Le mode de vérification que vous sélectionnez dans Logto doit correspondre au type de clé que vous avez créé dans la Google Cloud Console. Si vous avez créé une clé basée sur le score, sélectionnez **Invisible**. Si vous avez créé une clé de type case à cocher, sélectionnez **Case à cocher**.
:::

## Bring your UI {#bring-your-ui}

Si vous utilisez [Bring your UI](/customization/bring-your-ui/), Logto ne peut pas injecter ou exécuter automatiquement reCAPTCHA dans votre frontend personnalisé. Après avoir activé CAPTCHA dans Logto Console, votre interface personnalisée doit charger le script reCAPTCHA Enterprise, obtenir un jeton CAPTCHA et l’envoyer à l’Experience API.

Pour le mode **Invisible**, chargez le script avec votre clé de site :

```html
<script src="https://www.google.com/recaptcha/enterprise.js?render=<siteKey>" async defer></script>
```

Si vous avez configuré un domaine personnalisé dans Logto, remplacez `www.google.com` par ce domaine, par exemple `recaptcha.net`.

Avant de démarrer l’interaction, exécutez reCAPTCHA avec l’action fixe `interaction` et transmettez le jeton retourné comme `captchaToken` dans `PUT /api/experience` :

```js
const captchaToken = await grecaptcha.enterprise.execute('<siteKey>', {
  action: 'interaction',
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

Pour le mode **Case à cocher**, chargez le script avec `render=explicit`, affichez le widget sur votre page, et utilisez le jeton de rappel comme `captchaToken` lors de l’appel à `PUT /api/experience`.

## Domaine personnalisé {#custom-domain}

Par défaut, Logto charge le script reCAPTCHA depuis `www.google.com`. Cependant, dans certaines régions où le domaine standard de Google est inaccessible, vous pouvez configurer un domaine alternatif.

Domaines pris en charge :

- `www.google.com` (par défaut)
- `recaptcha.net`

Pour configurer un domaine personnalisé, saisissez le domaine dans le champ **Domaine** lors de la configuration de reCAPTCHA Enterprise dans Logto Console.

## Activer CAPTCHA {#enable-captcha}

N’oubliez pas d’activer la protection CAPTCHA contre les bots après avoir configuré le fournisseur CAPTCHA.

Rendez-vous sur la page Sécurité, trouvez l’onglet CAPTCHA, et activez le bouton "Activer CAPTCHA".
