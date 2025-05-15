---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise est un service de Google qui protège les sites web contre la fraude et les abus en utilisant une détection avancée des bots sans perturber l'expérience utilisateur. Ce guide vous guidera à travers le processus de configuration de reCAPTCHA Enterprise avec Logto.

## Prérequis {#prerequisites}

- Un projet Google Cloud

## Configurer une clé reCAPTCHA {#setup-a-recaptcha-key}

1. Allez sur la [page reCAPTCHA de Google Cloud Console](https://console.cloud.google.com/security/recaptcha).
2. Cliquez sur le bouton **Créer une clé** près de "Clés reCAPTCHA".
3. Remplissez le formulaire avec les détails suivants :
   - **Nom d'affichage** : N'importe quel nom que vous souhaitez donner à la clé
   - **Type d'application** : Site web
   - **Liste de domaines** : Ajoutez le domaine de point de terminaison de Logto
4. Après avoir créé la clé, vous serez redirigé vers la page des détails de la clé, copiez l'**ID**.

## Configurer une clé API {#setup-an-api-key}

1. Allez sur la [page des identifiants de Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Cliquez sur le bouton **Créer des identifiants** et sélectionnez **Clé API**.
3. Copiez la clé API.
4. Optionnellement, vous pouvez restreindre la clé API à **reCAPTCHA Enterprise API** pour la rendre plus sécurisée.
5. N'oubliez pas de laisser "Restrictions d'application" sur **Aucune** si vous ne comprenez pas ce que c'est.

## Obtenir l'ID du projet {#get-project-id}

1. Copiez l'**ID du projet** depuis la [page d'accueil de Google Cloud Console](https://console.cloud.google.com/welcome).

## Activer CAPTCHA {#enable-captcha}

N'oubliez pas d'activer la protection CAPTCHA contre les bots après avoir configuré le fournisseur CAPTCHA.

Allez sur la page Sécurité, trouvez l'onglet CAPTCHA, et activez le bouton bascule de "Activer CAPTCHA".
