```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-start
    scopes: ["read", "write"], // Adicionar escopos
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Adicionar recursos de API
    // highlight-end
  ),
);
```
