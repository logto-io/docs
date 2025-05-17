---
slug: /security/captcha
sidebar_label: CAPTCHA
---

# Protection contre les bots CAPTCHA

La protection contre les bots CAPTCHA aide à sécuriser vos flux utilisateurs en vérifiant que les utilisateurs sont humains, réduisant ainsi considérablement les attaques de bots. Logto prend en charge des fournisseurs de premier plan tels que Google reCAPTCHA Enterprise et Cloudflare Turnstile.

## Activation de la protection contre les bots CAPTCHA {#enabling-captcha-bot-protection}

Suivez ces étapes pour activer CAPTCHA pour vos flux utilisateurs (connexion, inscription et récupération de mot de passe) :

1. **Accédez aux paramètres** : Allez dans **Console > Sécurité > Protection contre les bots**.
2. **Sélectionnez le fournisseur** : Choisissez votre fournisseur CAPTCHA préféré (par exemple, Google reCAPTCHA Enterprise ou Cloudflare Turnstile).
3. **Configuration** : Suivez les instructions sur le côté gauche de la page pour configurer le fournisseur CAPTCHA sélectionné.
4. **Enregistrer** : Cliquez sur **Enregistrer et terminer** pour appliquer vos paramètres.
5. **(Optionnel) Activer CAPTCHA** : CAPTCHA sera automatiquement activé sur la page de sécurité une fois qu'un fournisseur est configuré. Cependant, vous pouvez vérifier ou ajuster manuellement les paramètres si nécessaire.

## Prévisualisation de l'intégration CAPTCHA {#previewing-captcha-integration}

Vous avez deux options pour prévisualiser et tester l'intégration CAPTCHA :

1. **Utilisez votre application** : Accédez aux pages de connexion, d'inscription ou de récupération de mot de passe de votre application et tentez les actions utilisateur respectives.
2. **Application de démonstration** : Allez dans **Commencer** et utilisez l'application de démonstration fournie pour tester la fonctionnalité CAPTCHA.

Assurez-vous que le défi CAPTCHA apparaît comme prévu dans l'une ou l'autre option.

## Fournisseurs pris en charge {#supported-providers}

Actuellement, nous prenons en charge :

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
