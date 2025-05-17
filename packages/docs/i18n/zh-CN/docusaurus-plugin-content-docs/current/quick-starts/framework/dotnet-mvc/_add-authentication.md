打开 `Startup.cs`（或 `Program.cs`）并添加以下代码以注册 Logto 认证服务：

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

`AddLogtoAuthentication` 方法将执行以下操作：

- 将默认认证方案设置为 `LogtoDefaults.CookieScheme`。
- 将默认挑战方案设置为 `LogtoDefaults.AuthenticationScheme`。
- 将默认注销方案设置为 `LogtoDefaults.AuthenticationScheme`。
- 将 cookie 和 OpenID Connect 认证处理程序添加到认证方案中。
