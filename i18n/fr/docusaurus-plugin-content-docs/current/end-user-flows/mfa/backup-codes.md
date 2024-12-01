---
sidebar_position: 4
---

# Codes de secours

## Concepts

Les codes de secours, également connus sous le nom de code de récupération, sont des codes à usage unique pour l'authentification multi-facteurs (MFA), agissant comme une sauvegarde au cas où les facteurs d'authentification principaux de l'utilisateur (par exemple, l'application d'authentification ou le jeton matériel) ne seraient pas disponibles.

Les perdre peut entraîner des défis de récupération de compte. Par conséquent, il est recommandé de configurer un facteur principal supplémentaire avant d'activer les codes de secours, en leur donnant la priorité.

Logto génère automatiquement 10 codes de secours pour les utilisateurs une fois qu'ils configurent un facteur supplémentaire. Chaque code est à usage unique. Il est conseillé aux utilisateurs de régénérer un nouvel ensemble de codes dans les paramètres de compte utilisateur (accessibles via le [Management API](/integrate-logto/interact-with-management-api/)) avant d'utiliser tous les codes existants.

## Flux d'authentification

- **Flux de configuration des codes de secours**

![Flux de configuration des codes de secours](./assets/backup-codes-set-up-flow.png)

- **Flux de vérification des codes de secours**

![Flux de vérification des codes de secours](./assets/backup-codes-verification-flow.png)
