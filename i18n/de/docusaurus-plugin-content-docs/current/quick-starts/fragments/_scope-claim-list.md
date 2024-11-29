Hier ist die Liste der unterstützten Berechtigungen (Scopes) und der entsprechenden Ansprüche (Claims):

**`openid`**

| Anspruchsname | Typ      | Beschreibung                               | Benötigt userinfo? |
| ------------- | -------- | ------------------------------------------ | ------------------ |
| sub           | `string` | Der eindeutige Identifikator des Benutzers | Nein               |

**`profile`**

| Anspruchsname | Typ      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                | Benötigt userinfo? |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| name          | `string` | Der vollständige Name des Benutzers                                                                                                                                                                                                                                                                                                                                                                         | Nein               |
| username      | `string` | Der Benutzername des Benutzers                                                                                                                                                                                                                                                                                                                                                                              | Nein               |
| picture       | `string` | URL des Profilbildes des Endbenutzers. Diese URL MUSS auf eine Bilddatei (zum Beispiel eine PNG-, JPEG- oder GIF-Bilddatei) verweisen und nicht auf eine Webseite, die ein Bild enthält. Beachte, dass diese URL speziell auf ein Profilfoto des Endbenutzers verweisen SOLLTE, das geeignet ist, den Endbenutzer zu beschreiben, und nicht auf ein beliebiges Foto, das vom Endbenutzer aufgenommen wurde. | Nein               |
| created_at    | `number` | Zeitpunkt, zu dem der Endbenutzer erstellt wurde. Die Zeit wird als Anzahl der Millisekunden seit der Unix-Epoche (1970-01-01T00:00:00Z) dargestellt.                                                                                                                                                                                                                                                       | Nein               |
| updated_at    | `number` | Zeitpunkt, zu dem die Informationen des Endbenutzers zuletzt aktualisiert wurden. Die Zeit wird als Anzahl der Millisekunden seit der Unix-Epoche (1970-01-01T00:00:00Z) dargestellt.                                                                                                                                                                                                                       | Nein               |

Andere [Standardansprüche](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) wie `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo` und `locale` werden ebenfalls im `profile`-Scope enthalten sein, ohne dass der userinfo-Endpunkt angefordert werden muss. Ein Unterschied im Vergleich zu den oben genannten Ansprüchen besteht darin, dass diese Ansprüche nur zurückgegeben werden, wenn ihre Werte nicht leer sind, während die oben genannten Ansprüche `null` zurückgeben, wenn die Werte leer sind.

:::note
Im Gegensatz zu den Standardansprüchen verwenden die Ansprüche `created_at` und `updated_at` Millisekunden anstelle von Sekunden.
:::

**`email`**

| Anspruchsname  | Typ       | Beschreibung                            | Benötigt userinfo? |
| -------------- | --------- | --------------------------------------- | ------------------ |
| email          | `string`  | Die E-Mail-Adresse des Benutzers        | Nein               |
| email_verified | `boolean` | Ob die E-Mail-Adresse verifiziert wurde | Nein               |

**`phone`**

| Anspruchsname         | Typ       | Beschreibung                           | Benötigt userinfo? |
| --------------------- | --------- | -------------------------------------- | ------------------ |
| phone_number          | `string`  | Die Telefonnummer des Benutzers        | Nein               |
| phone_number_verified | `boolean` | Ob die Telefonnummer verifiziert wurde | Nein               |

**`address`**

Bitte siehe [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) für die Details des Adressanspruchs.

**`custom_data`**

| Anspruchsname | Typ      | Beschreibung                                | Benötigt userinfo? |
| ------------- | -------- | ------------------------------------------- | ------------------ |
| custom_data   | `object` | Die benutzerdefinierten Daten des Benutzers | Ja                 |

**`identities`**

| Anspruchsname  | Typ      | Beschreibung                                  | Benötigt userinfo? |
| -------------- | -------- | --------------------------------------------- | ------------------ |
| identities     | `object` | Die verknüpften Identitäten des Benutzers     | Ja                 |
| sso_identities | `array`  | Die verknüpften SSO-Identitäten des Benutzers | Ja                 |

**`urn:logto:scope:organizations`**

| Anspruchsname     | Typ        | Beschreibung                                        | Benötigt userinfo? |
| ----------------- | ---------- | --------------------------------------------------- | ------------------ |
| organizations     | `string[]` | Die Organisations-IDs, denen der Benutzer angehört  | Nein               |
| organization_data | `object[]` | Die Organisationsdaten, denen der Benutzer angehört | Ja                 |

**`urn:logto:scope:organization_roles`**

| Anspruchsname      | Typ        | Beschreibung                                                                                    | Benötigt userinfo? |
| ------------------ | ---------- | ----------------------------------------------------------------------------------------------- | ------------------ |
| organization_roles | `string[]` | Die Organisationsrollen, denen der Benutzer angehört, im Format `<organization_id>:<role_name>` | Nein               |

---

In Anbetracht der Leistung und der Datengröße bedeutet "Benötigt userinfo?" "Ja", dass der Anspruch nicht im ID-Token angezeigt wird, sondern in der Antwort des [userinfo-Endpunkts](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) zurückgegeben wird.
