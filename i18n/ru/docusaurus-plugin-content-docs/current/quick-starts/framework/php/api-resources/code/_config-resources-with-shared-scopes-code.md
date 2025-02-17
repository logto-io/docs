```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-start
    scopes: ["read", "write"], // Добавьте области действия
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Добавьте ресурсы API
    // highlight-end
  ),
);
```
