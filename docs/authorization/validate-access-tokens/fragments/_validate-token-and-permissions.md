After extracting the token and fetching the OIDC config, validate the following:

- **Signature:** JWT must be valid and signed by Logto (via JWKS).
- **Issuer:** Must match your Logto tenant’s issuer.
- **Audience:** Must match the API’s resource indicator registered in Logto, or the organization context if applicable.
- **Expiration:** Token must not be expired.
- **Permissions (scopes):** Token must include required scopes for your API/action. Scopes are space-separated strings in the `scope` claim.
- **Organization context:** If protecting organization-level API resources, validate the `organization_id` claim.

See [JSON Web Token](https://auth.wiki/jwt) to learn more about JWT structure and claims.

### What to check for each permission model \{#what-to-check-for-each-permission-model}

The claims and validation rules differ by permission model:

| Permission model                   | Audience claim (`aud`)                                                 | Organization claim (`organization_id`) | Scopes (permissions) to check (`scope`) |
| ---------------------------------- | ---------------------------------------------------------------------- | -------------------------------------- | --------------------------------------- |
| Global API resources               | API resource indicator                                                 | _Not present_                          | API resource permissions                |
| Organization (non-API) permissions | `urn:logto:organization:<id>` (organization context is in `aud` claim) | _Not present_                          | Organization permissions                |
| Organization-level API resources   | API resource indicator                                                 | Organization ID (must match request)   | API resource permissions                |

<small>
  For non-API organization permissions, the organization context is represented by the `aud` claim
  (e.g., `urn:logto:organization:abc123`). The `organization_id` claim is only present for
  organization-level API resource tokens.
</small>

:::tip
Always validate both permissions (scopes) and context (audience, organization) for secure multi-tenant APIs.
:::
