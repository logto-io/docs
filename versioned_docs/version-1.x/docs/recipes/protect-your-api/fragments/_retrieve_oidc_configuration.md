### Retrieve Logto's OIDC configurations

You will need a JWK public key set and the token issuer to verify the signature and source of the received JWS token. All the latest public Logto Authorization Configurations can be found at `https://<your-logto-domain>/oidc/.well-known/openid-configuration`.

e.g. Call `https://logto.dev/oidc/.well-known/openid-configuration`. And locate the following two fields in the response body:

```json
{
  "jwks_uri": "https://logto.dev/oidc/jwks",
  "issuer": "https://logto.dev/oidc"
}
```
