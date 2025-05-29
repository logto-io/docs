---
slug: /security/blocklist
sidebar_label: Liste de blocage
sidebar_position: 3
---

# Liste de blocage

## Liste de blocage des e-mails {#email-blocklist}

La politique de liste de blocage des e-mails permet de personnaliser les paramètres de blocage afin de prévenir les abus lors de la création de comptes. Elle surveille les adresses e-mail utilisées pour l'inscription et la gestion des comptes. Si un utilisateur tente de s'inscrire ou de lier une adresse e-mail qui enfreint l'une des règles de la liste de blocage, le système rejettera la demande, ce qui aide à limiter les comptes indésirables et à renforcer la sécurité globale des comptes.

Rendez-vous dans <CloudLink to="/security/blocklist">Console > Sécurité > Liste de blocage</CloudLink> pour configurer les paramètres de la liste de blocage des e-mails.

### Bloquer les adresses e-mail jetables {#block-disposable-email-addresses}

Il s'agit d'une fonctionnalité **cloud uniquement**. Une fois activée, le système valide automatiquement le domaine de l'adresse e-mail fournie en le comparant à une liste de domaines d'e-mails jetables connus. Si le domaine figure dans la liste, la demande sera rejetée. La liste des domaines d'e-mails jetables est régulièrement mise à jour pour garantir son efficacité.

### Bloquer le sous-adressage des e-mails {#block-email-subaddressing}

Le sous-adressage des e-mails permet aux utilisateurs de créer des variantes de leur adresse e-mail en ajoutant un signe plus (+) suivi de caractères supplémentaires (ex. : utilisateur+tag@example.com). Cette fonctionnalité peut être exploitée par des utilisateurs malveillants pour contourner les restrictions de la liste de blocage. En activant la fonction de blocage du sous-adressage, le système rejettera toute tentative d'inscription ou de liaison de compte utilisant ce format d'adresse e-mail.

### Liste de blocage personnalisée des e-mails {#custom-email-blocklist}

Vous pouvez créer une liste de blocage personnalisée en spécifiant une liste d'adresses e-mail ou de domaines à bloquer. Le système rejettera toute tentative d'inscription ou de liaison de compte correspondant à ces entrées. La liste de blocage prend en charge la correspondance sur l'adresse e-mail complète ou sur le domaine.

Par exemple, ajouter `@example.com` à la liste de blocage bloquera toutes les adresses e-mail de ce domaine. De même, ajouter `foo@example.com` bloquera spécifiquement cette adresse e-mail.

:::note

Les e-mails jetables, le sous-adressage et les e-mails personnalisés sont restreints lors de l'inscription et de la liaison de compte. Les utilisateurs existants avec ces adresses e-mail peuvent toujours se connecter.

- Les administrateurs peuvent "contourner les restrictions" en ajoutant manuellement des utilisateurs dans <CloudLink to="/users">Console > Gestion des utilisateurs</CloudLink>, ou via [Management API](https://openapi.logto.io/operation/operation-createuser). Par exemple, créer un utilisateur avec une adresse e-mail en sous-adressage lorsque le sous-adressage est bloqué.
- Bloquez les comptes existants en les supprimant ou en les suspendant dans <CloudLink to="/users">Console > Gestion des utilisateurs</CloudLink>.

:::

## Ressources associées

<Url href="https://blog.logto.io/disposable-email">Qu'est-ce qu'un e-mail jetable ? Comment les gérer dans votre application ?</Url>
