```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-start
    scopes: ["read", "write"], // スコープを追加
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // API リソースを追加
    // highlight-end
  ),
);
```
