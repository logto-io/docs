```swift title="ContentView.swift"
let config = try! LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // highlight-start
  scopes: ["shopping:read", "shopping:write", "store:read", "store:write"], // スコープ (Scope) の例
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // API リソースの例
  // highlight-end
)
let client = LogtoClient(useConfig: config)
```
