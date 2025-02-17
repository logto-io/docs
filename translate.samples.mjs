/* eslint-disable max-lines */
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
  es: `---
sidebar_position: 2
---

# Autenticación vs. autorización

La diferencia entre **autenticación** y **autorización** se puede resumir de la siguiente manera:

- **Autenticación (Authentication)** responde a la pregunta "¿Qué identidad posees?"
- **Autorización (Authorization)** responde a la pregunta "¿Qué puedes hacer?"

Para una introducción completa a la gestión de identidad y acceso del cliente (CIAM), puedes consultar nuestra serie de CIAM:

- [CIAM 101: Authentication, Identity, SSO](https://blog.logto.io/ciam-101-intro-authn-sso/)
- [CIAM 102: Authorization & Role-based Access Control](https://blog.logto.io/ciam-102-authz-and-rbac/)

## Autenticación

Logto admite varios métodos de autenticación interactivos y no interactivos, por ejemplo:

- **Experiencia de inicio de sesión**: El proceso de autenticación para los usuarios finales.
- **Autenticación máquina a máquina (M2M)**: El proceso de autenticación para servicios o aplicaciones.

El objetivo final de la autenticación es extremadamente simple: verificar y obtener el identificador único de la entidad (en Logto, un usuario o una aplicación).

## Autorización

En Logto, la autorización se realiza a través del control de acceso basado en roles (RBAC). Te da el control completo para gestionar el acceso de tus usuarios o aplicaciones M2M a lo siguiente:

- **Recursos de API (API resources)**: Una entidad global representada por un URI absoluto.
- **Organizaciones (Organizations)**: Un grupo de usuarios o aplicaciones.
- **Recursos de API de la organización (Organization API resources)**: Un recurso de API que pertenece a una organización.

Para aprender más sobre estos conceptos, puedes consultar los siguientes recursos:

- [Control de acceso basado en roles (RBAC)](/authorization/role-based-access-control)
- [Organizaciones (Multi-tenancy)](/organizations)

Aquí tienes una representación visual de la relación entre estos conceptos:

\`\`\`mermaid
graph TD
  subgraph Resources
    R(Recursos de API)
    O(Organizaciones)
    OR(Recursos de API de la organización)
  end

  subgraph Identities
    U(Usuarios)
    A(Aplicaciones M2M)
  end
\`\`\`

En resumen, la autorización se trata de definir las reglas que determinan qué entidades en el grupo "Identidades" pueden acceder a las entidades en el grupo "Recursos".

## Preguntas frecuentes

### Necesito especificar qué usuarios pueden iniciar sesión en una aplicación

Debido a la naturaleza del inicio de sesión único (SSO), Logto actualmente no admite el uso de aplicaciones como recursos. En su lugar, puedes definir recursos de API y permisos para controlar el acceso a tus recursos.

### Necesito que mis usuarios inicien sesión en una organización

Como se mencionó anteriormente, la autenticación implica verificar la identidad de una entidad, mientras que el control de acceso se maneja a través de la autorización. Por lo tanto:

- Determinar a qué organización(es) pertenece un usuario es una preocupación de autorización.
- El proceso de inicio de sesión es una preocupación de autenticación.

Esto significa que no hay un concepto de "iniciar sesión en una organización" en Logto. Una vez que un usuario está autenticado, puede ser autorizado para acceder a todos los recursos (incluidos los recursos de la organización) basándose en los permisos definidos.

Este modelo es eficiente y claro, ya que separa las preocupaciones de autenticación y autorización. Todas las aplicaciones SaaS modernas, como GitHub y Notion, siguen este modelo.

Sin embargo, hay algunos casos en los que necesitas establecer mapeos 1-1 entre fuentes de usuarios y organizaciones. En este caso, el [SSO empresarial](/end-user-flows/enterprise-sso) y el [aprovisionamiento Just-in-Time (JIT) de la organización](/organizations/just-in-time-provisioning) pueden ser útiles.

### Nuestros clientes necesitan personalización de marca para sus páginas de inicio de sesión

Por favor, consulta [personalización específica de la aplicación](/customization/match-your-brand/#app-specific-branding) y [personalización específica de la organización](/customization/match-your-brand/#organization-specific-branding) para configuraciones relacionadas.`,
  fr: `---
sidebar_position: 2
---

# Authentification vs. autorisation

La différence entre **l'authentification** et **l'autorisation** peut être résumée comme suit :

- **Authentification (Authentication)** répond à la question "Quelle identité possédez-vous ?"
- **Autorisation (Authorization)** répond à la question "Que pouvez-vous faire ?"

Pour une introduction complète à la gestion des identités et des accès des clients (CIAM), vous pouvez vous référer à notre série CIAM :

- [CIAM 101 : Authentification, Identité, SSO](https://blog.logto.io/ciam-101-intro-authn-sso/)
- [CIAM 102 : Autorisation & Contrôle d’accès basé sur les rôles (RBAC)](https://blog.logto.io/ciam-102-authz-and-rbac/)

## Authentification

Logto prend en charge diverses méthodes d'authentification interactives et non interactives, par exemple :

- **Expérience de connexion** : Le processus d'authentification pour les utilisateurs finaux.
- **Authentification machine à machine (M2M)** : Le processus d'authentification pour les services ou les applications.

L'objectif ultime de l'authentification est extrêmement simple : vérifier et obtenir l'identifiant unique de l'entité (dans Logto, un utilisateur ou une application).

## Autorisation

Dans Logto, l'autorisation est effectuée via le contrôle d’accès basé sur les rôles (RBAC). Cela vous donne un contrôle complet pour gérer l'accès de vos utilisateurs ou applications M2M aux éléments suivants :

- **Ressources API** : Une entité globale représentée par un URI absolu.
- **Organisations** : Un groupe d'utilisateurs ou d'applications.
- **Ressources API d'organisation** : Une ressource API qui appartient à une organisation.

Pour en savoir plus sur ces concepts, vous pouvez vous référer aux ressources suivantes :

- [Contrôle d’accès basé sur les rôles (RBAC)](/authorization/role-based-access-control)
- [Organisations (Multi-tenancy)](/organizations)

Voici une représentation visuelle de la relation entre ces concepts :

\`\`\`mermaid
graph TD
  subgraph Resources
    R(Ressources API)
    O(Organisations)
    OR(Ressources API d'organisation)
  end

  subgraph Identities
    U(Utilisateurs)
    A(Applications M2M)
  end
\`\`\`

En résumé, l'autorisation consiste à définir les règles qui déterminent quelles entités du groupe "Identités" peuvent accéder aux entités du groupe "Resources".

## Questions fréquemment posées

### Je dois spécifier quels utilisateurs peuvent se connecter à une application

En raison de la nature de l'authentification unique (SSO), Logto ne prend actuellement pas en charge l'utilisation des applications en tant que ressources. Au lieu de cela, vous pouvez définir des ressources API et des permissions pour contrôler l'accès à vos ressources.

### Je veux que mes utilisateurs se connectent à une organisation

Comme mentionné précédemment, l'authentification implique la vérification de l'identité d'une entité, tandis que le contrôle d'accès est géré par l'autorisation. Par conséquent :

- Déterminer à quelle(s) organisation(s) un utilisateur appartient est une question d'autorisation.
- Le processus de connexion est une question d'authentification.

Cela signifie qu'il n'y a pas de concept de "connexion à une organisation" dans Logto. Une fois qu'un utilisateur est authentifié, il peut être autorisé à accéder à toutes les ressources (y compris les ressources d'organisation) en fonction des permissions définies.

Ce modèle est efficace et clair, car il sépare les préoccupations de l'authentification et de l'autorisation. Toutes les applications SaaS modernes, telles que GitHub et Notion, suivent ce modèle.

Cependant, il existe certains cas où vous devez établir des correspondances 1-1 entre les sources d'utilisateurs et les organisations. Dans ce cas, [SSO d’entreprise](/end-user-flows/enterprise-sso) et [approvisionnement Just-in-Time (JIT) d'organisation](/organizations/just-in-time-provisioning) peuvent être utiles.

### Nos clients ont besoin d'une personnalisation de marque pour leurs pages de connexion

Veuillez consulter [personnalisation spécifique à l'application](/customization/match-your-brand/#app-specific-branding) et [personnalisation spécifique à l'organisation](/customization/match-your-brand/#organization-specific-branding) pour les configurations associées.
`,
  'pt-BR': `---
sidebar_position: 2
---

# Autenticação vs. autorização

A diferença entre **autenticação** e **autorização** pode ser resumida da seguinte forma:

- **Autenticação (Authentication)** responde à pergunta "Qual identidade você possui?"
- **Autorização (Authorization)** responde à pergunta "O que você pode fazer?"

Para uma introdução completa ao gerenciamento de identidade e acesso do cliente (CIAM), você pode consultar nossa série CIAM:

- [CIAM 101: Authentication, Identity, SSO](https://blog.logto.io/ciam-101-intro-authn-sso/)
- [CIAM 102: Authorization & Role-based Access Control](https://blog.logto.io/ciam-102-authz-and-rbac/)

## Autenticação (Authentication)

Logto suporta vários métodos de autenticação interativos e não interativos, por exemplo:

- **Experiência de login**: O processo de autenticação para usuários finais.
- **Autenticação máquina para máquina (M2M)**: O processo de autenticação para serviços ou aplicativos.

O objetivo final da autenticação é dramaticamente simples: verificar e obter o identificador único da entidade (no Logto, um usuário ou um aplicativo).

## Autorização (Authorization)

No Logto, a autorização é feita através do controle de acesso baseado em papel (RBAC). Ele oferece controle total para gerenciar o acesso de seus usuários ou aplicativos M2M aos seguintes:

- **Recursos de API (API resources)**: Uma entidade global representada por um URI absoluto.
- **Organizações (Organizations)**: Um grupo de usuários ou aplicativos.
- **Recursos de API da organização (Organization API resources)**: Um recurso de API que pertence a uma organização.

Para saber mais sobre esses conceitos, você pode consultar os seguintes recursos:

- [Controle de acesso baseado em papel (RBAC)](/authorization/role-based-access-control)
- [Organizações (Multi-tenancy)](/organizations)

Aqui está uma representação visual da relação entre esses conceitos:

\`\`\`mermaid
graph TD
  subgraph Resources
    R(Recursos de API)
    O(Organizações)
    OR(Recursos de API da organização)
  end

  subgraph Identities
    U(Usuários)
    A(Aplicativos M2M)
  end
\`\`\`

Em resumo, a autorização é sobre definir as regras que determinam quais entidades no grupo "Identities" podem acessar as entidades no grupo "Resources".

## Perguntas frequentes

### Preciso especificar quais usuários podem fazer login em um aplicativo

Devido à natureza da autenticação única (SSO), o Logto atualmente não suporta o uso de aplicativos como recursos. Em vez disso, você pode definir recursos de API e permissões para controlar o acesso aos seus recursos.

### Preciso que meus usuários façam login em uma organização

Como mencionado anteriormente, a autenticação envolve verificar a identidade de uma entidade, enquanto o controle de acesso é tratado através da autorização. Portanto:

- Determinar a qual(is) organização(ões) um usuário pertence é uma preocupação de autorização.
- O processo de login é uma preocupação de autenticação.

Isso significa que não há conceito de "fazer login em uma organização" no Logto. Uma vez que um usuário é autenticado, ele pode ser autorizado a acessar todos os recursos (incluindo recursos da organização) com base nas permissões definidas.

Esse modelo é eficiente e claro, pois separa as preocupações de autenticação e autorização. Todos os aplicativos SaaS modernos, como GitHub e Notion, seguem esse modelo.

No entanto, há alguns casos em que você precisa estabelecer mapeamentos 1-1 entre fontes de usuários e organizações. Nesse caso, [SSO corporativo (Enterprise SSO)](/end-user-flows/enterprise-sso) e [provisionamento Just-in-Time (JIT) da organização](/organizations/just-in-time-provisioning) podem ser úteis.

### Nossos clientes precisam de personalização de marca para suas páginas de login

Por favor, confira [personalização específica do aplicativo](/customization/match-your-brand/#app-specific-branding) e [personalização específica da organização](/customization/match-your-brand/#organization-specific-branding) para configurações relacionadas.`,
  ja: `---
sidebar_position: 2
---

# 認証 (Authentication) と認可 (Authorization)

**認証 (Authentication)** と **認可 (Authorization)** の違いは次のように要約できます：

- **認証 (Authentication)** は「どのアイデンティティを所有していますか？」という質問に答えます。
- **認可 (Authorization)** は「何ができますか？」という質問に答えます。

完全な顧客アイデンティティとアクセス管理 (CIAM) の紹介については、CIAM シリーズを参照できます：

- [CIAM 101: 認証 (Authentication)、アイデンティティ、シングルサインオン (SSO)](https://blog.logto.io/ciam-101-intro-authn-sso/)
- [CIAM 102: 認可 (Authorization) とロールベースのアクセス制御 (RBAC)](https://blog.logto.io/ciam-102-authz-and-rbac/)

## 認証 (Authentication)

Logto は、さまざまなインタラクティブおよび非インタラクティブな認証 (Authentication) 方法をサポートしています。例えば：

- **サインイン体験**：エンドユーザーのための認証 (Authentication) プロセス。
- **マシン間通信 (M2M) 認証 (Authentication)**：サービスまたはアプリケーションのための認証 (Authentication) プロセス。

認証 (Authentication) の究極の目標は非常にシンプルです：エンティティ（Logto ではユーザーまたはアプリケーション）の一意の識別子を確認し取得することです。

## 認可 (Authorization)

Logto では、認可 (Authorization) はロールベースのアクセス制御 (RBAC) を通じて行われます。これにより、次のアクセスを管理するための完全なコントロールが可能になります：

- **API リソース**：絶対 URI で表されるグローバルエンティティ。
- **組織 (Organizations)**：ユーザーまたはアプリケーションのグループ。
- **組織 API リソース**：組織に属する API リソース。

これらの概念について詳しく知るには、次のリソースを参照してください：

- [ロールベースのアクセス制御 (RBAC)](/authorization/role-based-access-control)
- [組織 (マルチテナンシー)](/organizations)

これらの概念間の関係を視覚的に表現したものがこちらです：

\`\`\`mermaid
graph TD
  subgraph Resources
    R(API リソース)
    O(組織)
    OR(組織 API リソース)
  end

  subgraph Identities
    U(ユーザー)
    A(M2M アプリケーション)
  end
\`\`\`

要するに、認可 (Authorization) は「Identities」グループのエンティティが「Resources」グループのエンティティにアクセスできるかどうかを決定するルールを定義することです。

## よくある質問

### アプリケーションにサインインできるユーザーを指定する必要があります

シングルサインオン (SSO) の性質上、Logto は現在、アプリケーションをリソースとして使用することをサポートしていません。代わりに、API リソースと権限を定義してリソースへのアクセスを制御できます。

### ユーザーが組織にサインインする必要があります

前述のように、認証 (Authentication) はエンティティのアイデンティティを確認することであり、アクセス制御は認可 (Authorization) によって処理されます。したがって：

- ユーザーがどの組織に属しているかを決定することは、認可 (Authorization) の問題です。
- サインインプロセスは、認証 (Authentication) の問題です。

これは、Logto には「組織にサインインする」という概念がないことを意味します。ユーザーが認証 (Authentication) されると、定義された権限に基づいてすべてのリソース（組織リソースを含む）にアクセスする権限が与えられます。

このモデルは、認証 (Authentication) と認可 (Authorization) の問題を分離するため、効率的で明確です。GitHub や Notion などのすべての最新の SaaS アプリケーションは、このモデルに従っています。

ただし、ユーザーソースと組織の間に 1 対 1 のマッピングを確立する必要がある場合もあります。この場合、[エンタープライズシングルサインオン (SSO)](/end-user-flows/enterprise-sso) と [組織のジャストインタイム (JIT) プロビジョニング](/organizations/just-in-time-provisioning) が役立ちます。

### 顧客はサインインページにカスタムブランディングを必要としています

関連する設定については、[アプリ固有のブランディング](/customization/match-your-brand/#app-specific-branding) と [組織固有のブランディング](/customization/match-your-brand/#organization-specific-branding) を確認してください。
`,
  'zh-CN': `---
sidebar_position: 2
---

# 认证 (Authentication) 与授权 (Authorization)

**认证 (Authentication)** 和 **授权 (Authorization)** 之间的区别可以总结如下：

- **认证 (Authentication)** 回答了“你拥有哪个身份？”的问题
- **授权 (Authorization)** 回答了“你可以做什么？”的问题

有关完整的客户身份和访问管理 (CIAM) 介绍，你可以参考我们的 CIAM 系列：

- [CIAM 101: 认证 (Authentication)、身份、单点登录 (SSO)](https://blog.logto.io/ciam-101-intro-authn-sso/)
- [CIAM 102: 授权 (Authorization) 与基于角色的访问控制 (RBAC)](https://blog.logto.io/ciam-102-authz-and-rbac/)

## 认证 (Authentication)

Logto 支持多种交互式和非交互式的认证 (Authentication) 方法，例如：

- **登录体验**：终端用户的认证 (Authentication) 过程。
- **机器对机器 (M2M) 认证 (Authentication)**：服务或应用程序的认证 (Authentication) 过程。

认证 (Authentication) 的最终目标非常简单：验证并获取实体的唯一标识符（在 Logto 中，是用户或应用程序）。

## 授权 (Authorization)

在 Logto 中，授权 (Authorization) 是通过基于角色的访问控制 (RBAC) 完成的。它让你可以完全控制用户或 M2M 应用程序对以下内容的访问：

- **API 资源**：由绝对 URI 表示的全局实体。
- **组织 (Organizations)**：用户或应用程序的组。
- **组织 API 资源**：属于组织的 API 资源。

要了解更多关于这些概念的信息，你可以参考以下资源：

- [基于角色的访问控制 (RBAC)](/authorization/role-based-access-control)
- [组织 (Organizations)（多租户）](/organizations)

以下是这些概念之间关系的可视化表示：

\`\`\`mermaid
graph TD
  subgraph Resources
    R(API 资源)
    O(组织 (Organizations))
    OR(组织 API 资源)
  end

  subgraph Identities
    U(用户)
    A(M2M 应用程序)
  end
\`\`\`

简而言之，授权 (Authorization) 是关于定义规则，以确定“Identities”组中的实体可以访问“Resources”组中的哪些实体。

## 常见问题解答

### 我需要指定哪些用户可以登录到应用程序

由于单点登录 (SSO) 的特性，Logto 目前不支持将应用程序用作资源。相反，你可以定义 API 资源和权限来控制对资源的访问。

### 我需要我的用户登录到一个组织

如前所述，认证 (Authentication) 涉及验证实体的身份，而访问控制是通过授权 (Authorization) 处理的。因此：

- 确定用户属于哪个组织是一个授权 (Authorization) 问题。
- 登录过程是一个认证 (Authentication) 问题。

这意味着在 Logto 中没有“登录到组织”的概念。一旦用户被认证 (Authentication)，他们可以根据定义的权限被授权 (Authorization) 访问所有资源（包括组织资源）。

这种模型高效且清晰，因为它将认证 (Authentication) 和授权 (Authorization) 的关注点分开。所有现代 SaaS 应用程序，如 GitHub 和 Notion，都遵循这种模型。

然而，在某些情况下，你需要在用户来源和组织之间建立 1-1 映射。在这种情况下，[企业单点登录 (SSO)](/end-user-flows/enterprise-sso) 和 [组织即时 (JIT) 供应](/organizations/just-in-time-provisioning) 可能会有所帮助。

### 我们的客户需要为他们的登录页面定制品牌

请查看 [应用程序特定品牌](/customization/match-your-brand/#app-specific-branding) 和 [组织特定品牌](/customization/match-your-brand/#organization-specific-branding) 以获取相关配置。
`,
  ko: `---
sidebar_position: 2
---

# 인증 (Authentication) vs. 인가 (Authorization)

**인증 (Authentication)**과 **인가 (Authorization)**의 차이는 다음과 같이 요약할 수 있습니다:

- **인증 (Authentication)**은 "어떤 아이덴티티를 소유하고 있습니까?"라는 질문에 답합니다.
- **인가 (Authorization)**는 "무엇을 할 수 있습니까?"라는 질문에 답합니다.

고객 아이덴티티 및 접근 관리 (CIAM)에 대한 완전한 소개는 우리의 CIAM 시리즈를 참조할 수 있습니다:

- [CIAM 101: 인증 (Authentication), 아이덴티티, SSO](https://blog.logto.io/ciam-101-intro-authn-sso/)
- [CIAM 102: 인가 (Authorization) & 역할 기반 접근 제어 (RBAC)](https://blog.logto.io/ciam-102-authz-and-rbac/)

## 인증 (Authentication)

Logto는 다양한 상호작용 및 비상호작용 인증 방법을 지원합니다. 예를 들어:

- **로그인 경험**: 최종 사용자를 위한 인증 과정.
- **기계 간 (M2M) 인증**: 서비스 또는 애플리케이션을 위한 인증 과정.

인증의 궁극적인 목표는 매우 간단합니다: 엔티티 (Logto에서는 사용자 또는 애플리케이션)의 고유 식별자를 확인하고 얻는 것입니다.

## 인가 (Authorization)

Logto에서 인가는 역할 기반 접근 제어 (RBAC)를 통해 이루어집니다. 이를 통해 사용자의 접근을 다음과 같이 완전히 관리할 수 있습니다:

- **API 리소스**: 절대 URI로 표현되는 글로벌 엔티티.
- **조직**: 사용자 또는 애플리케이션의 그룹.
- **조직 API 리소스**: 조직에 속한 API 리소스.

이 개념들에 대해 더 알고 싶다면 다음 리소스를 참조하세요:

- [역할 기반 접근 제어 (RBAC)](/authorization/role-based-access-control)
- [조직 (다중 테넌시)](/organizations)

다음은 이러한 개념들 간의 관계를 시각적으로 표현한 것입니다:

\`\`\`mermaid
graph TD
  subgraph Resources
    R(API 리소스)
    O(조직)
    OR(조직 API 리소스)
  end

  subgraph Identities
    U(사용자)
    A(M2M 애플리케이션)
  end
\`\`\`

요약하자면, 인가는 "Identities" 그룹의 엔티티가 "Resources" 그룹의 엔티티에 접근할 수 있는지를 결정하는 규칙을 정의하는 것입니다.

## 자주 묻는 질문

### 애플리케이션에 로그인할 수 있는 사용자를 지정해야 합니다

싱글 사인온 (SSO)의 특성상, Logto는 현재 애플리케이션을 리소스로 사용하는 것을 지원하지 않습니다. 대신, API 리소스와 권한을 정의하여 리소스에 대한 접근을 제어할 수 있습니다.

### 사용자가 조직에 로그인해야 합니다

앞서 언급했듯이, 인증은 엔티티의 아이덴티티를 확인하는 것이며, 접근 제어는 인가를 통해 처리됩니다. 따라서:

- 사용자가 속한 조직을 결정하는 것은 인가 문제입니다.
- 로그인 과정은 인증 문제입니다.

이는 Logto에서 "조직에 로그인"하는 개념이 없음을 의미합니다. 사용자가 인증되면, 정의된 권한에 따라 모든 리소스 (조직 리소스를 포함)에 접근할 수 있도록 인가될 수 있습니다.

이 모델은 인증과 인가의 문제를 분리하여 효율적이고 명확합니다. GitHub 및 Notion과 같은 모든 현대 SaaS 애플리케이션은 이 모델을 따릅니다.

그러나 사용자 소스와 조직 간의 1-1 매핑을 설정해야 하는 경우가 있습니다. 이 경우, [엔터프라이즈 SSO](/end-user-flows/enterprise-sso) 및 [조직 Just-in-Time (JIT) 프로비저닝](/organizations/just-in-time-provisioning)이 도움이 될 수 있습니다.

### 고객이 로그인 페이지에 맞춤형 브랜딩이 필요합니다

관련 설정에 대해서는 [앱별 브랜딩](/customization/match-your-brand/#app-specific-branding) 및 [조직별 브랜딩](/customization/match-your-brand/#organization-specific-branding)을 확인하세요.
`,
});
/* eslint-enable max-lines */
