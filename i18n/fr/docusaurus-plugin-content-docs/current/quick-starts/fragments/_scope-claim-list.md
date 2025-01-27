Voici la liste des portées prises en charge et les revendications correspondantes :

**`openid`**

| Nom de la revendication | Type     | Description                           | Besoin de userinfo ? |
| ----------------------- | -------- | ------------------------------------- | -------------------- |
| sub                     | `string` | L'identifiant unique de l'utilisateur | Non                  |

**`profile`**

| Nom de la revendication | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                    | Besoin de userinfo ? |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| name                    | `string` | Le nom complet de l'utilisateur                                                                                                                                                                                                                                                                                                                                                                                                | Non                  |
| username                | `string` | Le nom d'utilisateur de l'utilisateur                                                                                                                                                                                                                                                                                                                                                                                          | Non                  |
| picture                 | `string` | URL de la photo de profil de l'utilisateur final. Cette URL DOIT faire référence à un fichier image (par exemple, un fichier PNG, JPEG ou GIF), plutôt qu'à une page Web contenant une image. Notez que cette URL DOIT spécifiquement référencer une photo de profil de l'utilisateur final adaptée à l'affichage lors de la description de l'utilisateur final, plutôt qu'une photo arbitraire prise par l'utilisateur final. | Non                  |
| created_at              | `number` | Heure à laquelle l'utilisateur final a été créé. Le temps est représenté comme le nombre de millisecondes écoulées depuis l'époque Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                                                | Non                  |
| updated_at              | `number` | Heure à laquelle les informations de l'utilisateur final ont été mises à jour pour la dernière fois. Le temps est représenté comme le nombre de millisecondes écoulées depuis l'époque Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                            | Non                  |

D'autres [revendications standard](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) incluent `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo`, et `locale` seront également incluses dans la portée `profile` sans avoir besoin de demander le point de terminaison userinfo. Une différence par rapport aux revendications ci-dessus est que ces revendications ne seront renvoyées que lorsque leurs valeurs ne sont pas vides, tandis que les revendications ci-dessus renverront `null` si les valeurs sont vides.

:::note
Contrairement aux revendications standard, les revendications `created_at` et `updated_at` utilisent des millisecondes au lieu de secondes.
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

Veuillez vous référer à [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) pour les détails de la revendication d'adresse.

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

| Nom de la revendication | Type       | Description                | Besoin de userinfo ? |
| ----------------------- | ---------- | -------------------------- | -------------------- |
| roles                   | `string[]` | Les rôles de l'utilisateur | Non                  |

**`urn:logto:scope:organizations`**

| Nom de la revendication | Type       | Description                                                       | Besoin de userinfo ? |
| ----------------------- | ---------- | ----------------------------------------------------------------- | -------------------- |
| organizations           | `string[]` | Les identifiants d'organisation auxquels l'utilisateur appartient | Non                  |
| organization_data       | `object[]` | Les données d'organisation auxquelles l'utilisateur appartient    | Oui                  |

**`urn:logto:scope:organization_roles`**

| Nom de la revendication | Type       | Description                                                                                               | Besoin de userinfo ? |
| ----------------------- | ---------- | --------------------------------------------------------------------------------------------------------- | -------------------- |
| organization_roles      | `string[]` | Les rôles d'organisation auxquels l'utilisateur appartient avec le format `<organization_id>:<role_name>` | Non                  |

---

En considérant la performance et la taille des données, si "Besoin de userinfo ?" est "Oui", cela signifie que la revendication n'apparaîtra pas dans le jeton d’identifiant, mais sera renvoyée dans la réponse du [point de terminaison userinfo](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
