export const sampleInput = `---
sidebar_position: 2
---

# Authentication vs. authorization

The difference between **authentication** and **authorization** can be summarized as follows:

- **Authentication** answers the question “Which identity do you own?”
- **Authorization** answers the question “What can you do?”

For a complete customer identity and access management (CIAM) introduction, you can refer to our CIAM series:

- [CIAM 101: Authentication, Identity, SSO](https://blog.logto.io/ciam-101-intro-authn-sso/)
- [CIAM 102: Authorization & Role-based Access Control](https://blog.logto.io/ciam-102-authz-and-rbac/)

## Authentication

Logto supports various interactive and non-interactive authentication methods, for example:

- **Sign-in experience**: The authentication process for end-users.
- **Machine-to-machine (M2M) authentication**: The authentication process for services or applications.

The ultimate goal of authentication is dramatically simple: to verify and get the unique identifier of the entity (in Logto, a user or an application).

## Authorization

In Logto, authorization is done through role-based access control (RBAC). It gives you the complete control to manage the access of your users or M2M applications to the following:

- **API resources**: A global entity that represents by an absolute URI.
- **Organizations**: A group of users or applications.
- **Organization API resources**: An API resource that belongs to an organization.

To learn more about these concepts, you can refer to the following resources:

- [Role-based access control (RBAC)](/authorization/role-based-access-control)
- [Organizations (Multi-tenancy)](/organizations)

Here's a visual representation of the relationship between these concepts:

\`\`\`mermaid
graph TD
  subgraph Resources
    R(API resources)
    O(Organizations)
    OR(Organization API resources)
  end

  subgraph Identities
    U(Users)
    A(M2M applications)
  end
\`\`\`

In a nutshell, authorization is about defining the rules that determine what entities in the "Identities" group can access the entities in the "Resources" group.

## Frequently asked questions

### I need to specify which users can sign in to an application

Due to the nature of single sign-on (SSO), Logto currently does not support using applications as resources. Instead, you can define API resources and permissions to control access to your resources.

### I need my users to sign in to an organization

As mentioned earlier, authentication involves verifying the identity of an entity, while access control is handled through authorization. Therefore:

- Determining which organization(s) a user belongs to is an authorization concern.
- The sign-in process is an authentication concern.

This means that there is no concept of "signing in to an organization" in Logto. Once a user is authenticated, they can be authorized to access all resources (including organization resources) based on the defined permissions.

This model is efficient and clear, as it separates the concerns of authentication and authorization. All modern SaaS applications, such as GitHub and Notion, follow this model.

However, there are some cases where you need to establish 1-1 mappings between user sources and organizations. In this case, [enterprise SSO](/end-user-flows/enterprise-sso) and [organization Just-in-Time (JIT) provisioning](/organizations/just-in-time-provisioning) can be helpful.

### Our customers need custom branding for their sign-in pages

Please check out [app-specific branding](/customization/match-your-brand/#app-specific-branding) and [organization-specific branding](/customization/match-your-brand/#organization-specific-branding) for related configurations.
`;

