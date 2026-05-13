---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# Protection contre les bots avec CAPTCHA

La protection contre les bots avec CAPTCHA aide à sécuriser vos parcours utilisateurs en vérifiant que les utilisateurs sont humains, réduisant ainsi considérablement les attaques de bots. Logto prend en charge les principaux fournisseurs tels que Google reCAPTCHA Enterprise et Cloudflare Turnstile.

:::note
Le CAPTCHA s'applique aux actions d'identification, de mot de passe, de code de vérification, d'inscription et de récupération de mot de passe. Il ne s'applique pas au [lien magique](/end-user-flows/one-time-token) ou à la [connexion par passkey](/end-user-flows/sign-up-and-sign-in/passkey-sign-in), donc les utilisateurs qui terminent la connexion avec un lien magique ou une passkey n'ont pas besoin de résoudre un défi CAPTCHA supplémentaire.
:::

:::note
Si vous utilisez [Bring your UI](/customization/bring-your-ui/), l'intégration CAPTCHA intégrée ne s'exécute pas dans votre frontend personnalisé. Votre interface personnalisée doit charger le script du fournisseur CAPTCHA, exécuter le défi et envoyer le jeton en tant que `captchaToken` dans `PUT /api/experience`.
:::

## Activer la protection CAPTCHA contre les bots {#enabling-captcha-bot-protection}

Suivez ces étapes pour activer le CAPTCHA sur vos parcours utilisateurs (connexion par identifiant, connexion par mot de passe, inscription et récupération de mot de passe) :

1. **Accédez aux paramètres** : Allez dans **Console > Sécurité > Protection contre les bots**.
2. **Sélectionnez le fournisseur** : Choisissez votre fournisseur CAPTCHA préféré (par exemple, Google reCAPTCHA Enterprise ou Cloudflare Turnstile).
3. **Configuration** : Suivez les instructions sur le côté gauche de la page pour configurer le fournisseur CAPTCHA sélectionné.
4. **Enregistrez** : Cliquez sur **Enregistrer et terminer** pour appliquer vos paramètres.
5. **(Optionnel) Activez le CAPTCHA** : Le CAPTCHA sera automatiquement activé sur la page de sécurité une fois qu'un fournisseur est configuré. Cependant, vous pouvez vérifier ou ajuster manuellement les paramètres si nécessaire.

## Prévisualiser l'intégration CAPTCHA {#previewing-captcha-integration}

Vous avez deux options pour prévisualiser et tester l'intégration CAPTCHA :

1. **Utilisez votre application** : Accédez aux pages de connexion, d'inscription ou de récupération de mot de passe de votre application et effectuez les actions utilisateur correspondantes.
2. **Application de démonstration** : Rendez-vous dans **Commencer** et utilisez l'application de démonstration fournie pour tester la fonctionnalité CAPTCHA.

Assurez-vous que le défi CAPTCHA apparaît comme prévu dans l'une ou l'autre des options.

## Fournisseurs pris en charge {#supported-providers}

Actuellement, nous prenons en charge :

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
