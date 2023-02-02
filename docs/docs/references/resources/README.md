import APIResourceSchema from './fragments/\_api_resource_schema.mdx';

# 📁 API Resource

## Introduction

### What is an API resource?

API resources, a.k.a. [Resource Indicators](https://www.rfc-editor.org/rfc/rfc8707.html), indicate the target services or resources to be requested, usually, a URI format variable representing the resource's identity.

### Why is API resource needed?

Logto, as an authorization server, is designed to serve a large number of services and APIs. By indicating which API resource an end-user intends to access, Logto can issue a private encrypted authorization token and apply audience restrictions accordingly.

A guarded request with an authorization token provided will help you protect your private resources from being accessed and attacked by anonymous identities.

## Definitions

### Resource Indicator

- A resource value indicates the target service or resource to which access is being requested.
- Its value **MUST** be an absolute URI.
- The URI **MUST NOT** include a fragment component.
- It **SHOULD NOT** include a query component.
- You **SHOULD** provide the most specific URI it can for the complete API or set of resources it intends to access.

In practice, a client may know a base URI or the application or resource to interact with. It would be appropriate to use it as the value of the resource parameter.

E.g., Logto management API base URI.

```
https://api.logto.io
```

By default, this API resource is pre-registered to your Logto service. All the management APIs under this URI are protected by Logto.

### Logto API Resource Schema

<APIResourceSchema />

### Permissions and RBAC

See [🔐 RBAC](/docs/recipes/rbac) for details.

## How does it work

### 1. Authorization request

Provide a list of resource indicator parameters in an authorization request. It will indicate all the protected resource(s) that the user may request.

```bash
GET https://logto.dev/oidc/auth?response_type=code
    &client_id=s6BhdRkqt3
    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI
    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fapplications
    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fusers
```

Logto will validate and store these resource indicators. An `authorization_code` will be granted and returned with scopes restricted to these specified resources.

### 2. Access Token request

When the resource parameter is present on an access token request along with the `authorization_code` granted above, it will specify the target API resource audience of the access token is requested.

```bash
POST https://logto.dev/oidc/token HTTP/1.1

    grant_type=authorization_code
    redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ
    resource=https%3A%2F%2Flogto.test.dev%2Fusers
```

An encrypted access token with the audience restricted to this requested resource will be granted by Logto. The token carries all the data you will need to represent the authorization status of the request. E.g., the request user's identity and role, the token's audience and expiration time.

### 3. API Resource request

The client user sent a request to the API resource by presenting the given `access_token` in the Authorization header.

```bash
GET https://logto.dev/api/users

Authorization: Bearer eyJhbGciOiJIUz...
```

:::tip
Please follow our [⚔️ Protect Your API](../../recipes/protect-your-api/README.mdx) guide to implement the token validation on your server-side APIs and make your resources well protected.
:::

Logto follows the standard token-based authorization protocol to protect your API resources. To learn more about OAuth 2.0, please refer to OAuth 2.0's [official document](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1).
