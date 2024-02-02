```csharp
builder.Services.AddLogtoAuthentication(options =>
{
  // ...
  options.Resource = "https://shopping.your-app.com/api";
  options.Scopes = new string[] {
    "openid",
    "profile",
    "offline_access",
    "read",
    "write"
  };
});
```
