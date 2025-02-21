```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-start
    scopes: ["shopping:read", "shopping:write", "store:read", "store:write"], // 新增權限範圍 (Scopes)
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // 新增 API 資源 (API resources)
    // highlight-end
  ),
);
```
