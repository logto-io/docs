Aqui está a lista de escopos suportados e as reivindicações correspondentes:

**`openid`**

| Nome da reivindicação | Tipo     | Descrição                        | Precisa de userinfo? |
| --------------------- | -------- | -------------------------------- | -------------------- |
| sub                   | `string` | O identificador único do usuário | Não                  |

**`profile`**

| Nome da reivindicação | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                              | Precisa de userinfo? |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| name                  | `string` | O nome completo do usuário                                                                                                                                                                                                                                                                                                                                                                             | Não                  |
| username              | `string` | O nome de usuário do usuário                                                                                                                                                                                                                                                                                                                                                                           | Não                  |
| picture               | `string` | URL da foto de perfil do usuário final. Esta URL DEVE se referir a um arquivo de imagem (por exemplo, um arquivo de imagem PNG, JPEG ou GIF), em vez de uma página da Web contendo uma imagem. Observe que esta URL DEVE referenciar especificamente uma foto de perfil do usuário final adequada para exibição ao descrever o usuário final, em vez de uma foto arbitrária tirada pelo usuário final. | Não                  |
| created_at            | `number` | Momento em que o usuário final foi criado. O tempo é representado como o número de milissegundos desde a época Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                                            | Não                  |
| updated_at            | `number` | Momento em que as informações do usuário final foram atualizadas pela última vez. O tempo é representado como o número de milissegundos desde a época Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                     | Não                  |

Outras [reivindicações padrão](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) incluem `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo` e `locale` também serão incluídas no escopo `profile` sem a necessidade de solicitar o endpoint userinfo. Uma diferença em relação às reivindicações acima é que essas reivindicações só serão retornadas quando seus valores não forem vazios, enquanto as reivindicações acima retornarão `null` se os valores estiverem vazios.

:::note
Diferente das reivindicações padrão, as reivindicações `created_at` e `updated_at` usam milissegundos em vez de segundos.
:::

**`email`**

| Nome da reivindicação | Tipo      | Descrição                             | Precisa de userinfo? |
| --------------------- | --------- | ------------------------------------- | -------------------- |
| email                 | `string`  | O endereço de email do usuário        | Não                  |
| email_verified        | `boolean` | Se o endereço de email foi verificado | Não                  |

**`phone`**

| Nome da reivindicação | Tipo      | Descrição                              | Precisa de userinfo? |
| --------------------- | --------- | -------------------------------------- | -------------------- |
| phone_number          | `string`  | O número de telefone do usuário        | Não                  |
| phone_number_verified | `boolean` | Se o número de telefone foi verificado | Não                  |

**`address`**

Consulte o [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) para detalhes da reivindicação de endereço.

**`custom_data`**

| Nome da reivindicação | Tipo     | Descrição                          | Precisa de userinfo? |
| --------------------- | -------- | ---------------------------------- | -------------------- |
| custom_data           | `object` | Os dados personalizados do usuário | Sim                  |

**`identities`**

| Nome da reivindicação | Tipo     | Descrição                                | Precisa de userinfo? |
| --------------------- | -------- | ---------------------------------------- | -------------------- |
| identities            | `object` | As identidades vinculadas do usuário     | Sim                  |
| sso_identities        | `array`  | As identidades SSO vinculadas do usuário | Sim                  |

**`roles`**

| Nome da reivindicação | Tipo       | Descrição            | Precisa de userinfo? |
| --------------------- | ---------- | -------------------- | -------------------- |
| roles                 | `string[]` | Os papéis do usuário | Não                  |

**`urn:logto:scope:organizations`**

| Nome da reivindicação | Tipo       | Descrição                                             | Precisa de userinfo? |
| --------------------- | ---------- | ----------------------------------------------------- | -------------------- |
| organizations         | `string[]` | Os IDs das organizações às quais o usuário pertence   | Não                  |
| organization_data     | `object[]` | Os dados das organizações às quais o usuário pertence | Sim                  |

:::note
Essas reivindicações de organização também podem ser recuperadas via endpoint userinfo ao usar um [token opaco](/concepts/opaque-token). No entanto, tokens opacos não podem ser usados como tokens de organização para acessar recursos específicos da organização. Veja [Token opaco e organizações](/concepts/opaque-token#opaque-token-and-organizations) para mais detalhes.
:::

**`urn:logto:scope:organization_roles`**

| Nome da reivindicação | Tipo       | Descrição                                                                                        | Precisa de userinfo? |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------ | -------------------- |
| organization_roles    | `string[]` | Os papéis da organização aos quais o usuário pertence no formato `<organization_id>:<role_name>` | Não                  |

---

Considerando desempenho e o tamanho dos dados, se "Precisa de userinfo?" for "Sim", isso significa que a reivindicação não aparecerá no token de ID, mas será retornada na resposta do [endpoint userinfo](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
