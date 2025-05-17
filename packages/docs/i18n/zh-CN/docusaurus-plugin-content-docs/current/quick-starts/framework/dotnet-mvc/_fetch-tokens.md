有时你可能需要获取访问令牌 (access token) 或 ID 令牌 (ID token) 以进行 API 调用。你可以使用 `GetTokenAsync` 方法来获取这些令牌：

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

无需担心令牌过期，认证 (Authentication) 中间件会在必要时自动刷新令牌。

:::caution
虽然认证 (Authentication) 中间件会自动刷新令牌，但由于底层 OpenID Connect 认证处理程序的限制，用户对象中的声明 (Claims) 不会更新。
一旦我们编写自己的认证处理程序，这个问题就可以解决。
:::

注意，上述访问令牌 (access token) 是用于 OpenID Connect 中 userinfo 端点的不透明令牌 (Opaque token)，而不是 JWT 令牌。如果你指定了 API 资源 (API resource)，需要使用 `LogtoParameters.Tokens.AccessTokenForResource` 来获取 API 资源的访问令牌 (access token)：

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

此令牌将是一个以 API 资源 (API resource) 为受众 (Audience) 的 JWT 令牌。
