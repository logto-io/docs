```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-start
    scopes: ["read", "write"], // 添加权限 (Scopes)
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // 添加 API 资源
    // highlight-end
  ),
);
```
