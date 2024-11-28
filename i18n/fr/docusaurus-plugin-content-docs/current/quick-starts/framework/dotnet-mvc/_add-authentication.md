Ouvrez `Startup.cs` (ou `Program.cs`) et ajoutez le code suivant pour enregistrer les services d'authentification Logto :

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

La méthode `AddLogtoAuthentication` effectuera les actions suivantes :

- Définir le schéma d'Authentification (Authentication) par défaut sur `LogtoDefaults.CookieScheme`.
- Définir le schéma de défi par défaut sur `LogtoDefaults.AuthenticationScheme`.
- Définir le schéma de déconnexion par défaut sur `LogtoDefaults.AuthenticationScheme`.
- Ajouter des gestionnaires d'authentification par cookie et OpenID Connect au schéma d'authentification.
