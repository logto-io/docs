You’ll need the following values to validate Logto-issued tokens:

- JSON Web Key Set (JWKS) URI: The URL to Logto’s public keys, used to verify JWT signatures.
- Issuer: The expected issuer value (Logto’s OIDC URL).

First, find your Logto tenant’s endpoint. You can find it in various places:

- In the Logto Console, under **Settings** → **Domains**.
- In any application settings where you configured in Logto, **Settings** → **Endpoints & Credentials**.

### Fetch from OpenID Connect discovery endpoint \{#fetch-from-openid-connect-discovery-endpoint}

These values can be retrieved from Logto’s OpenID Connect discovery endpoint:

```
https://<your-logto-endpoint>/oidc/.well-known/openid-configuration
```

Here’s an example response (other fields omitted for brevity):

```json
{
  "jwks_uri": "https://your-tenant.logto.app/oidc/jwks",
  "issuer": "https://your-tenant.logto.app/oidc"
}
```

### Hardcode in your code (not recommended) \{#hardcode-in-your-code-not-recommended}

Since Logto doesn't allow customizing the JWKS URI or issuer, you can hardcode these values in your code. However, this is not recommended for production applications as it may increase maintenance overhead if some configuration changes in the future.

- JWKS URI: `https://<your-logto-endpoint>/oidc/jwks`
- Issuer: `https://<your-logto-endpoint>/oidc`
