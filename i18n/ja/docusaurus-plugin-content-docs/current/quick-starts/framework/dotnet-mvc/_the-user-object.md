ユーザーが認証 (Authentication) されているかどうかを確認するには、`User.Identity?.IsAuthenticated` プロパティをチェックできます。

ユーザープロファイルのクレームを取得するには、`User.Claims` プロパティを使用します：

```csharp
var claims = User.Claims;

// ユーザー ID を取得
var userId = claims.FirstOrDefault(c => c.Type == LogtoParameters.Claims.Subject)?.Value;
```

クレーム名とその意味のリストについては、[`LogtoParameters.Claims`](https://github.com/logto-io/csharp/blob/master/src/Logto.AspNetCore.Authentication/LogtoParameters.cs) を参照してください。
