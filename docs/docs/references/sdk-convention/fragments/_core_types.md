<details>
  <summary>OidcConfigResponse</summary>

The configuration of the identity provider, which can be retrieved via `/oidc/.well-known/openid-configuration` API.

**Properties**

| Name                  | Type     |
| --------------------- | -------- |
| authorizationEndpoint | `string` |
| tokenEndpoint         | `string` |
| endSessionEndpoint    | `string` |
| revocationEndpoint    | `string` |
| jwksUri               | `string` |
| issuer                | `string` |

</details>

<details>
  <summary>CodeTokenResponse</summary>

The response data of `/oidc/token` (by authorization code).

**Properties**

| Name         | Type     | Required |
| ------------ | -------- | -------- |
| accessToken  | `string` | ✅       |
| refreshToken | `string` |          |
| idToken      | `string` | ✅       |
| scope        | `string` | ✅       |
| expiresIn    | `number` | ✅       |

</details>

<details>
  <summary>RefreshTokenResponse</summary>

The response data of `/oidc/token` (by refresh token) when refreshing tokens by a refresh token.

**Properties**

| Name         | Type     | Required |
| ------------ | -------- | -------- |
| accessToken  | `string` | ✅       |
| refreshToken | `string` | ✅       |
| idToken      | `string` |          |
| scope        | `string` | ✅       |
| expiresIn    | `number` | ✅       |

</details>

<details>
  <summary>IdTokenClaims</summary>

Claims carried by the id token.

**Properties**

| Name     | Type     | Required |
| -------- | -------- | -------- |
| sub      | `string` | ✅       |
| aud      | `string` | ✅       |
| exp      | `number` | ✅       |
| iat      | `number` | ✅       |
| iss      | `string` | ✅       |
| atHash   | `string` |          |
| username | `string` |          |
| name     | `string` |          |
| avatar   | `string` |          |

</details>
