---
sidebar_position: 4
---

import logtoManagementApiResourceSrc from './assets/logto-management-api-resource.webp';
import logtoManagementApiDetailsSrc from './assets/logto-management-api-details.webp';

import BasicsAboutAccessTokenRequest from '../../quick-starts/generic/machine-to-machine/fragments/\_basics-about-access-token-request.mdx';
import FetchAccessTokenForLogtoManagementApi from '../../quick-starts/generic/machine-to-machine/fragments/\_fetch-access-token-for-logto-management-api.mdx';
import AccessTokenUsage from '../../quick-starts/generic/machine-to-machine/fragments/\_access-token-usage.mdx';
import AccessLogtoManagementApiUsingAccessToken from '../../quick-starts/generic/machine-to-machine/fragments/\_access-logto-management-api-using-access-token.mdx';
import M2mAccessTokenNote from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-access-token-sub-note.mdx';
import M2mRoleAssignment from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-role-assignment.mdx';

# Interagir avec Management API

## Qu'est-ce que Logto Management API ? {#what-is-logto-management-api}

Le Logto Management API est un ensemble complet d'API qui donne aux développeurs un contrôle total sur leur implémentation pour répondre à leurs besoins produits et technologiques. Il est pré-construit, répertorié dans le <CloudLink to="/api-resources">Console > Ressources API > Logto Management API</CloudLink>, et ne peut pas être supprimé ou modifié.

Son identifiant suit le modèle `https://[tenant-id].logto.app/api`

<img alt="Ressource Logto Management API" src={logtoManagementApiResourceSrc} />

<img alt="Détails Logto Management API" src={logtoManagementApiDetailsSrc} />

Avec le Logto Management API, vous pouvez accéder aux services backend robustes de Logto, qui sont hautement évolutifs et peuvent être utilisés dans une multitude de scénarios. Il va au-delà de ce qui est possible avec les capacités low-code de la Console Admin.

Quelques API fréquemment utilisées sont listées ci-dessous :

