Considering performance and the data size, Logto doesn't include all the claims in the ID token, such as `custom_data` which could be a large JSON object. To fetch these claims, you need to set the `GetClaimsFromUserInfoEndpoint` property to `true`:

```csharp
builder.Services.AddLogtoAuthentication(options =>
{
  // ...
  options.GetClaimsFromUserInfoEndpoint = true;
});
```

Currently, the following claims are not included in the ID token:

- `LogtoParameters.Claims.CustomData` (use `LogtoParameters.Scopes.CustomData` to fetch)
- `LogtoParameters.Claims.Identities` (use `LogtoParameters.Scopes.Identities` to fetch)
