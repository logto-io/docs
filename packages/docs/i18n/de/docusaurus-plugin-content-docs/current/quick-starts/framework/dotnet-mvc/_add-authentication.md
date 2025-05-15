Öffne `Startup.cs` (oder `Program.cs`) und füge den folgenden Code hinzu, um die Logto-Authentifizierungsdienste zu registrieren:

```csharp title="Program.cs"
using Logto.AspNetCore.Authentication;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddLogtoAuthentication(options =>
{
  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;
  options.AppId = builder.Configuration["Logto:AppId"]!;
  options.AppSecret = builder.Configuration["Logto:AppSecret"];
});
```

Die Methode `AddLogtoAuthentication` wird Folgendes tun:

- Das Standard-Authentifizierungsschema auf `LogtoDefaults.CookieScheme` setzen.
- Das Standard-Challenge-Schema auf `LogtoDefaults.AuthenticationScheme` setzen.
- Das Standard-Abmeldeschema auf `LogtoDefaults.AuthenticationScheme` setzen.
- Cookie- und OpenID Connect-Authentifizierungs-Handler zum Authentifizierungsschema hinzufügen.
