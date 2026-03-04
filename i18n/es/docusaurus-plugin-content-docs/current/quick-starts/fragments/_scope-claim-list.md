Aquí tienes la lista de alcances (Alcances) soportados y los reclamos (Reclamos) correspondientes:

### Alcances OIDC estándar {#standard-oidc-scopes}

**`openid`** (predeterminado)

| Claim name | Type     | Description                        |
| ---------- | -------- | ---------------------------------- |
| sub        | `string` | El identificador único del usuario |

**`profile`** (predeterminado)

| Claim name | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `string` | El nombre completo del usuario                                                                                                                                                                                                                                                                                                                                                                                              |
| username   | `string` | El nombre de usuario del usuario                                                                                                                                                                                                                                                                                                                                                                                            |
| picture    | `string` | URL de la foto de perfil del usuario final. Esta URL DEBE referirse a un archivo de imagen (por ejemplo, un archivo de imagen PNG, JPEG o GIF), en lugar de a una página web que contenga una imagen. Ten en cuenta que esta URL DEBERÍA referenciar específicamente una foto de perfil del usuario final adecuada para mostrar al describir al usuario final, en lugar de una foto arbitraria tomada por el usuario final. |
| created_at | `number` | Momento en que se creó el usuario final. El tiempo se representa como el número de milisegundos desde la época Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                                                                 |
| updated_at | `number` | Momento en que se actualizó por última vez la información del usuario final. El tiempo se representa como el número de milisegundos desde la época Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                             |

Otros [reclamos estándar](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) incluyen `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo` y `locale`, que también se incluirán en el alcance `profile` sin necesidad de solicitar el endpoint userinfo. Una diferencia en comparación con los reclamos anteriores es que estos reclamos solo se devolverán cuando sus valores no estén vacíos, mientras que los reclamos anteriores devolverán `null` si los valores están vacíos.

:::note
A diferencia de los reclamos estándar, los reclamos `created_at` y `updated_at` utilizan milisegundos en lugar de segundos.
:::

**`email`**

| Claim name     | Type      | Description                                              |
| -------------- | --------- | -------------------------------------------------------- |
| email          | `string`  | La dirección de correo electrónico del usuario           |
| email_verified | `boolean` | Si la dirección de correo electrónico ha sido verificada |

**`phone`**

| Claim name            | Type      | Description                                 |
| --------------------- | --------- | ------------------------------------------- |
| phone_number          | `string`  | El número de teléfono del usuario           |
| phone_number_verified | `boolean` | Si el número de teléfono ha sido verificado |

**`address`**

Por favor, consulta [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) para los detalles del reclamo de dirección.

:::info
Los alcances marcados como **(predeterminado)** siempre son solicitados por el SDK de Logto. Los reclamos bajo los alcances OIDC estándar siempre se incluyen en el token de ID cuando se solicita el alcance correspondiente; no se pueden desactivar.
:::

### Alcances extendidos {#extended-scopes}

Los siguientes alcances son extendidos por Logto y devolverán reclamos a través del [endpoint userinfo](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo). Estos reclamos también pueden configurarse para incluirse directamente en el token de ID a través de <CloudLink to="/customize-jwt">Consola > JWT personalizado</CloudLink>. Consulta [Token de ID personalizado](/developers/custom-id-token) para más detalles.

**`custom_data`**

| Claim name  | Type     | Description                          | Included in ID token by default |
| ----------- | -------- | ------------------------------------ | ------------------------------- |
| custom_data | `object` | Los datos personalizados del usuario |                                 |

**`identities`**

| Claim name     | Type     | Description                                | Included in ID token by default |
| -------------- | -------- | ------------------------------------------ | ------------------------------- |
| identities     | `object` | Las identidades vinculadas del usuario     |                                 |
| sso_identities | `array`  | Las identidades SSO vinculadas del usuario |                                 |

**`roles`**

| Claim name | Type       | Description           | Included in ID token by default |
| ---------- | ---------- | --------------------- | ------------------------------- |
| roles      | `string[]` | Los roles del usuario | ✅                              |

**`urn:logto:scope:organizations`**

| Claim name        | Type       | Description                                                    | Included in ID token by default |
| ----------------- | ---------- | -------------------------------------------------------------- | ------------------------------- |
| organizations     | `string[]` | Los IDs de las organizaciones a las que pertenece el usuario   | ✅                              |
| organization_data | `object[]` | Los datos de las organizaciones a las que pertenece el usuario |                                 |

:::note
Estos reclamos de organización también pueden recuperarse a través del endpoint userinfo cuando se utiliza un [token opaco](/concepts/opaque-token). Sin embargo, los tokens opacos no pueden usarse como tokens de organización para acceder a recursos específicos de la organización. Consulta [Token opaco y organizaciones](/concepts/opaque-token#opaque-token-and-organizations) para más detalles.
:::

**`urn:logto:scope:organization_roles`**

| Claim name         | Type       | Description                                                                                             | Included in ID token by default |
| ------------------ | ---------- | ------------------------------------------------------------------------------------------------------- | ------------------------------- |
| organization_roles | `string[]` | Los roles de organización a los que pertenece el usuario con el formato `<organization_id>:<role_name>` | ✅                              |
