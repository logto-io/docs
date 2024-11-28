Pour savoir si l'utilisateur est en Authentification (authenticated), vous pouvez vérifier la propriété `User.Identity?.IsAuthenticated`.

Pour obtenir les Revendications (claims) du profil utilisateur, vous pouvez utiliser la propriété `User.Claims` :

```csharp
var claims = User.Claims;

// Obtenez l'ID utilisateur
var userId = claims.FirstOrDefault(c => c.Type == LogtoParameters.Claims.Subject)?.Value;
```

Voir [`LogtoParameters.Claims`](https://github.com/logto-io/csharp/blob/master/src/Logto.AspNetCore.Authentication/LogtoParameters.cs) pour la liste des noms de Revendications (claim) et leurs significations.
