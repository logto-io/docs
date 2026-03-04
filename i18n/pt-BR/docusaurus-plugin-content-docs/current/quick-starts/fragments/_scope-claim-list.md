Aqui está a lista de escopos suportados e as reivindicações correspondentes:

### Escopos OIDC padrão {#standard-oidc-scopes}

**`openid`** (padrão)

| Nome da reivindicação | Tipo     | Descrição                        |
| --------------------- | -------- | -------------------------------- |
| sub                   | `string` | O identificador único do usuário |

**`profile`** (padrão)

| Nome da reivindicação | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                  | `string` | O nome completo do usuário                                                                                                                                                                                                                                                                                                                                                |
| username              | `string` | O nome de usuário do usuário                                                                                                                                                                                                                                                                                                                                              |
| picture               | `string` | URL da foto de perfil do usuário final. Esta URL DEVE se referir a um arquivo de imagem (por exemplo, um arquivo de imagem PNG, JPEG ou GIF), em vez de uma página da Web contendo uma imagem. Observe que esta URL DEVE referenciar especificamente uma foto de perfil do usuário final adequada para exibição, em vez de uma foto arbitrária tirada pelo usuário final. |
| created_at            | `number` | Momento em que o usuário final foi criado. O tempo é representado como o número de milissegundos desde a época Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                                                               |
| updated_at            | `number` | Momento em que as informações do usuário final foram atualizadas pela última vez. O tempo é representado como o número de milissegundos desde a época Unix (1970-01-01T00:00:00Z).                                                                                                                                                                                        |

Outras [reivindicações padrão](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) incluem `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo` e `locale` também serão incluídas no escopo `profile` sem a necessidade de solicitar o endpoint userinfo. Uma diferença em relação às reivindicações acima é que essas reivindicações só serão retornadas quando seus valores não forem vazios, enquanto as reivindicações acima retornarão `null` se os valores estiverem vazios.

:::note
Diferente das reivindicações padrão, as reivindicações `created_at` e `updated_at` usam milissegundos em vez de segundos.
:::

**`email`**

| Nome da reivindicação | Tipo      | Descrição                             |
| --------------------- | --------- | ------------------------------------- |
| email                 | `string`  | O endereço de email do usuário        |
| email_verified        | `boolean` | Se o endereço de email foi verificado |

**`phone`**

| Nome da reivindicação | Tipo      | Descrição                              |
| --------------------- | --------- | -------------------------------------- |
| phone_number          | `string`  | O número de telefone do usuário        |
| phone_number_verified | `boolean` | Se o número de telefone foi verificado |

**`address`**

Consulte o [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) para detalhes sobre a reivindicação de endereço.

:::info
Escopos marcados como **(padrão)** são sempre solicitados pelo SDK do Logto. As reivindicações sob escopos OIDC padrão são sempre incluídas no token de ID quando o escopo correspondente é solicitado — elas não podem ser desativadas.
:::

### Escopos estendidos {#extended-scopes}

Os seguintes escopos são estendidos pelo Logto e retornarão reivindicações através do [endpoint userinfo](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo). Essas reivindicações também podem ser configuradas para serem incluídas diretamente no token de ID através de <CloudLink to="/customize-jwt">Console > Custom JWT</CloudLink>. Veja [Token de ID personalizado](/developers/custom-id-token) para mais detalhes.

**`custom_data`**

| Nome da reivindicação | Tipo     | Descrição                          | Incluído no token de ID por padrão |
| --------------------- | -------- | ---------------------------------- | ---------------------------------- |
| custom_data           | `object` | Os dados personalizados do usuário |                                    |

**`identities`**

| Nome da reivindicação | Tipo     | Descrição                                | Incluído no token de ID por padrão |
| --------------------- | -------- | ---------------------------------------- | ---------------------------------- |
| identities            | `object` | As identidades vinculadas do usuário     |                                    |
| sso_identities        | `array`  | As identidades SSO vinculadas do usuário |                                    |

**`roles`**

| Nome da reivindicação | Tipo       | Descrição            | Incluído no token de ID por padrão |
| --------------------- | ---------- | -------------------- | ---------------------------------- |
| roles                 | `string[]` | Os papéis do usuário | ✅                                 |

**`urn:logto:scope:organizations`**

| Nome da reivindicação | Tipo       | Descrição                                             | Incluído no token de ID por padrão |
| --------------------- | ---------- | ----------------------------------------------------- | ---------------------------------- |
| organizations         | `string[]` | Os IDs das organizações às quais o usuário pertence   | ✅                                 |
| organization_data     | `object[]` | Os dados das organizações às quais o usuário pertence |                                    |

:::note
Essas reivindicações de organização também podem ser recuperadas via endpoint userinfo ao usar um [token opaco](/concepts/opaque-token). No entanto, tokens opacos não podem ser usados como tokens de organização para acessar recursos específicos da organização. Veja [Token opaco e organizações](/concepts/opaque-token#opaque-token-and-organizations) para mais detalhes.
:::

**`urn:logto:scope:organization_roles`**

| Nome da reivindicação | Tipo       | Descrição                                                                                        | Incluído no token de ID por padrão |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------- |
| organization_roles    | `string[]` | Os papéis da organização aos quais o usuário pertence no formato `<organization_id>:<role_name>` | ✅                                 |
