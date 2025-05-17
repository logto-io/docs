Para saber si el usuario está autenticado, puedes verificar la propiedad `User.Identity?.IsAuthenticated`.

Para obtener los reclamos del perfil del usuario, puedes usar la propiedad `User.Claims`:

```csharp
var claims = User.Claims;

// Obtener el ID del usuario
var userId = claims.FirstOrDefault(c => c.Type == LogtoParameters.Claims.Subject)?.Value;
```

Consulta [`LogtoParameters.Claims`](https://github.com/logto-io/csharp/blob/master/src/Logto.AspNetCore.Authentication/LogtoParameters.cs) para ver la lista de nombres de reclamos y sus significados.
