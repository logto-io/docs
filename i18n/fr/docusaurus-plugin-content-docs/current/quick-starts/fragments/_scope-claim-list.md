Voici la liste des portées prises en charge et les revendications correspondantes :

### Portées OIDC standard {#standard-oidc-scopes}

**`openid`** (par défaut)

| Nom de la revendication | Type     | Description                           |
| ----------------------- | -------- | ------------------------------------- |
| sub                     | `string` | L'identifiant unique de l'utilisateur |

**`profile`** (par défaut)

| Nom de la revendication | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name                    | `string` | Le nom complet de l'utilisateur                                                                                                                                                                                                                                                                                                                                                                                    |
| username                | `string` | Le nom d'utilisateur de l'utilisateur                                                                                                                                                                                                                                                                                                                                                                              |
| picture                 | `string` | URL de la photo de profil de l'utilisateur final. Cette URL DOIT référencer un fichier image (par exemple, un fichier PNG, JPEG ou GIF), plutôt qu'une page Web contenant une image. Notez que cette URL DOIT référencer spécifiquement une photo de profil de l'utilisateur final adaptée à l'affichage lors de la description de l'utilisateur final, et non une photo quelconque prise par l'utilisateur final. |
| created_at              | `number` | Date de création de l'utilisateur final. Le temps est représenté par le nombre de millisecondes écoulées depuis l'époque Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                                              |
| updated_at              | `number` | Date de la dernière mise à jour des informations de l'utilisateur final. Le temps est représenté par le nombre de millisecondes écoulées depuis l'époque Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                              |

D'autres [revendications standard](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) telles que `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo` et `locale` seront également incluses dans la portée `profile` sans avoir besoin de demander l'endpoint userinfo. Une différence par rapport aux revendications ci-dessus est que ces revendications ne seront retournées que si leurs valeurs ne sont pas vides, tandis que les revendications ci-dessus retourneront `null` si les valeurs sont vides.

:::note
Contrairement aux revendications standard, les revendications `created_at` et `updated_at` utilisent les millisecondes au lieu des secondes.
:::

**`email`**

| Nom de la revendication | Type      | Description                        |
| ----------------------- | --------- | ---------------------------------- |
| email                   | `string`  | L'adresse e-mail de l'utilisateur  |
| email_verified          | `boolean` | Si l'adresse e-mail a été vérifiée |

**`phone`**

| Nom de la revendication | Type      | Description                             |
| ----------------------- | --------- | --------------------------------------- |
| phone_number            | `string`  | Le numéro de téléphone de l'utilisateur |
| phone_number_verified   | `boolean` | Si le numéro de téléphone a été vérifié |

**`address`**

Veuillez vous référer à la [spécification OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) pour les détails de la revendication d'adresse.

:::info
Les portées marquées **(par défaut)** sont toujours demandées par le SDK Logto. Les revendications sous les portées OIDC standard sont toujours incluses dans le jeton d’identifiant lorsque la portée correspondante est demandée — elles ne peuvent pas être désactivées.
:::

### Portées étendues {#extended-scopes}

Les portées suivantes sont étendues par Logto et retourneront des revendications via l’[endpoint userinfo](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo). Ces revendications peuvent également être configurées pour être incluses directement dans le jeton d’identifiant via <CloudLink to="/customize-jwt">Console > JWT personnalisé</CloudLink>. Voir [Jeton d’identifiant personnalisé](/developers/custom-id-token) pour plus de détails.

**`custom_data`**

| Nom de la revendication | Type     | Description                                 | Inclus dans le jeton d’identifiant par défaut |
| ----------------------- | -------- | ------------------------------------------- | --------------------------------------------- |
| custom_data             | `object` | Les données personnalisées de l'utilisateur |                                               |

**`identities`**

| Nom de la revendication | Type     | Description                              | Inclus dans le jeton d’identifiant par défaut |
| ----------------------- | -------- | ---------------------------------------- | --------------------------------------------- |
| identities              | `object` | Les identités liées de l'utilisateur     |                                               |
| sso_identities          | `array`  | Les identités SSO liées de l'utilisateur |                                               |

**`roles`**

| Nom de la revendication | Type       | Description                | Inclus dans le jeton d’identifiant par défaut |
| ----------------------- | ---------- | -------------------------- | --------------------------------------------- |
| roles                   | `string[]` | Les rôles de l'utilisateur | ✅                                            |

**`urn:logto:scope:organizations`**

| Nom de la revendication | Type       | Description                                                       | Inclus dans le jeton d’identifiant par défaut |
| ----------------------- | ---------- | ----------------------------------------------------------------- | --------------------------------------------- |
| organizations           | `string[]` | Les identifiants d’organisation auxquels l'utilisateur appartient | ✅                                            |
| organization_data       | `object[]` | Les données d’organisation auxquelles l'utilisateur appartient    |                                               |

:::note
Ces revendications d’organisation peuvent également être récupérées via l’endpoint userinfo lors de l’utilisation d’un [jeton opaque](/concepts/opaque-token). Cependant, les jetons opaques ne peuvent pas être utilisés comme jetons d’organisation pour accéder à des ressources spécifiques à une organisation. Voir [Jeton opaque et organisations](/concepts/opaque-token#opaque-token-and-organizations) pour plus de détails.
:::

**`urn:logto:scope:organization_roles`**

| Nom de la revendication | Type       | Description                                                                                          | Inclus dans le jeton d’identifiant par défaut |
| ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| organization_roles      | `string[]` | Les rôles d’organisation auxquels l'utilisateur appartient au format `<organization_id>:<role_name>` | ✅                                            |
