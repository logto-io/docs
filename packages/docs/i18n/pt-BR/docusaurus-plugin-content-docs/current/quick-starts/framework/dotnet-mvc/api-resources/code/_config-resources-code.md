```csharp title="Program.cs"
builder.Services.AddLogtoAuthentication(options =>
{
  // ...
  // highlight-next-line
  options.Resource = "https://<seu-indicador-de-recurso-de-api>";
});
```
