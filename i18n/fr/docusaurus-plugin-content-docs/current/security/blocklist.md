---
slug: /security/blocklist
sidebar_label: Liste de blocage
sidebar_position: 3
---

# Liste de blocage

## Liste de blocage des e-mails {#email-blocklist}

La politique de liste de blocage des e-mails permet de personnaliser les paramètres de blocage afin de prévenir les abus lors de la création de comptes. Elle surveille les adresses e-mail utilisées pour l'inscription et les paramètres de compte. Si un utilisateur tente de s'inscrire ou de lier une adresse e-mail qui enfreint une règle de la liste de blocage, le système rejettera la demande, ce qui aide à limiter les comptes indésirables et à renforcer la sécurité globale des comptes.

Rendez-vous dans <CloudLink to="/security/blocklist">Console > Sécurité > Liste de blocage</CloudLink> pour configurer les paramètres de la liste de blocage des e-mails.

### Bloquer les adresses e-mail jetables {#block-disposable-email-addresses}

Il s'agit d'une fonctionnalité **cloud uniquement**. Une fois activée, le système valide automatiquement le domaine de l'adresse e-mail fournie en le comparant à une liste de domaines d'e-mails jetables connus. Si le domaine figure dans la liste, la demande sera rejetée. La liste des domaines d'e-mails jetables est régulièrement mise à jour pour garantir son efficacité.

### Bloquer le sous-adressage des e-mails {#block-email-subaddressing}

Le sous-adressage des e-mails permet aux utilisateurs de créer des variantes de leur adresse e-mail en ajoutant un signe plus (+) suivi de caractères supplémentaires (par exemple, utilisateur+tag@example.com). Cette fonctionnalité peut être exploitée par des utilisateurs malveillants pour contourner les restrictions de la liste de blocage. En activant la fonction de blocage du sous-adressage, le système rejettera toute tentative d'inscription ou de liaison de compte utilisant un format d'e-mail sous-adressé.

### Liste de blocage des e-mails personnalisée {#custom-email-blocklist}

Vous pouvez créer une liste de blocage personnalisée en spécifiant une liste d'adresses e-mail ou de domaines à bloquer. Le système rejettera toute tentative d'inscription ou de liaison de compte correspondant à ces entrées. La liste de blocage prend en charge la correspondance complète d'adresse e-mail et de domaine.

Par exemple, ajouter `@example.com` à la liste de blocage bloquera toutes les adresses e-mail de ce domaine. De même, ajouter `foo@example.com` bloquera spécifiquement cette adresse e-mail.

:::note

Les e-mails jetables, le sous-adressage et les e-mails personnalisés sont restreints lors de [l'inscription d'un nouvel utilisateur](/end-user-flows/sign-up-and-sign-in/sign-up), [la liaison d'un e-mail lors d'une connexion sociale](/end-user-flows/sign-up-and-sign-in/social-sign-in#collect-sign-up-identifiers), et la mise à jour des e-mails via [Account API](/end-user-flows/account-settings/by-account-api#update-or-link-new-email). Les utilisateurs existants avec ces adresses e-mail peuvent toujours se connecter.

- Les administrateurs peuvent "contourner les restrictions" en ajoutant manuellement des utilisateurs dans <CloudLink to="/users">Console > Gestion des utilisateurs</CloudLink>, ou via [Management API](https://openapi.logto.io/operation/operation-createuser). Par exemple, créer un utilisateur avec une adresse e-mail sous-adressée alors que le sous-adressage est bloqué.
- Bloquez les comptes existants en les supprimant ou en les suspendant dans <CloudLink to="/users">Console > Gestion des utilisateurs</CloudLink>.

:::

## Ressources associées {#related-resources}

<Url href="https://blog.logto.io/disposable-email">Qu'est-ce qu'un e-mail jetable ? Comment les gérer dans votre application ?</Url>
