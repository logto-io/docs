要知道使用者是否已驗證 (Authenticated)，你可以檢查 `User.Identity?.IsAuthenticated` 屬性。

要取得使用者的宣告 (Claims)，可以使用 `User.Claims` 屬性：

```csharp
var claims = User.Claims;

// 取得使用者 ID
var userId = claims.FirstOrDefault(c => c.Type == LogtoParameters.Claims.Subject)?.Value;
```

請參閱 [`LogtoParameters.Claims`](https://github.com/logto-io/csharp/blob/master/src/Logto.AspNetCore.Authentication/LogtoParameters.cs) 以了解宣告 (Claim) 名稱及其意義。
