เปิด `Startup.cs` (หรือ `Program.cs`) และเพิ่มโค้ดต่อไปนี้เพื่อจดทะเบียนบริการการยืนยันตัวตน Logto:

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

เมธอด `AddLogtoAuthentication` จะดำเนินการดังต่อไปนี้:

- กำหนดสคีมการยืนยันตัวตนเริ่มต้นเป็น `LogtoDefaults.CookieScheme`
- กำหนดสคีม challenge เริ่มต้นเป็น `LogtoDefaults.AuthenticationScheme`
- กำหนดสคีม sign-out เริ่มต้นเป็น `LogtoDefaults.AuthenticationScheme`
- เพิ่ม handler สำหรับ cookie และ OpenID Connect ลงในสคีมการยืนยันตัวตน
