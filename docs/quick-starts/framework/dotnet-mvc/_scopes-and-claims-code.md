```csharp
builder.Services.AddLogtoAuthentication(options =>
{
  // ...
  options.Scopes = new string[] {
    LogtoParameters.Scopes.Email,
    LogtoParameters.Scopes.Phone
  }
});
```
