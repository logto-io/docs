With the user's authorization status, a [JWT](https://datatracker.ietf.org/doc/html/rfc7519) format `access_token` will be granted and issued by Logto, specifically for the requested API resource. Encrypted and audience-restricted with an expiration time. The token carries all the necessary info to represent the authority of this request.

Append the token to your request's Authorization header as the Bearer token:

:::note
The Bearer token's integration flow may vary based on the framework or requester you are using. Choose your own way to apply the request Authorization header.
:::

e.g.

```bash
GET https://logto.dev/api/users

--header Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek

```
