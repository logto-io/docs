import ResourceRule from './fragments/\_resource_rule.md';
import APIResourceSchema from './fragments/\_api_resource_schema.mdx';

# 📁 API Resource

## Introduction

### What is an API resource?

API resource, a.k.a. [Resource Indicators](https://www.rfc-editor.org/rfc/rfc8707.html), indicates the target service or resource to be requested. A URI format variable represents the resource's identity, which MAY be a locator corresponding to an addressable network location where the target resource is hosted.

### Why is API resource needed?

Logto, as an authorization server, is designed to serve a large number of diverse resources and APIs. By indicating which API resource an end-user intends to request, Logto will be able to determine the type and content of authorization tokens to be issued, how tokens are encrypted and apply audience restrictions accordingly.

A guarded request with an authorization token provided will help you protect your private resources from being accessed and attacked by anonymous identities.

Check out [Resource Indicators for OAuth 2.0](https://www.rfc-editor.org/rfc/rfc8707.html) for more details.

## Definitions

### Value

<ResourceRule />

### Logto Schema

<APIResourceSchema />

## How does it work

### 1. Authorization request

When the resource parameter is used in an authorization request to the authorization endpoint, it indicates the identity of the protected resource(s) to which access is being requested.

```bash
GET https://logto.dev/oidc/auth?response_type=code
    &client_id=s6BhdRkqt3
    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI
    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fapplications
    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fusers
```

Logto will validate and process these resource indicators and grant the `authorization_code`.

### 2. Access Token request

When the resource parameter is used on an access token request made to the token endpoint, it indicates the target service or protected resource where the client intends to use the requested access token.

```bash
POST https://logto.dev/oidc/token HTTP/1.1

    grant_type=authorization_code
    redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ
    resource=https%3A%2F%2Flogto.test.dev%2Fusers
```

An access token with the audience restricted to the requested resource will be granted by Logto.

### 3. API resource request

Client request for the API resource with `access_token` provided as Authorization header. Audience info and token expiration time are encoded in the encrypted `access_token`.

```bash
GET https://logto.dev/api/users

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek

```

:::tip
Please follow our [**Protect Your API**](../../recipes/protect-your-api/README.md) guide to implement the token validation on your server-side APIs and make your resources well protected.
:::

Logto follows the standard token-based authorization protocol to protect your API resources. To learn more about OAuth 2.0, please refer to OAuth 2.0's [official document](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1).
