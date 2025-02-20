때때로 API 호출을 위해 액세스 토큰 또는 ID 토큰을 가져와야 할 수 있습니다. `GetTokenAsync` 메서드를 사용하여 토큰을 가져올 수 있습니다:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

토큰 만료에 대해 걱정할 필요가 없습니다. 인증 미들웨어가 필요할 때 자동으로 토큰을 갱신합니다.

:::caution
인증 미들웨어가 자동으로 토큰을 갱신하더라도, 사용자 객체의 클레임은 기본 OpenID Connect 인증 핸들러의 제한으로 인해 업데이트되지 않습니다.
이는 우리가 자체 인증 핸들러를 작성하면 해결될 수 있습니다.
:::

위의 액세스 토큰은 OpenID Connect의 userinfo 엔드포인트를 위한 불투명 토큰이며, JWT 토큰이 아닙니다. API 리소스를 지정한 경우, API 리소스를 위한 액세스 토큰을 가져오기 위해 `LogtoParameters.Tokens.AccessTokenForResource`를 사용해야 합니다:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

이 토큰은 API 리소스를 대상으로 하는 JWT 토큰이 될 것입니다.
