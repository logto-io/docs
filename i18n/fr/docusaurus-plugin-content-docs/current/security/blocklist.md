---
slug: /security/blocklist
sidebar_label: Blocklist
sidebar_position: 3
---

# Liste de blocage

## Liste de blocage des e-mails {#email-blocklist}

La politique de liste de blocage des e-mails permet de personnaliser les paramètres de la liste de blocage des e-mails pour prévenir les abus d'inscription de comptes. Elle surveille les adresses e-mail utilisées pour l'inscription et les paramètres de compte. Si un utilisateur tente de s'inscrire ou de lier une adresse e-mail qui enfreint les règles de la liste de blocage, le système rejettera la demande, aidant à atténuer les comptes de spam et à améliorer la sécurité globale des comptes.

Visitez le <CloudLink to="/security/blocklist"> Console > Sécurité > Liste de blocage</CloudLink> pour configurer les paramètres de la liste de blocage des e-mails.

### Bloquer le sous-adressage des e-mails {#block-email-subaddressing}

Le sous-adressage des e-mails permet aux utilisateurs de créer des variations de leurs adresses e-mail en ajoutant un signe plus (+) suivi de caractères supplémentaires (par exemple, user+tag@example.com). Cette fonctionnalité peut être exploitée par des utilisateurs malveillants pour contourner les restrictions de la liste de blocage. En activant la fonctionnalité de blocage du sous-adressage des e-mails, le système rejettera toute tentative d'inscription ou de liaison de compte utilisant des formats d'e-mails sous-adressés.

### Liste de blocage des e-mails personnalisée {#custom-email-blocklist}

Vous pouvez créer une liste de blocage des e-mails personnalisée en spécifiant une liste d'adresses e-mail ou de domaines à bloquer. Le système rejettera toute tentative d'inscription ou de liaison de compte correspondant à ces entrées. La liste de blocage prend en charge à la fois la correspondance complète des adresses e-mail et des domaines.

Par exemple, ajouter `@example.com` à la liste de blocage bloquera toutes les adresses e-mail avec ce domaine. De même, ajouter `foo@example.com` bloquera spécifiquement cette adresse e-mail.

### Bloquer les adresses e-mail temporaires {#block-disposable-email-addresses}

Il s'agit d'une fonctionnalité **uniquement disponible sur le cloud**. Une fois activée, le système validera automatiquement le domaine de l'adresse e-mail fournie par rapport à une liste de domaines d'e-mails temporaires connus. Si le domaine est trouvé dans la liste, la demande sera rejetée. La liste des domaines d'e-mails temporaires est régulièrement mise à jour pour garantir son efficacité.
