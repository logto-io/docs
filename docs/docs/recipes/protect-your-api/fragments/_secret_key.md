### Get the JWK Public Key

All tokens issued by Logto are signed with [JWK](https://datatracker.ietf.org/doc/html/rfc7517). (See [JWS](https://datatracker.ietf.org/doc/html/rfc7515) for more details)
Before moving on, you will need a public key to verify the signature of the Bearer Token (`access_token`).

The key set can be inquired through Logto's **jwks_uri**: `https://<your-logto-domain>/oidc/jwks`.

:::note
All the latest Logto Authorization Server Configurations can be found by `https://<your-logto-domain>/oidc/.well-known/openid-configuration`, including the **jwks_uri** and other authorization configs.
:::

As a response, you will get a JWKS (JSON Web Key Sets). **Keep it** on your server. You will need it to verify all the requests' token signatures.
