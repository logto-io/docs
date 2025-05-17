```dart title="lib/main.dart"
// LogtoConfig
final logtoConfig = const LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // API 리소스를 추가하세요
  // highlight-start
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"],
  // highlight-end
);
```
