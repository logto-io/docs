Hier ist die Liste der unterstützten Berechtigungen (Scopes) und der entsprechenden Ansprüche (Claims):

**`openid`**

| Claim-Name | Typ      | Beschreibung                               | Benötigt userinfo? |
| ---------- | -------- | ------------------------------------------ | ------------------ |
| sub        | `string` | Der eindeutige Identifikator des Benutzers | Nein               |

**`profile`**

| Claim-Name | Typ      | Beschreibung                                                                                                                                                                                                                                                                                                                                                             | Benötigt userinfo? |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| name       | `string` | Der vollständige Name des Benutzers                                                                                                                                                                                                                                                                                                                                      | Nein               |
| username   | `string` | Der Benutzername des Benutzers                                                                                                                                                                                                                                                                                                                                           | Nein               |
| picture    | `string` | URL zum Profilbild des Endbenutzers. Diese URL MUSS auf eine Bilddatei (z. B. PNG, JPEG oder GIF) verweisen und nicht auf eine Webseite, die ein Bild enthält. Beachte, dass diese URL speziell auf ein Profilfoto des Endbenutzers verweisen SOLLTE, das sich zur Darstellung des Endbenutzers eignet, und nicht auf ein beliebiges vom Endbenutzer aufgenommenes Foto. | Nein               |
| created_at | `number` | Zeitpunkt, zu dem der Endbenutzer erstellt wurde. Die Zeit wird als Anzahl der Millisekunden seit der Unix-Epoche (1970-01-01T00:00:00Z) dargestellt.                                                                                                                                                                                                                    | Nein               |
| updated_at | `number` | Zeitpunkt, zu dem die Informationen des Endbenutzers zuletzt aktualisiert wurden. Die Zeit wird als Anzahl der Millisekunden seit der Unix-Epoche (1970-01-01T00:00:00Z) dargestellt.                                                                                                                                                                                    | Nein               |

Weitere [Standardansprüche](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) wie `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo` und `locale` werden ebenfalls im `profile`-Scope enthalten sein, ohne dass das Userinfo-Endpunkt abgefragt werden muss. Ein Unterschied zu den oben genannten Ansprüchen besteht darin, dass diese Ansprüche nur zurückgegeben werden, wenn ihre Werte nicht leer sind, während die oben genannten Ansprüche `null` zurückgeben, wenn die Werte leer sind.

:::note
Im Gegensatz zu den Standardansprüchen verwenden die Ansprüche `created_at` und `updated_at` Millisekunden anstelle von Sekunden.
:::

**`email`**

| Claim-Name     | Typ       | Beschreibung                            | Benötigt userinfo? |
| -------------- | --------- | --------------------------------------- | ------------------ |
| email          | `string`  | Die E-Mail-Adresse des Benutzers        | Nein               |
| email_verified | `boolean` | Ob die E-Mail-Adresse verifiziert wurde | Nein               |

**`phone`**

| Claim-Name            | Typ       | Beschreibung                           | Benötigt userinfo? |
| --------------------- | --------- | -------------------------------------- | ------------------ |
| phone_number          | `string`  | Die Telefonnummer des Benutzers        | Nein               |
| phone_number_verified | `boolean` | Ob die Telefonnummer verifiziert wurde | Nein               |

**`address`**

Bitte siehe [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) für Details zum Address-Anspruch.

**`custom_data`**

| Claim-Name  | Typ      | Beschreibung                  | Benötigt userinfo? |
| ----------- | -------- | ----------------------------- | ------------------ |
| custom_data | `object` | Die benutzerdefinierten Daten | Ja                 |

**`identities`**

| Claim-Name     | Typ      | Beschreibung                                  | Benötigt userinfo? |
| -------------- | -------- | --------------------------------------------- | ------------------ |
| identities     | `object` | Die verknüpften Identitäten des Benutzers     | Ja                 |
| sso_identities | `array`  | Die verknüpften SSO-Identitäten des Benutzers | Ja                 |

**`roles`**

| Claim-Name | Typ        | Beschreibung             | Benötigt userinfo? |
| ---------- | ---------- | ------------------------ | ------------------ |
| roles      | `string[]` | Die Rollen des Benutzers | Nein               |

**`urn:logto:scope:organizations`**

| Claim-Name        | Typ        | Beschreibung                                        | Benötigt userinfo? |
| ----------------- | ---------- | --------------------------------------------------- | ------------------ |
| organizations     | `string[]` | Die Organisations-IDs, denen der Benutzer angehört  | Nein               |
| organization_data | `object[]` | Die Organisationsdaten, denen der Benutzer angehört | Ja                 |

:::note
Diese Organisationsansprüche können auch über das Userinfo-Endpunkt abgerufen werden, wenn ein [Opaker Token](/concepts/opaque-token) verwendet wird. Allerdings können opake Tokens nicht als Organisationstoken für den Zugriff auf organisationsspezifische Ressourcen verwendet werden. Siehe [Opaker Token und Organisationen](/concepts/opaque-token#opaque-token-and-organizations) für weitere Details.
:::

**`urn:logto:scope:organization_roles`**

| Claim-Name         | Typ        | Beschreibung                                                                    | Benötigt userinfo? |
| ------------------ | ---------- | ------------------------------------------------------------------------------- | ------------------ |
| organization_roles | `string[]` | Die Organisationsrollen des Benutzers im Format `<organization_id>:<role_name>` | Nein               |

---

Im Hinblick auf Leistung und Datenmenge gilt: Wenn "Benötigt userinfo?" mit "Ja" angegeben ist, erscheint der Anspruch nicht im ID-Token, sondern wird in der Antwort des [Userinfo-Endpunkts](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) zurückgegeben.
