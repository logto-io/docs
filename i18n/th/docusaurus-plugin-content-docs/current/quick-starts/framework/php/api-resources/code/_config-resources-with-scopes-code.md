```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-start
    scopes: ["shopping:read", "shopping:write", "store:read", "store:write"], // เพิ่มขอบเขต (scopes)
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // เพิ่มทรัพยากร API (API resources)
    // highlight-end
  ),
);
```
