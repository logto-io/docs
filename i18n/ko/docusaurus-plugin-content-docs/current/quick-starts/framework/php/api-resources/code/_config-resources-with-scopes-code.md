```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-start
    scopes: ["shopping:read", "shopping:write", "store:read", "store:write"], // 스코프 추가
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // API 리소스 추가
    // highlight-end
  ),
);
```
