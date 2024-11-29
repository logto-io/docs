Um zu wissen, ob der Benutzer authentifiziert ist, kannst du die Eigenschaft `User.Identity?.IsAuthenticated` überprüfen.

Um die Benutzerprofilansprüche zu erhalten, kannst du die Eigenschaft `User.Claims` verwenden:

```csharp
var claims = User.Claims;

// Holen Sie sich die Benutzer-ID
var userId = claims.FirstOrDefault(c => c.Type == LogtoParameters.Claims.Subject)?.Value;
```

Siehe [`LogtoParameters.Claims`](https://github.com/logto-io/csharp/blob/master/src/Logto.AspNetCore.Authentication/LogtoParameters.cs) für die Liste der Anspruchsnamen und deren Bedeutungen.
