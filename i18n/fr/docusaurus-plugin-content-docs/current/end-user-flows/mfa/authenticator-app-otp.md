---
sidebar_position: 2
---

# OTP de l'application Authenticator

## Concepts

L'application Authenticator, également appelée Jeton logiciel, est l'une des méthodes d' Authentification multi-facteurs (MFA) les plus largement adoptées. Elle génère des mots de passe temporaires à usage unique (OTP) pour renforcer la sécurité de l' Authentification des services en ligne. Contrairement aux jetons matériels physiques, les jetons logiciels sont généralement des applications ou des plugins que les utilisateurs installent sur leurs appareils, qu'il s'agisse d'un smartphone ou d'un navigateur d'ordinateur. Les jetons logiciels peuvent fonctionner localement sur un seul appareil ou se synchroniser sur divers appareils, en fonction des capacités de l'authenticator et des paramètres individuels de l'utilisateur.

Des exemples populaires de jetons logiciels incluent Google Authenticator, Microsoft Authenticator, Duo, 1Password, Authy, et plus encore.

## Flux d'authentification

**Flux de configuration**

1. **Code QR ou clé secrète** : Les utilisateurs reçoivent un code QR ou une clé secrète de votre service.
2. **Ajouter un compte** : En utilisant leur application authenticator, les utilisateurs scannent le code QR ou saisissent manuellement la clé secrète pour ajouter leur compte.
3. **Mot de passe à usage unique dynamique** : L'application authenticator affiche un code à six chiffres qui se rafraîchit toutes les 1-2 minutes pour le compte ajouté.
4. **Compléter la configuration MFA** : Les utilisateurs saisissent ce code dans sa validité sur la page de configuration MFA, complétant ainsi la configuration de l'OTP de l'application Authenticator pour la MFA.

![Flux de configuration OTP](./assets/otp-set-up-flow.png)

**Flux de vérification**

1. **Tentative de connexion** : Lors de la connexion, les utilisateurs sont invités à utiliser la MFA.
2. **Récupérer l'OTP** : Ouvrez leur application authenticator pour récupérer l'OTP pour le compte respectif.
3. **Saisir l'OTP** : Les utilisateurs saisissent l'OTP affiché dans l'application dans sa validité sur la page de vérification en deux étapes.
4. **Authentification** : Le système vérifie l'OTP, accordant l'accès après une validation réussie.

![Flux de vérification OTP](./assets/otp-verification-flow.png)
