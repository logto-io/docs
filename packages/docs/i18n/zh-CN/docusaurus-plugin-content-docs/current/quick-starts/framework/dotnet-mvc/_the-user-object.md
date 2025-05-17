要知道用户是否已认证 (Authenticated)，你可以检查 `User.Identity?.IsAuthenticated` 属性。

要获取用户资料声明 (Claims)，你可以使用 `User.Claims` 属性：

```csharp
var claims = User.Claims;

// 获取用户 ID
var userId = claims.FirstOrDefault(c => c.Type == LogtoParameters.Claims.Subject)?.Value;
```

查看 [`LogtoParameters.Claims`](https://github.com/logto-io/csharp/blob/master/src/Logto.AspNetCore.Authentication/LogtoParameters.cs) 以获取声明 (Claim) 名称及其含义的列表。
