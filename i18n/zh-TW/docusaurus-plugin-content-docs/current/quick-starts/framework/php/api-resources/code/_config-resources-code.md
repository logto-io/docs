```php title="index.php"
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-next-line
    resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // 新增 API 資源 (API resources)
  ),
);
```
