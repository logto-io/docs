Hier ist die Liste der unterstützten Berechtigungen (Scopes) und der entsprechenden Ansprüche (Claims):

### Standard OIDC-Berechtigungen (Scopes) {#standard-oidc-scopes}

**`openid`** (Standard)

| Claim-Name | Typ      | Beschreibung                               |
| ---------- | -------- | ------------------------------------------ |
| sub        | `string` | Der eindeutige Identifikator des Benutzers |

**`profile`** (Standard)

| Claim-Name | Typ      | Beschreibung                                                                                                                                                                                                                                                                                                                                                    |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `string` | Der vollständige Name des Benutzers                                                                                                                                                                                                                                                                                                                             |
| username   | `string` | Der Benutzername des Benutzers                                                                                                                                                                                                                                                                                                                                  |
| picture    | `string` | URL zum Profilbild des Endbenutzers. Diese URL MUSS auf eine Bilddatei (z. B. PNG, JPEG oder GIF) verweisen, nicht auf eine Webseite mit einem Bild. Beachte, dass diese URL speziell auf ein Profilfoto des Endbenutzers verweisen SOLLTE, das zur Darstellung des Endbenutzers geeignet ist, und nicht auf ein beliebiges vom Endbenutzer aufgenommenes Foto. |
| created_at | `number` | Zeitpunkt, zu dem der Endbenutzer erstellt wurde. Die Zeit wird als Anzahl der Millisekunden seit der Unix-Epoche (1970-01-01T00:00:00Z) dargestellt.                                                                                                                                                                                                           |
| updated_at | `number` | Zeitpunkt, zu dem die Informationen des Endbenutzers zuletzt aktualisiert wurden. Die Zeit wird als Anzahl der Millisekunden seit der Unix-Epoche (1970-01-01T00:00:00Z) dargestellt.                                                                                                                                                                           |

Weitere [Standard-Ansprüche (Claims)](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) wie `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo` und `locale` werden ebenfalls im `profile`-Scope enthalten sein, ohne dass der userinfo-Endpunkt angefragt werden muss. Ein Unterschied zu den oben genannten Claims besteht darin, dass diese Claims nur zurückgegeben werden, wenn ihre Werte nicht leer sind, während die oben genannten Claims `null` zurückgeben, wenn die Werte leer sind.

:::note
Im Gegensatz zu den Standard-Claims verwenden die Claims `created_at` und `updated_at` Millisekunden anstelle von Sekunden.
:::

**`email`**

| Claim-Name     | Typ       | Beschreibung                            |
| -------------- | --------- | --------------------------------------- |
| email          | `string`  | Die E-Mail-Adresse des Benutzers        |
| email_verified | `boolean` | Ob die E-Mail-Adresse verifiziert wurde |

**`phone`**

| Claim-Name            | Typ       | Beschreibung                           |
| --------------------- | --------- | -------------------------------------- |
| phone_number          | `string`  | Die Telefonnummer des Benutzers        |
| phone_number_verified | `boolean` | Ob die Telefonnummer verifiziert wurde |

**`address`**

Bitte siehe die [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) für Details zum Address-Claim.

:::info
Scopes, die mit **(Standard)** gekennzeichnet sind, werden immer vom Logto SDK angefordert. Claims unter den Standard-OIDC-Scopes sind immer im ID-Token enthalten, wenn der entsprechende Scope angefordert wird — sie können nicht deaktiviert werden.
:::

### Erweiterte Berechtigungen (Scopes) {#extended-scopes}

Die folgenden Scopes sind von Logto erweitert und liefern Claims über den [userinfo-Endpunkt](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo). Diese Claims können auch so konfiguriert werden, dass sie direkt im ID-Token enthalten sind, über <CloudLink to="/customize-jwt">Konsole > Benutzerdefiniertes JWT</CloudLink>. Siehe [Benutzerdefiniertes ID-Token](/developers/custom-id-token) für weitere Details.

**`custom_data`**

| Claim-Name  | Typ      | Beschreibung                                | Standardmäßig im ID-Token enthalten |
| ----------- | -------- | ------------------------------------------- | ----------------------------------- |
| custom_data | `object` | Die benutzerdefinierten Daten des Benutzers |                                     |

**`identities`**

| Claim-Name     | Typ      | Beschreibung                                  | Standardmäßig im ID-Token enthalten |
| -------------- | -------- | --------------------------------------------- | ----------------------------------- |
| identities     | `object` | Die verknüpften Identitäten des Benutzers     |                                     |
| sso_identities | `array`  | Die verknüpften SSO-Identitäten des Benutzers |                                     |

**`roles`**

| Claim-Name | Typ        | Beschreibung                     | Standardmäßig im ID-Token enthalten |
| ---------- | ---------- | -------------------------------- | ----------------------------------- |
| roles      | `string[]` | Die Rollen (Roles) des Benutzers | ✅                                  |

**`urn:logto:scope:organizations`**

| Claim-Name        | Typ        | Beschreibung                                        | Standardmäßig im ID-Token enthalten |
| ----------------- | ---------- | --------------------------------------------------- | ----------------------------------- |
| organizations     | `string[]` | Die Organisations-IDs, denen der Benutzer angehört  | ✅                                  |
| organization_data | `object[]` | Die Organisationsdaten, denen der Benutzer angehört |                                     |

:::note
Diese Organisations-Claims können auch über den userinfo-Endpunkt abgerufen werden, wenn ein [opaker Token](/concepts/opaque-token) verwendet wird. Allerdings können opake Tokens nicht als Organisationstoken für den Zugriff auf organisationsspezifische Ressourcen verwendet werden. Siehe [Opaker Token und Organisationen](/concepts/opaque-token#opaque-token-and-organizations) für weitere Details.
:::

**`urn:logto:scope:organization_roles`**

| Claim-Name         | Typ        | Beschreibung                                                                                    | Standardmäßig im ID-Token enthalten |
| ------------------ | ---------- | ----------------------------------------------------------------------------------------------- | ----------------------------------- |
| organization_roles | `string[]` | Die Organisationsrollen, denen der Benutzer angehört, im Format `<organization_id>:<role_name>` | ✅                                  |
