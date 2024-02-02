Open `Startup.cs` (or `Program.cs`) and add the following code to register Logto authentication middleware:

```csharp
using Logto.AspNetCore.Authentication;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddLogtoAuthentication(options =>
{
  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;
  options.AppId = builder.Configuration["Logto:AppId"]!;
  options.AppSecret = builder.Configuration["Logto:AppSecret"];
});

app.UseAuthentication();
```

The `AddLogtoAuthentication` method will do the following things:

- Set the default authentication scheme to `LogtoDefaults.CookieScheme`.
- Set the default challenge scheme to `LogtoDefaults.AuthenticationScheme`.
- Set the default sign-out scheme to `LogtoDefaults.AuthenticationScheme`.
- Add cookie and OpenID Connect authentication handlers to the authentication scheme.
