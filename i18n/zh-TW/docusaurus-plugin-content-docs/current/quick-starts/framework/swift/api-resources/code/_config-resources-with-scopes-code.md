```swift title="ContentView.swift"
let config = try! LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // highlight-start
  scopes: ["shopping:read", "shopping:write", "store:read", "store:write"], // 權限範圍 (Scopes)
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // API 資源 (API resources)
  // highlight-end
)
let client = LogtoClient(useConfig: config)
```
