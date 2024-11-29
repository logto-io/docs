Aqui está a lista de Escopos (Scopes) suportados e as Reivindicações (Claims) correspondentes:

**`openid`**

| Nome da Reivindicação | Tipo     | Descrição                        | Precisa de userinfo? |
| --------------------- | -------- | -------------------------------- | -------------------- |
| sub                   | `string` | O identificador único do usuário | Não                  |

**`profile`**

| Nome da Reivindicação | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                           | Precisa de userinfo? |
| --------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| name                  | `string` | O nome completo do usuário                                                                                                                                                                                                                                                                                                                                                                          | Não                  |
| username              | `string` | O nome de usuário do usuário                                                                                                                                                                                                                                                                                                                                                                        | Não                  |
| picture               | `string` | URL da foto de perfil do Usuário Final. Este URL DEVE referir-se a um arquivo de imagem (por exemplo, um arquivo de imagem PNG, JPEG ou GIF), em vez de uma página da Web contendo uma imagem. Note que este URL DEVE referenciar especificamente uma foto de perfil do Usuário Final adequada para exibição ao descrever o Usuário Final, em vez de uma foto arbitrária tirada pelo Usuário Final. | Não                  |
| created_at            | `number` | Hora em que o Usuário Final foi criado. O tempo é representado como o número de milissegundos desde a época Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                                            | Não                  |
| updated_at            | `number` | Hora em que as informações do Usuário Final foram atualizadas pela última vez. O tempo é representado como o número de milissegundos desde a época Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                     | Não                  |

Outras [reivindicações padrão](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) incluem `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo` e `locale` também serão incluídas no escopo `profile` sem a necessidade de solicitar o endpoint userinfo. Uma diferença em relação às reivindicações acima é que essas reivindicações só serão retornadas quando seus valores não estiverem vazios, enquanto as reivindicações acima retornarão `null` se os valores estiverem vazios.

:::note
Ao contrário das reivindicações padrão, as reivindicações `created_at` e `updated_at` estão usando milissegundos em vez de segundos.
:::

**`email`**

| Nome da Reivindicação | Tipo      | Descrição                             | Precisa de userinfo? |
| --------------------- | --------- | ------------------------------------- | -------------------- |
| email                 | `string`  | O endereço de email do usuário        | Não                  |
| email_verified        | `boolean` | Se o endereço de email foi verificado | Não                  |

**`phone`**

| Nome da Reivindicação | Tipo      | Descrição                              | Precisa de userinfo? |
| --------------------- | --------- | -------------------------------------- | -------------------- |
| phone_number          | `string`  | O número de telefone do usuário        | Não                  |
| phone_number_verified | `boolean` | Se o número de telefone foi verificado | Não                  |

**`address`**

Por favor, consulte o [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) para os detalhes da reivindicação de endereço.

**`custom_data`**

| Nome da Reivindicação | Tipo     | Descrição                          | Precisa de userinfo? |
| --------------------- | -------- | ---------------------------------- | -------------------- |
| custom_data           | `object` | Os dados personalizados do usuário | Sim                  |

**`identities`**

| Nome da Reivindicação | Tipo     | Descrição                                | Precisa de userinfo? |
| --------------------- | -------- | ---------------------------------------- | -------------------- |
| identities            | `object` | As identidades vinculadas do usuário     | Sim                  |
| sso_identities        | `array`  | As identidades SSO vinculadas do usuário | Sim                  |

**`urn:logto:scope:organizations`**

| Nome da Reivindicação | Tipo       | Descrição                                             | Precisa de userinfo? |
| --------------------- | ---------- | ----------------------------------------------------- | -------------------- |
| organizations         | `string[]` | Os IDs das organizações às quais o usuário pertence   | Não                  |
| organization_data     | `object[]` | Os dados das organizações às quais o usuário pertence | Sim                  |

**`urn:logto:scope:organization_roles`**

| Nome da Reivindicação | Tipo       | Descrição                                                                                           | Precisa de userinfo? |
| --------------------- | ---------- | --------------------------------------------------------------------------------------------------- | -------------------- |
| organization_roles    | `string[]` | Os papéis da organização aos quais o usuário pertence com o formato `<organization_id>:<role_name>` | Não                  |

---

Considerando o desempenho e o tamanho dos dados, se "Precisa de userinfo?" for "Sim", isso significa que a reivindicação não aparecerá no Token de ID, mas será retornada na resposta do [endpoint userinfo](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
