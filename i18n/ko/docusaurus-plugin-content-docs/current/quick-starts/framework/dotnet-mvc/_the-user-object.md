사용자가 인증되었는지 확인하려면 `User.Identity?.IsAuthenticated` 속성을 확인할 수 있습니다.

사용자 프로필 클레임을 얻으려면 `User.Claims` 속성을 사용할 수 있습니다:

```csharp
var claims = User.Claims;

// 사용자 ID 가져오기
var userId = claims.FirstOrDefault(c => c.Type == LogtoParameters.Claims.Subject)?.Value;
```

클레임 이름과 그 의미에 대한 목록은 [`LogtoParameters.Claims`](https://github.com/logto-io/csharp/blob/master/src/Logto.AspNetCore.Authentication/LogtoParameters.cs) 를 참조하세요.
