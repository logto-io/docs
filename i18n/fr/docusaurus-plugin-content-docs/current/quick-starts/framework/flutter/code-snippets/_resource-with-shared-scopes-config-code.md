```dart title="lib/main.dart"
// LogtoConfig
final logtoConfig = const LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"],
  // Portées partagées par toutes les ressources
  // highlight-start
  scopes: ["read", "write"]
  // highlight-end
);
```
