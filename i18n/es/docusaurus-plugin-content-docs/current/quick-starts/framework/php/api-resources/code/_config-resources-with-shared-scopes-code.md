```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-start
    scopes: ["read", "write"], // Añadir alcances
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Añadir recursos de API
    // highlight-end
  ),
);
```
