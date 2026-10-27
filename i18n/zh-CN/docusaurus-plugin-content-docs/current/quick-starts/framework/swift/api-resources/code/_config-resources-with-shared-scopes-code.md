```swift title="ContentView.swift"
let config = try! LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // highlight-start
  scopes: ["read", "write"], // 权限 (Scopes)
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // API 资源
  // highlight-end
)
let client = LogtoClient(useConfig: config)
```
