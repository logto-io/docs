# Introspect tokens

During the authentication process, if no resource is specified, Logto will issue an opaque access token instead of a JWT. The opaque token is a random string and it's much shorter than a JWT:

```jsonc
{
  "access_token": "some-random-string", // opaque token
  "expires_in": 3600,
  "id_token": "eyJhbGc...aBc", // JWT
  "scope": "openid profile email",
  "token_type": "Bearer"
}
```

The opaque token can be used to call the [userinfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) and to access protected resources that require authentication. Since it's not a JWT, how can the resource server validate it?

Logto provides an [introspection endpoint](https://www.rfc-editor.org/rfc/rfc7662.html) that can be used to validate opaque tokens. By default, the introspection endpoint is `/oidc/token/introspection` and accepts `POST` requests. The following parameter is required:

- `token`: the opaque token to validate

The endpoint also requires client authentication. You can use one of the following methods:

- HTTP Basic authentication: Use the `Authorization` header with the value `Basic <base64-encoded-credentials>`. The credentials must be the client ID and client secret separated by a colon (`:`) and base64-encoded.
- HTTP POST authentication: Use the `client_id` and `client_secret` parameters:
  - `client_id`: the client ID of the application that requested the token
  - `client_secret`: the client secret of the application that requested the token

The client ID (app ID) and client secret (app secret) can be the app credentials from any "traditional web" or "machine-to-machine" application in Logto. The introspection endpoint will return an error if the credentials are invalid.

The introspection endpoint returns a JSON object with the claims of the token:

```jsonc
{
  "active": true, // whether the token is valid or not
  "sub": "1234567890" // the subject of the token (the user ID)
}
```

If the token is invalid, the `active` field will be `false` and the `sub` field will be omitted.

Here's a non-normative example of the introspection request:

```bash
curl --location \
  --request POST 'https://[tenant-id].logto.app/oidc/token/introspection' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'token=some-random-string' \
  --data-urlencode 'client_id=1234567890' \
  --data-urlencode 'client_secret=1234567890'
```

Remember to replace `[tenant-id]` with your tenant ID.
