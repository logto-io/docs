`Startup.cs`（または `Program.cs`）を開き、次のコードを追加して Logto 認証 (Authentication) サービスを登録します：

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

`AddLogtoAuthentication` メソッドは次のことを行います：

- デフォルトの認証 (Authentication) スキームを `LogtoDefaults.CookieScheme` に設定します。
- デフォルトのチャレンジスキームを `LogtoDefaults.AuthenticationScheme` に設定します。
- デフォルトのサインアウトスキームを `LogtoDefaults.AuthenticationScheme` に設定します。
- 認証 (Authentication) スキームにクッキーと OpenID Connect 認証 (Authentication) ハンドラーを追加します。
