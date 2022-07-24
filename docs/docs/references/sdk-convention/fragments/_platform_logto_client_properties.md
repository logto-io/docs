<details>
  <summary>logtoConfig</summary>

**Type**

`LogtoConfig`

</details>

<details>
  <summary>oidcConfig</summary>

**Type**

`OidcConfigResponse?`

</details>

<details>
  <summary>accessTokenMap</summary>

**Type**

`Map<string, AccessToken>`

**Key**

- The key should be constructed with `scope` and `resource`.
- The values in `scope` should be sorted alphabetically and joined with space.
- The key should be constructed in the pattern: `${scope}@${resource}`.
- If the `scope` or `resource` is null or empty, their value should be treated as empty.

E.g., `"offline_access openid read:usr@https://logto.dev/api"`, `"@https://logto.dev/api"`, `"openid@"`, `"@"`.

**Value**

- `AccessToken`, which uses `expiresAt` property to indicate the exact time when an access token is expired.

**Notes**

- The `scope` will always be a null value for we don’t support custom scopes in Logto V1.
- When building the access token key to store an access token:
  - `scope` will always be a null value.
  - if the access token is not a jwt, treat the `resource` as a null value.
  - if the access token is a jwt, decode the access token and use the payload’s `aud` claim value as the `resource` part of the access token key.

</details>

<details>
  <summary>refreshToken</summary>

**Type**

`string?`

**Notes**

`refreshToken` will be set or updated under circumstances below:

- Load `refreshToken` from the storage.
- The server returns a `refreshToken` in the response on fetch token successfully.
- Sign out (will be set to `null`).

</details>

<details>
  <summary>idToken</summary>

**Type**

`string?`

**Notes**

- `idToken` should be verified if it comes from the backend.
- `idToken` will be set or updated under circumstances below:
  - Load `idToken` from the storage.
  - The server returns an `idToken` in the response on fetch token successfully.
  - Sign out (will be set to `null`).

</details>
