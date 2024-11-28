```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-start
    scopes: ["read", "write"], // Ajouter des portées (scopes)
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Ajouter des ressources API
    // highlight-end
  ),
);
```
