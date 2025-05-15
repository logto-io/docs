```csharp title="Program.cs"
builder.Services.AddLogtoAuthentication(options =>
{
  // ...
  // highlight-start
  options.Resource = "https://shopping.your-app.com/api";
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
