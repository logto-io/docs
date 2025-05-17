Aquí está la lista de alcances (Scopes) soportados y los reclamos (Claims) correspondientes:

**`openid`**

| Nombre del reclamo | Tipo     | Descripción                        | ¿Necesita userinfo? |
| ------------------ | -------- | ---------------------------------- | ------------------- |
| sub                | `string` | El identificador único del usuario | No                  |

**`profile`**

| Nombre del reclamo | Tipo     | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                 | ¿Necesita userinfo? |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| name               | `string` | El nombre completo del usuario                                                                                                                                                                                                                                                                                                                                                                                              | No                  |
| username           | `string` | El nombre de usuario del usuario                                                                                                                                                                                                                                                                                                                                                                                            | No                  |
| picture            | `string` | URL de la foto de perfil del Usuario Final. Esta URL DEBE referirse a un archivo de imagen (por ejemplo, un archivo de imagen PNG, JPEG o GIF), en lugar de a una página web que contenga una imagen. Ten en cuenta que esta URL DEBERÍA referirse específicamente a una foto de perfil del Usuario Final adecuada para mostrar al describir al Usuario Final, en lugar de una foto arbitraria tomada por el Usuario Final. | No                  |
| created_at         | `number` | Momento en que se creó el Usuario Final. El tiempo se representa como el número de milisegundos desde la época Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                                                                 | No                  |
| updated_at         | `number` | Momento en que la información del Usuario Final fue actualizada por última vez. El tiempo se representa como el número de milisegundos desde la época Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                          | No                  |

Otros [reclamos estándar](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) incluyen `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo`, y `locale` también se incluirán en el alcance `profile` sin la necesidad de solicitar el endpoint de userinfo. Una diferencia en comparación con los reclamos anteriores es que estos reclamos solo se devolverán cuando sus valores no estén vacíos, mientras que los reclamos anteriores devolverán `null` si los valores están vacíos.

:::note
A diferencia de los reclamos estándar, los reclamos `created_at` y `updated_at` utilizan milisegundos en lugar de segundos.
:::

**`email`**

| Nombre del reclamo | Tipo      | Descripción                                              | ¿Necesita userinfo? |
| ------------------ | --------- | -------------------------------------------------------- | ------------------- |
| email              | `string`  | La dirección de correo electrónico del usuario           | No                  |
| email_verified     | `boolean` | Si la dirección de correo electrónico ha sido verificada | No                  |

**`phone`**

| Nombre del reclamo    | Tipo      | Descripción                                 | ¿Necesita userinfo? |
| --------------------- | --------- | ------------------------------------------- | ------------------- |
| phone_number          | `string`  | El número de teléfono del usuario           | No                  |
| phone_number_verified | `boolean` | Si el número de teléfono ha sido verificado | No                  |

**`address`**

Por favor, consulta el [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) para los detalles del reclamo de dirección.

**`custom_data`**

| Nombre del reclamo | Tipo     | Descripción                          | ¿Necesita userinfo? |
| ------------------ | -------- | ------------------------------------ | ------------------- |
| custom_data        | `object` | Los datos personalizados del usuario | Sí                  |

**`identities`**

| Nombre del reclamo | Tipo     | Descripción                                | ¿Necesita userinfo? |
| ------------------ | -------- | ------------------------------------------ | ------------------- |
| identities         | `object` | Las identidades vinculadas del usuario     | Sí                  |
| sso_identities     | `array`  | Las identidades SSO vinculadas del usuario | Sí                  |

**`roles`**

| Nombre del reclamo | Tipo       | Descripción           | ¿Necesita userinfo? |
| ------------------ | ---------- | --------------------- | ------------------- |
| roles              | `string[]` | Los roles del usuario | No                  |

**`urn:logto:scope:organizations`**

| Nombre del reclamo | Tipo       | Descripción                                                    | ¿Necesita userinfo? |
| ------------------ | ---------- | -------------------------------------------------------------- | ------------------- |
| organizations      | `string[]` | Los IDs de las organizaciones a las que pertenece el usuario   | No                  |
| organization_data  | `object[]` | Los datos de las organizaciones a las que pertenece el usuario | Sí                  |

**`urn:logto:scope:organization_roles`**

| Nombre del reclamo | Tipo       | Descripción                                                                                                   | ¿Necesita userinfo? |
| ------------------ | ---------- | ------------------------------------------------------------------------------------------------------------- | ------------------- |
| organization_roles | `string[]` | Los roles de las organizaciones a las que pertenece el usuario con el formato `<organization_id>:<role_name>` | No                  |

---

Considerando el rendimiento y el tamaño de los datos, si "¿Necesita userinfo?" es "Sí", significa que el reclamo no aparecerá en el token de ID, pero se devolverá en la respuesta del [endpoint de userinfo](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
