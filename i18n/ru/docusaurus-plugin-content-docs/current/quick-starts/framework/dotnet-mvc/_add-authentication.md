Откройте `Startup.cs` (или `Program.cs`) и добавьте следующий код для регистрации сервисов аутентификации Logto:

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

Метод `AddLogtoAuthentication` выполнит следующие действия:

- Установит схему аутентификации по умолчанию на `LogtoDefaults.CookieScheme`.
- Установит схему вызова по умолчанию на `LogtoDefaults.AuthenticationScheme`.
- Установит схему выхода по умолчанию на `LogtoDefaults.AuthenticationScheme`.
- Добавит обработчики аутентификации cookie и OpenID Connect в схему аутентификации.
