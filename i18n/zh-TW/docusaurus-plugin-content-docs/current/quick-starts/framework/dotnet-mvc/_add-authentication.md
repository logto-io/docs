打開 `Startup.cs`（或 `Program.cs`），並新增以下程式碼以註冊 Logto 驗證 (Authentication) 服務：

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

`AddLogtoAuthentication` 方法將執行以下操作：

- 將預設驗證 (Authentication) 機制設為 `LogtoDefaults.CookieScheme`。
- 將預設挑戰機制設為 `LogtoDefaults.AuthenticationScheme`。
- 將預設登出機制設為 `LogtoDefaults.AuthenticationScheme`。
- 將 cookie 和 OpenID Connect 驗證處理程序新增至驗證機制。
