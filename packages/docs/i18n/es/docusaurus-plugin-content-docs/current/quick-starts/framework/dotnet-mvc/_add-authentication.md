Abre `Startup.cs` (o `Program.cs`) y añade el siguiente código para registrar los servicios de autenticación de Logto:

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

El método `AddLogtoAuthentication` hará lo siguiente:

- Establecer el esquema de autenticación predeterminado en `LogtoDefaults.CookieScheme`.
- Establecer el esquema de desafío predeterminado en `LogtoDefaults.AuthenticationScheme`.
- Establecer el esquema de cierre de sesión predeterminado en `LogtoDefaults.AuthenticationScheme`.
- Añadir manejadores de autenticación de cookies y OpenID Connect al esquema de autenticación.