/** The sample translations to align the baseline. */
export const sampleTranslations = Object.freeze({
  de: `---
sidebar_position: 2
---

# Authentifizierung vs. Autorisierung

Der Unterschied zwischen **Authentifizierung** und **Autorisierung** lässt sich wie folgt zusammenfassen:

- **Authentifizierung (Authentication)** beantwortet die Frage „Welche Identität besitzt du?“
- **Autorisierung (Authorization)** beantwortet die Frage „Was kannst du tun?“

Für eine vollständige Einführung in das Customer Identity and Access Management (CIAM) kannst du auf unsere CIAM-Serie verweisen:

- [CIAM 101: Authentication, Identity, SSO](https://blog.logto.io/ciam-101-intro-authn-sso/)
- [CIAM 102: Authorization & Role-based Access Control](https://blog.logto.io/ciam-102-authz-and-rbac/)

## Authentifizierung

Logto unterstützt verschiedene interaktive und nicht-interaktive Authentifizierungsmethoden, zum Beispiel:

- **Anmeldeerfahrung**: Der Authentifizierungsprozess für Endbenutzer.
- **Maschine-zu-Maschine (M2M) Authentifizierung**: Der Authentifizierungsprozess für Dienste oder Anwendungen.

Das ultimative Ziel der Authentifizierung ist denkbar einfach: die Überprüfung und das Erhalten des eindeutigen Identifikators der Entität (in Logto, ein Benutzer oder eine Anwendung).

## Autorisierung

In Logto erfolgt die Autorisierung durch rollenbasierte Zugangskontrolle (RBAC). Sie gibt dir die vollständige Kontrolle über die Verwaltung des Zugangs deiner Benutzer oder M2M-Anwendungen zu den folgenden:

- **API-Ressourcen**: Eine globale Entität, die durch eine absolute URI dargestellt wird.
- **Organisationen**: Eine Gruppe von Benutzern oder Anwendungen.
- **Organisations-API-Ressourcen**: Eine API-Ressource, die zu einer Organisation gehört.

Um mehr über diese Konzepte zu erfahren, kannst du auf die folgenden Ressourcen verweisen:

- [Rollenbasierte Zugangskontrolle (RBAC)](/authorization/role-based-access-control)
- [Organisationen (Multi-Tenancy)](/organizations)

Hier ist eine visuelle Darstellung der Beziehung zwischen diesen Konzepten:

\`\`\`mermaid
graph TD
  subgraph Resources
    R(API-Ressourcen)
    O(Organisationen)
    OR(Organisations-API-Ressourcen)
  end

  subgraph Identities
    U(Benutzer)
    A(M2M-Anwendungen)
  end
\`\`\`

Kurz gesagt, bei der Autorisierung geht es darum, die Regeln festzulegen, die bestimmen, welche Entitäten in der Gruppe "Identitäten" auf die Entitäten in der Gruppe "Ressourcen" zugreifen können.

## Häufig gestellte Fragen

### Ich muss angeben, welche Benutzer sich bei einer Anwendung anmelden können

Aufgrund der Natur von Single Sign-On (SSO) unterstützt Logto derzeit nicht die Verwendung von Anwendungen als Ressourcen. Stattdessen kannst du API-Ressourcen und Berechtigungen definieren, um den Zugriff auf deine Ressourcen zu steuern.

### Ich benötige, dass sich meine Benutzer bei einer Organisation anmelden

Wie bereits erwähnt, beinhaltet die Authentifizierung die Überprüfung der Identität einer Entität, während die Zugangskontrolle durch Autorisierung gehandhabt wird. Daher:

- Die Bestimmung, zu welcher(n) Organisation(en) ein Benutzer gehört, ist ein Autorisierungsanliegen.
- Der Anmeldeprozess ist ein Authentifizierungsanliegen.

Das bedeutet, dass es in Logto kein Konzept des "Anmeldens bei einer Organisation" gibt. Sobald ein Benutzer authentifiziert ist, kann er basierend auf den definierten Berechtigungen autorisiert werden, auf alle Ressourcen (einschließlich Organisationsressourcen) zuzugreifen.

Dieses Modell ist effizient und klar, da es die Anliegen der Authentifizierung und Autorisierung trennt. Alle modernen SaaS-Anwendungen, wie GitHub und Notion, folgen diesem Modell.

Es gibt jedoch einige Fälle, in denen du 1-1-Zuordnungen zwischen Benutzerquellen und Organisationen herstellen musst. In diesem Fall können [Enterprise SSO](/end-user-flows/enterprise-sso) und [Organisation Just-in-Time (JIT) Bereitstellung](/organizations/just-in-time-provisioning) hilfreich sein.

### Unsere Kunden benötigen ein individuelles Branding für ihre Anmeldeseiten

Bitte schaue dir [App-spezifisches Branding](/customization/match-your-brand/#app-specific-branding) und [Organisationsspezifisches Branding](/customization/match-your-brand/#organization-specific-branding) für verwandte Konfigurationen an.
`,
});
