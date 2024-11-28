---
sidebar_position: 4
---

# Codes de sauvegarde

## Concepts

Les codes de sauvegarde, également appelés codes de récupération, sont des codes à usage unique pour l'authentification multi-facteurs (MFA), servant de sauvegarde au cas où les facteurs d'authentification principaux de l'utilisateur (par exemple, application d'authentification ou jeton matériel) ne seraient pas disponibles.

Les perdre peut entraîner des défis de récupération de compte. Par conséquent, il est recommandé de configurer un facteur principal supplémentaire avant d'activer les codes de sauvegarde, en lui donnant la priorité.

Logto génère automatiquement 10 codes de sauvegarde pour les utilisateurs une fois qu'ils configurent un facteur supplémentaire. Chaque code est à usage unique. Il est conseillé aux utilisateurs de régénérer un nouvel ensemble de codes dans les paramètres du compte utilisateur (accessible via le [Management API](/integrate-logto/interact-with-management-api/)) avant d'utiliser tous les codes existants.

## Flux d'authentification

- **Flux de configuration**

![Flux de configuration des codes de sauvegarde](./assets/backup-codes-set-up-flow.png)

- **Flux de vérification**

![Flux de vérification des codes de sauvegarde](./assets/backup-codes-verification-flow.png)
