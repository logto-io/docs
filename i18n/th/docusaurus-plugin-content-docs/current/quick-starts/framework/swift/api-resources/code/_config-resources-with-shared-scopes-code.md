```swift title="ContentView.swift"
let config = try? LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // highlight-start
  scopes: ["read", "write"], // ขอบเขตที่ร้องขอ
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // ทรัพยากร API ที่ร้องขอ
  // highlight-end
)
let client = LogtoClient(useConfig: config)
```
