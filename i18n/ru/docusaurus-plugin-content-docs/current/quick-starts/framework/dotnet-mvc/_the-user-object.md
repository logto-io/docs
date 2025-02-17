Чтобы узнать, аутентифицирован ли пользователь, вы можете проверить свойство `User.Identity?.IsAuthenticated`.

Чтобы получить утверждения профиля пользователя, вы можете использовать свойство `User.Claims`:

```csharp
var claims = User.Claims;

// Получить ID пользователя
var userId = claims.FirstOrDefault(c => c.Type == LogtoParameters.Claims.Subject)?.Value;
```

Смотрите [`LogtoParameters.Claims`](https://github.com/logto-io/csharp/blob/master/src/Logto.AspNetCore.Authentication/LogtoParameters.cs) для списка имен утверждений и их значений.
