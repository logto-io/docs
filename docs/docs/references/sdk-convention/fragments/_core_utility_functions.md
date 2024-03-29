<details>
  <summary>generateCodeVerifier</summary>

Generate a code verifier.  
The length of the code verifier is hardcoded as 64.  
The return value MUST be encrypted to an URL-safe base64 format string.

**Reference**

- [PKCE](https://oauth.net/2/pkce/)

**Parameters**

None.

**Return Type**

`string`

</details>

<details>
  <summary>generateCodeChallenge</summary>

Generate a code challenge based on a code verifier.  
This method encrypts the code verifier and returns the result in a URL-safe Base64 format.  
We hardcode the encryption algorithm as `SHA-256` in Logto V1.

**Reference**

- [PKCE](https://oauth.net/2/pkce/)

**Parameters**

| Name         | Type     | Notes                                                      |
| ------------ | -------- | ---------------------------------------------------------- |
| codeVerifier | `string` | Generated by [generateCodeVerifier](#generatecodeverifier) |

**Return Type**

`string`

</details>

<details>
  <summary>generateState</summary>

"State" is used to prevent the CSRF attack.  
The length of the "state" is hardcoded as 64.  
The result string to be returned MUST be encrypted to an URL-safe base64 format string.

**Reference**

- [CSRF](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12)

**Parameters**

None.

**Return Type**

`string`

</details>

<details>
  <summary>decodeIdToken</summary>

Decode an ID Token without secret verification.  
Return an `IdTokenClaims` which carries all the token claims in the payload section.

**Parameters**

| Name  | Type     |
| ----- | -------- |
| token | `string` |

**Return Type**

`IdTokenClaims`

**Throws**

- The `token` is not a valid JWT.

</details>

<details>
  <summary>verifyIdToken</summary>

Verify if an ID Token is legal.

**Verify Signing Key**

OIDC supported the JSON Web Key Set.
This function accepts a `JsonWebKeySet` object from a 3rd-party library (jose) for verification.

```json
// JsonWebKeySet example
{
  "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "xxxx",
      "e": "xxxx",
      "n": "xxxx"
    }
  ]
}
```

**Verify Claims**

- Verify the `iss` in the ID Token matches the issuer of this token.
- Verify the `aud` (audience) Claim is equal to the client ID.
- Verify that the current time is before the expiry time.
- Verify that the issued at time (`iat`) is not more than +/- 1 minute on the current time.

**Reference**

- [OpenID connect core - ID Token Validation](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation)

**Parameters**

| Name     | Type            |
| -------- | --------------- |
| idToken  | `string`        |
| clientId | `string`        |
| issuer   | `string`        |
| jwks     | `JsonWebKeySet` |

**Return Type**

`void`

**Throws**

- Verify signing key failed
- Verify claims failed

</details>

<details>
  <summary>verifyAndParseCodeFromCallbackUri</summary>

Verify the sign-in callbackUri is legal and return the `code` extracted from callbackUri.

**Verify Callback URI**

- Verify the `callbackUri` should start with `redirectUri`
- Verify there is no `error` in the `callbackUri` (Refer to [Error Response](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) in redirect URI).
- Verify the `callbackUri` contains `state`, which should equal to the `state` value you specified in `generateSignInUri`.
- Verify the `callbackUri` contains the parameter value `code`, which you will use when requesting to `/oidc/token` (by refresh token).

**Parameters**

| Name        | Type     |
| ----------- | -------- |
| callbackUri | `string` |
| redirectUri | `string` |
| state       | `string` |

**Return Type**

`string`

**Throws**

- Verifications failed

</details>
