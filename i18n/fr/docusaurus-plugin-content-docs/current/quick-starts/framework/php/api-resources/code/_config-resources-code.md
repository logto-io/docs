```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-next-line
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Ajouter des ressources API
  ),
);
```
