```dart title="lib/main.dart"
// LogtoConfig
final logtoConfig = const LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"],
  // Ajoutez les portées de vos ressources API
  // highlight-start
  scopes: ["shopping:read", "shopping:write", "store:read", "store:write"]
  // highlight-end
);
```