- [Utilisateur](https://openapi.logto.io/operation/operation-getuser)
- [Application](https://openapi.logto.io/operation/operation-listapplications)
- [Journaux d'audit](https://openapi.logto.io/operation/operation-listlogs)
- [Rôles](https://openapi.logto.io/operation/operation-listroles)
- [Ressources](https://openapi.logto.io/operation/operation-listresources)
- [Connecteurs](https://openapi.logto.io/operation/operation-listconnectors)
- [Organisations](https://openapi.logto.io/operation/operation-listorganizations)

Pour en savoir plus sur les API disponibles, veuillez visiter https://openapi.logto.io/.

## Comment accéder à Logto Management API {#how-to-access-logto-management-api}

### Créer une application M2M {#create-an-m2m-app}

:::note
Si vous n'êtes pas familier avec le flux d'authentification M2M (Machine-to-Machine), nous vous recommandons de lire [Comprendre le flux d'authentification](/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow) d'abord pour comprendre les concepts de base.
:::

Allez dans <CloudLink to="/applications">Console > Applications</CloudLink>, sélectionnez le type d'application "Machine-to-machine" et commencez le processus de création.

<M2mRoleAssignment />

Dans le module d'attribution de rôles, vous pouvez voir que tous les rôles M2M sont inclus, et les rôles indiqués par une icône Logto signifient que ces rôles incluent des permissions Logto Management API.

Attribuez maintenant des rôles M2M incluant des permissions Logto Management API pour votre application M2M.

### Récupérer un jeton d’accès {#fetch-an-access-token}

#### Notions de base sur la requête de jeton d’accès {#basics-about-access-token-request}

<BasicsAboutAccessTokenRequest />

#### Récupérer un jeton d’accès pour Logto Management API {#fetch-access-token-for-logto-management-api}

<FetchAccessTokenForLogtoManagementApi />

#### Réponse du jeton d’accès {#access-token-response}

Un corps de réponse d'accès réussi serait comme :

```json
{
  "access_token": "eyJhbG...2g", // Utilisez ce jeton pour accéder à Logto Management API
  "expires_in": 3600, // Expiration du jeton en secondes
  "token_type": "Bearer", // Type d'authentification pour votre requête lors de l'utilisation du jeton d'accès
  "scope": "all" // portée `all` pour Logto Management API
}
```

<M2mAccessTokenNote />

### Accéder à Logto Management API en utilisant le jeton d’accès {#access-logto-management-api-using-access-token}

<AccessTokenUsage />

<AccessLogtoManagementApiUsingAccessToken />

## Scénarios typiques d'utilisation de Logto Management API {#typical-scenarios-for-using-logto-management-api}

Nos développeurs ont implémenté de nombreuses fonctionnalités supplémentaires en utilisant Logto Management API. Nous croyons que notre API est hautement évolutive et peut répondre à un large éventail de vos besoins. Voici quelques exemples de scénarios qui ne sont pas possibles avec la Console Admin Logto mais qui peuvent être réalisés via Logto Management API.

### Implémenter le profil utilisateur par vous-même {#implement-user-profile-on-your-own}

Logto ne fournit actuellement pas de solution d'interface utilisateur pré-construite pour les profils utilisateurs. Nous reconnaissons que les profils utilisateurs sont étroitement liés aux attributs commerciaux et produits. Pendant que nous travaillons à déterminer la meilleure approche, nous vous suggérons d'utiliser nos API pour créer votre propre solution. Par exemple, vous pouvez utiliser notre API d'interaction, API de profil et API de code de vérification pour développer une solution personnalisée qui répond à vos besoins.

### Recherche avancée d'utilisateurs {#advanced-user-search}

La Console Admin Logto prend en charge les fonctions de recherche et de filtrage de base. Pour des options de recherche avancées comme la recherche floue, la correspondance exacte et la sensibilité à la casse, consultez nos tutoriels et guides [Recherche avancée d'utilisateurs](/user-management/advanced-user-search).

### Implémenter la gestion des organisations par vous-même {#implement-organization-management-on-your-own}

Si vous utilisez la fonctionnalité [organisations](/organizations) pour construire votre application multi-tenant, vous pourriez avoir besoin de Logto Management API pour des tâches comme les invitations d'organisation et la gestion des membres. Pour votre produit SaaS, où vous avez à la fois des administrateurs et des membres dans le tenant, Logto Management API peut vous aider à créer un portail administrateur personnalisé adapté à vos besoins commerciaux. Consultez [ceci](/end-user-flows/organization-experience/) pour plus de détails.

## Conseils pour utiliser Logto Management API {#tips-for-using-logto-management-api}

### Gestion des réponses API paginées {#managing-paginated-api-responses}

Certaines des réponses API peuvent inclure de nombreux résultats, les résultats seront paginés. Logto fournit 2 types d'informations de pagination.

#### Utilisation des en-têtes de lien {#using-link-headers}

Un en-tête de réponse paginée sera comme :

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

L'en-tête de lien fournit l'URL pour la page précédente, suivante, première et dernière des résultats :

- L'URL pour la page précédente est suivie de rel="prev".
- L'URL pour la page suivante est suivie de rel="next".
- L'URL pour la dernière page est suivie de rel="last".
- L'URL pour la première page est suivie de rel="first".

#### Utilisation de l'en-tête total-number {#using-total-number-header}

En plus des en-têtes de lien standard, Logto ajoutera également un en-tête `Total-Number` :

```
Total-Number: 216
```

Cela serait très pratique et utile pour afficher les numéros de page.

#### Changer le numéro de page et la taille de la page {#changing-page-number-and-page-size}

Il y a 2 paramètres de requête optionnels :

- `page` : indique le numéro de page, commence à 1, la valeur par défaut est 1.
- `page_size` : indique le nombre d'éléments par page, la valeur par défaut est 20.

### Limite de taux {#rate-limit}

:::note
Ceci est uniquement pour Logto Cloud.
:::

Pour assurer la fiabilité et la sécurité de nos services pour tous les utilisateurs, nous employons un pare-feu général qui surveille et gère le trafic vers notre site Web. Bien que nous n'imposions pas de limite de taux stricte, nous recommandons aux utilisateurs de limiter leur activité à environ 200 requêtes toutes les 10 secondes pour éviter de déclencher nos mesures de protection.

## Ressources connexes {#related-resources}

<Url href="https://blog.logto.io/management-api">
  Utiliser Logto Management API : Un guide étape par étape
</Url>

<Url href="https://blog.logto.io/use-postman-to-obtain-m2m-access-token">Obtenez des jetons d'accès M2M en quelques minutes avec Postman</Url>
