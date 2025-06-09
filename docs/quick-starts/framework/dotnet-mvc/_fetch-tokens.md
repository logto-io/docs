Sometimes you may need to fetch the access token or ID token for API calls. You can use the `GetTokenAsync` method to fetch the tokens:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

No need to worry about the token expiration, the authentication middleware will automatically refresh the tokens when necessary.

:::caution
Although the authentication middleware will automatically refresh the tokens, the claims in the user object will not be updated due to the limitation of the underlying OpenID Connect authentication handler.
This can be resolved once we write our own authentication handler.
:::

Note the access token above is an opaque token for the userinfo endpoint in OpenID Connect, which is not a JWT. If you have specified the API resource, you need to use `LogtoParameters.Tokens.AccessTokenForResource` to fetch the access token for the API resource:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

This token will be a JWT with the API resource as the audience.
