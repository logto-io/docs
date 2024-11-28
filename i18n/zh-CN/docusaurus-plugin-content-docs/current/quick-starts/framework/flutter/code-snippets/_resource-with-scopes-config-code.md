```dart title="lib/main.dart"
// LogtoConfig
final logtoConfig = const LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"],
  // 添加你的 API 资源的权限
  // highlight-start
  scopes: ["shopping:read", "shopping:write", "store:read", "store:write"]
  // highlight-end
);
```
