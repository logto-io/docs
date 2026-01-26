```csharp title="Program.cs"
builder.Services.AddLogtoAuthentication(options =>
{
  // ...
  // highlight-next-line
  // กำหนดตัวบ่งชี้ทรัพยากร API ของคุณ
  options.Resource = "https://<your-api-resource-indicator>";
});
```
