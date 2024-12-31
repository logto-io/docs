```dart title="lib/main.dart"
// LogtoConfig
final logtoConfig = const LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"],
  // 모든 리소스에 의해 공유되는 스코프
  // highlight-start
  scopes: ["read", "write"]
  // highlight-end
);
```
