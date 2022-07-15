<details>
  <summary>constructor</summary>

**Parameters**

| Parameter   | Type          |
| ----------- | ------------- |
| logtoConfig | `LogtoConfig` |

**Return Type**

`LogtoClient`

**Notes**

- You can add extra parameters if you need to.
- If the usePersistStorage is enabled in logtoConfig, the platform SDK will provide the following functionalities:
  - Store persistent data with a unique key based on `clientId`.
  - Load `refreshToken` and `idToken` from the local machine on initialization.
  - Store `refreshToken` and `idToken` locally on `Core.fetchTokenByAuthorizationCode` and `Core.fetchTokenByRefreshToken`.

</details>

<details>
  <summary>isAuthenticated</summary>

To know if a user is authenticated or not.  
This can be defined as a getter as well.

A user is treated as authenticated when:

- We have gained an ID token successfully.
- We have loaded an ID token from the local machine.

**Parameters**

None.

**Return Type**

`boolean`

</details>

<details>
  <summary>SignIn</summary>

This method should start a sign-in flow and the platform SDK should take care of all steps an authorization needs to complete including the sign-in redirect process.

The user will be authenticated after this method has been called successfully.

The sign-in process will reply on the Core SDK Functions:

- `generateSignInUri`
- `verifyAndParseCodeFromCallbackUri`
- `fetchTokenByAuthorizationCode`

Notes:

- Because generateSignInUri includes the resources we need, we don’t need to pass resource to fetchTokenByAuthorizationCode function.

**Parameters**

| Parameter   | Type     |
| ----------- | -------- |
| redirectUri | `string` |

**Return Type**

`void`

**Throws**

- Any error that occurs during this sign-in process.

</details>

<details>
  <summary>SignOut</summary>

The sign-out process should follow the steps:

1. Clear local storage, cookies, persistent data, or something else.
2. Revoke the obtained refresh token via `Core.revoke` (the Logto service will revoke all related tokens if the refresh token is revoked).
3. Redirect the user to Logto's sign-out endpoint unless step 1 clears the session of the sign-in page.

Notes:

- In step 2, `Core.revoke` is an async call and will not block the sign-out process even if it fails.
- Step 3 is relying on `Core.generateSignOutUri` to generate the Logto's sign-out endpoint.

**Parameters**

| Parameter             | Type     | Required | Default Value |
| --------------------- | -------- | -------- | ------------- |
| postLogoutRedirectUri | `string` |          | `null`        |

**Return Type**

`void`

**Throws**

- Any error that occurs during this sign-out process.

</details>

<details>
  <summary>getAccessToken</summary>

`getAccessToken` retrieves an `AccessToken` by `resource` and `scope` from `accessTokenMap` then returns the `token` value of that `AccessToken`.

We set the `scope` to `null` when building the key of the `accessTokenMap` for we don't support custom scopes in Logto V1.

**Notes**

- If cannot find a corresponding `AccessToken` then perform a `Core.fetchTokenByRefreshToken` action to fetch the token needed.
- If the `accessToken` is not expired, then return the `token` value inside.
- If the `accessToken` is expired, then perform a `Core.fetchTokenByRefreshToken` action to retrieve a new `accessToken` , update the local `accessTokenMap` and return the new `token` value inside.
- If `Core.fetchTokenByRefreshToken` failed, then informs that the user with the exception occurred.
- If cannot find the refreshToken, then informs the user of an unauthorized exception.
- Only by obtaining a `refreshToken` after signing in can we perform a `Core.fetchTokenByRefreshToken` action.

**Parameters**

| Parameter | Type     | Required | Default value |
| --------- | -------- | -------- | ------------- |
| resource  | `string` |          | `null`        |

**Return Type**

`string`

**Throws**

- The user is not authenticated.
- The input `resource` is not set in the `logtoConfig`.
- No refresh token found before `Core.fetchTokenByRefreshToken`.
- `Core.fetchTokenByRefreshToken` failed.

</details>

<details>
  <summary>getIdTokenClaims</summary>

`getIdTokenClaims` return an object that carries the claims of the `idToken` property.

**Parameters**

None.

**Return Type**

`IdTokenClaims`

**Throws**

- The user is not authenticated.

</details>
