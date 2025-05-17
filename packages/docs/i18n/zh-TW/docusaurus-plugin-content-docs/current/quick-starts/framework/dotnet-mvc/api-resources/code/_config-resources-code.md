```csharp title="Program.cs"
builder.Services.AddLogtoAuthentication(options =>
{
  // ...
  // highlight-next-line
  options.Resource = "https://<your-api-resource-indicator>";
});
```
