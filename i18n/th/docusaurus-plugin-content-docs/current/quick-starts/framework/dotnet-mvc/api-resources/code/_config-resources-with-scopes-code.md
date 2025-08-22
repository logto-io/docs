```csharp title="Program.cs"
builder.Services.AddLogtoAuthentication(options =>
{
  // ...
  // highlight-start
  // กำหนดทรัพยากร API ที่ต้องการ
  options.Resource = "https://shopping.your-app.com/api";
  // กำหนดขอบเขต (scopes) ที่ต้องการ
  options.Scopes = new string[] {
    "openid",
    "profile",
    "offline_access",
    "read",
    "write"
  };
  // highlight-end
});
```
