Para saber se o usuário está autenticado, você pode verificar a propriedade `User.Identity?.IsAuthenticated`.

Para obter as reivindicações do perfil do usuário, você pode usar a propriedade `User.Claims`:

```csharp
var claims = User.Claims;

// Obter o ID do usuário
var userId = claims.FirstOrDefault(c => c.Type == LogtoParameters.Claims.Subject)?.Value;
```

Veja [`LogtoParameters.Claims`](https://github.com/logto-io/csharp/blob/master/src/Logto.AspNetCore.Authentication/LogtoParameters.cs) para a lista de nomes de reivindicações e seus significados.
