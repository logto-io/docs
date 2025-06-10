有时你可能需要获取用于 API 调用的访问令牌 (Access token) 或 ID 令牌 (ID token)。你可以使用 `GetTokenAsync` 方法来获取这些令牌：

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

无需担心令牌过期，认证 (Authentication) 中间件会在必要时自动刷新令牌。

:::caution
虽然认证 (Authentication) 中间件会自动刷新令牌，但由于底层 OpenID Connect 认证 (Authentication) 处理器的限制，用户对象中的声明 (Claims) 不会被更新。
一旦我们编写了自己的认证 (Authentication) 处理器，这个问题就可以解决。
:::

请注意，上述访问令牌 (Access token) 是用于 OpenID Connect 的 userinfo 端点的不透明令牌 (Opaque token)，它不是 JWT。如果你已经指定了 API 资源，则需要使用 `LogtoParameters.Tokens.AccessTokenForResource` 来获取该 API 资源的访问令牌 (Access token)：

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

此令牌将是一个以 API 资源为受众 (Audience) 的 JWT。
