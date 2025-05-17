```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-start
    scopes: ["read", "write"], // Add scopes
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Add API resources
    // highlight-end
  ),
);
```
