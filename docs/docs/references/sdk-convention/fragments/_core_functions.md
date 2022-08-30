<details>
  <summary>fetchOidcConfig</summary>

Return `OidcConfigResponse` by requesting to `/oidc/.well-known/openid-configuration`.

**Parameters**

| Name     | Type     | Notes                     |
| -------- | -------- | ------------------------- |
| endpoint | `string` | The OIDC service endpoint |

**Return Type**

`OidcConfigResponse`

**Throws**

- Fetch failed

</details>

<details>
  <summary>generateSignInUri</summary>

**Parameters**

| Name                  | Type       | Required | Notes                                                             |
| --------------------- | ---------- | -------- | ----------------------------------------------------------------- |
| authorizationEndpoint | `string`   | ✅       |                                                                   |
| clientId              | `string`   | ✅       |                                                                   |
| redirectUri           | `string`   | ✅       |                                                                   |
| codeChallenge         | `string`   | ✅       |                                                                   |
| state                 | `string`   | ✅       |                                                                   |
| scopes                | `string[]` |          | The implementation may vary according to language specifications. |
| resources             | `string[]` |          | The implementation may vary according to language specifications. |
| prompt                | `string`   |          | Default: `consent`.                                               |

The URL will be generated based on `authorizationEndpoint` and contains the following query params:

**Sign-In Url Query Parameters**

| Query Key             | Required | Notes                                                                                                            |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| client_id             | ✅       |                                                                                                                  |
| redirect_uri          | ✅       |                                                                                                                  |
| code_challenge        | ✅       |                                                                                                                  |
| code_challenge_method | ✅       | Hardcoded as S256.                                                                                               |
| state                 | ✅       |                                                                                                                  |
| scope                 | ✅       | scope always contains openid and offline_access, even the input scope provides a null or empty scope value.      |
| resource              |          | We can add resource to uri more than once, the backend will convert them as a list. e.g. `resource=a&resource=b` |
| response_type         | ✅       | Hardcoded as code.                                                                                               |
| prompt                | ✅       |                                                                                                                  |

**Return Type**

`string`

</details>

<details>
  <summary>generateSignOutUri</summary>

**Parameters**

| Name                  | Type     | Required |
| --------------------- | -------- | -------- |
| endSessionEndpoint    | `string` | ✅       |
| idToken               | `string` | ✅       |
| postLogoutRedirectUri | `string` |          |

The URL to be generated will be based on `endSessionEndpoint` and contain the following query parameters:

**Sign-Out Url Query Parameters**

| Query Key                | Required | Notes                                         |
| ------------------------ | -------- | --------------------------------------------- |
| id_token_hint            | ✅       | the inputed `idToken` parameter               |
| post_logout_redirect_uri |          | the inputed `postLogoutRedirectUri` parameter |

**Return Type**

`string`

</details>

<details>
  <summary>fetchTokenByAuthorizationCode</summary>

Fetch a token (`CodeTokenResponse`) by requesting to `/oidc/token` (by authorization code).

**Parameters**

| Name          | Type     | Required |
| ------------- | -------- | -------- |
| tokenEndpoint | `string` | ✅       |
| code          | `string` | ✅       |
| codeVerifier  | `string` | ✅       |
| clientId      | `string` | ✅       |
| redirectUri   | `string` | ✅       |
| resource      | `string` |          |

**HTTP Request**

- Endpoint: `/oidc/token`
- Method: `POST`
- Content-Type: `application/x-www-form-urlencoded`
- Payload:

| Query Key     | Type                           | Required |
| ------------- | ------------------------------ | -------- |
| grant_type    | `string: 'authorization_code'` | ✅       |
| code          | `string`                       | ✅       |
| code_verifier | `string`                       | ✅       |
| client_id     | `string`                       | ✅       |
| redirect_uri  | `string`                       | ✅       |
| resource      | `string`                       |          |

**Return Type**

`CodeTokenResponse`

**Throws**

- Fetch failed

</details>

<details>
  <summary>fetchTokenByRefreshToken</summary>

Fetch a token (`RefreshTokenTokenResponse`) via `/oidc/token` (by refresh token).

**Parameters**

| Name          | Type       | Required |
| ------------- | ---------- | -------- |
| tokenEndpoint | `string`   | ✅       |
| clientId      | `string`   | ✅       |
| refreshToken  | `string`   | ✅       |
| resource      | `string`   |          |
| scopes        | `string[]` |          |

**HTTP Request**

- Endpoint: `/oidc/token`
- Method: `POST`
- Content-Type: `application/x-www-form-urlencoded`
- Payload:

| Query Key     | Type                      | Required | Notes                                                                   |
| ------------- | ------------------------- | -------- | ----------------------------------------------------------------------- |
| grant_type    | `string: 'refresh_token'` | ✅       |                                                                         |
| refresh_token | `string`                  | ✅       |                                                                         |
| client_id     | `string`                  | ✅       |                                                                         |
| resource      | `string`                  |          |                                                                         |
| scope         | `string`                  |          | we join the `scopes` values with space to construct this `scope` string |

**Return Type**

`RefreshTokenTokenResponse`

**Throws**

- Fetch failed

</details>

<details>
  <summary>revoke</summary>

Request to `/oidc/token/revocation` API to notify the authorization server that a previously obtained refresh or access token is no longer needed.

**Parameters**

| Name               | Type     | Notes               |
| ------------------ | -------- | ------------------- |
| revocationEndpoint | `string` |                     |
| clientId           | `string` |                     |
| token              | `string` | token to be revoked |

**HTTP Request**

- Endpoint: `/oidc/token/revocation`
- Method: `POST`
- Content-Type: `application/x-www-form-urlencoded`
- Payload:

| Query Key | Type     |
| --------- | -------- |
| client_id | `string` |
| token     | `string` |

**Return Type**

`void`

**Throws**

- Revoke failed

</details>
