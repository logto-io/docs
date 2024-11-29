Abra `Startup.cs` (ou `Program.cs`) e adicione o seguinte código para registrar os serviços de autenticação do Logto:

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

O método `AddLogtoAuthentication` fará as seguintes coisas:

- Definir o esquema de autenticação padrão para `LogtoDefaults.CookieScheme`.
- Definir o esquema de desafio padrão para `LogtoDefaults.AuthenticationScheme`.
- Definir o esquema de logout padrão para `LogtoDefaults.AuthenticationScheme`.
- Adicionar manipuladores de autenticação de cookie e OpenID Connect ao esquema de autenticação.
