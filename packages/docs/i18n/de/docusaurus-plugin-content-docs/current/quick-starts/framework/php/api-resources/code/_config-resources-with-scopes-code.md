```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-start
    scopes: ["shopping:read", "shopping:write", "store:read", "store:write"], // Berechtigungen hinzufügen
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // API-Ressourcen hinzufügen
    // highlight-end
  ),
);
```
