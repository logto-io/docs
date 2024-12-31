`Startup.cs` (또는 `Program.cs`)를 열고 Logto 인증 (Authentication) 서비스를 등록하기 위해 다음 코드를 추가하세요:

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

`AddLogtoAuthentication` 메서드는 다음 작업을 수행합니다:

- 기본 인증 (Authentication) 스킴을 `LogtoDefaults.CookieScheme`으로 설정합니다.
- 기본 챌린지 스킴을 `LogtoDefaults.AuthenticationScheme`으로 설정합니다.
- 기본 로그아웃 스킴을 `LogtoDefaults.AuthenticationScheme`으로 설정합니다.
- 쿠키 및 OpenID Connect 인증 핸들러를 인증 스킴에 추가합니다.
