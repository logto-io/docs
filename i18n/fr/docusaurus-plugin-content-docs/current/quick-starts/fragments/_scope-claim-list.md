Voici la liste des portées prises en charge et les revendications correspondantes :

**`openid`**

| Nom de la revendication | Type     | Description                           | Besoin de userinfo ? |
| ----------------------- | -------- | ------------------------------------- | -------------------- |
| sub                     | `string` | L'identifiant unique de l'utilisateur | Non                  |

**`profile`**

| Nom de la revendication | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                           | Besoin de userinfo ? |
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| name                    | `string` | Le nom complet de l'utilisateur                                                                                                                                                                                                                                                                                                                                                                                       | Non                  |
| username                | `string` | Le nom d'utilisateur de l'utilisateur                                                                                                                                                                                                                                                                                                                                                                                 | Non                  |
| picture                 | `string` | URL de la photo de profil de l'utilisateur final. Cette URL DOIT référencer un fichier image (par exemple, un fichier PNG, JPEG ou GIF), plutôt qu'une page Web contenant une image. Notez que cette URL DOIT référencer spécifiquement une photo de profil de l'utilisateur final adaptée à l'affichage lors de la description de l'utilisateur final, plutôt qu'une photo arbitraire prise par l'utilisateur final. | Non                  |
| created_at              | `number` | Date de création de l'utilisateur final. L'heure est représentée par le nombre de millisecondes écoulées depuis l'époque Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                                                 | Non                  |
| updated_at              | `number` | Date de la dernière mise à jour des informations de l'utilisateur final. L'heure est représentée par le nombre de millisecondes écoulées depuis l'époque Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                 | Non                  |

D'autres [revendications standard](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) telles que `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo` et `locale` seront également incluses dans la portée `profile` sans avoir besoin de demander l'endpoint userinfo. Une différence par rapport aux revendications ci-dessus est que ces revendications ne seront retournées que si leurs valeurs ne sont pas vides, tandis que les revendications ci-dessus retourneront `null` si les valeurs sont vides.

:::note
Contrairement aux revendications standard, les revendications `created_at` et `updated_at` utilisent les millisecondes au lieu des secondes.
:::

**`email`**

| Nom de la revendication | Type      | Description                        | Besoin de userinfo ? |
| ----------------------- | --------- | ---------------------------------- | -------------------- |
| email                   | `string`  | L'adresse e-mail de l'utilisateur  | Non                  |
| email_verified          | `boolean` | Si l'adresse e-mail a été vérifiée | Non                  |

**`phone`**

| Nom de la revendication | Type      | Description                             | Besoin de userinfo ? |
| ----------------------- | --------- | --------------------------------------- | -------------------- |
| phone_number            | `string`  | Le numéro de téléphone de l'utilisateur | Non                  |
| phone_number_verified   | `boolean` | Si le numéro de téléphone a été vérifié | Non                  |

**`address`**

Veuillez vous référer à la [spécification OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) pour les détails de la revendication d'adresse.

**`custom_data`**

| Nom de la revendication | Type     | Description                                 | Besoin de userinfo ? |
| ----------------------- | -------- | ------------------------------------------- | -------------------- |
| custom_data             | `object` | Les données personnalisées de l'utilisateur | Oui                  |

**`identities`**

| Nom de la revendication | Type     | Description                              | Besoin de userinfo ? |
| ----------------------- | -------- | ---------------------------------------- | -------------------- |
| identities              | `object` | Les identités liées de l'utilisateur     | Oui                  |
| sso_identities          | `array`  | Les identités SSO liées de l'utilisateur | Oui                  |

**`roles`**

| Nom de la revendication | Type       | Description                        | Besoin de userinfo ? |
| ----------------------- | ---------- | ---------------------------------- | -------------------- |
| roles                   | `string[]` | Les rôles (Roles) de l'utilisateur | Non                  |

**`urn:logto:scope:organizations`**

| Nom de la revendication | Type       | Description                                                                            | Besoin de userinfo ? |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------- | -------------------- |
| organizations           | `string[]` | Les identifiants des organisations (Organizations) auxquelles l'utilisateur appartient | Non                  |
| organization_data       | `object[]` | Les données des organisations (Organizations) auxquelles l'utilisateur appartient      | Oui                  |

:::note
Ces revendications d'organisation peuvent également être récupérées via l'endpoint userinfo lors de l'utilisation d'un [jeton opaque (Opaque token)](/concepts/opaque-token). Cependant, les jetons opaques ne peuvent pas être utilisés comme jetons d’organisation (Organization tokens) pour accéder à des ressources spécifiques à une organisation. Voir [Jeton opaque et organisations](/concepts/opaque-token#opaque-token-and-organizations) pour plus de détails.
:::

**`urn:logto:scope:organization_roles`**

| Nom de la revendication | Type       | Description                                                                                              | Besoin de userinfo ? |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------------------------- | -------------------- |
| organization_roles      | `string[]` | Les rôles d'organisation (Organization roles) de l'utilisateur au format `<organization_id>:<role_name>` | Non                  |

---

En tenant compte des performances et de la taille des données, si "Besoin de userinfo ?" est "Oui", cela signifie que la revendication n'apparaîtra pas dans le jeton d’identifiant (ID token), mais sera retournée dans la réponse de l'[endpoint userinfo](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
