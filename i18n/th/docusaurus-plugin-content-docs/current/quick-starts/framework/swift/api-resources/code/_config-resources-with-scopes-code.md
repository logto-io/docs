```swift title="ContentView.swift"
let config = try! LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // highlight-start
  // ขอบเขต (scopes) ที่ร้องขอ
  scopes: ["shopping:read", "shopping:write", "store:read", "store:write"],
  // ทรัพยากร (resources) ที่ร้องขอ
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"],
  // highlight-end
)
let client = LogtoClient(useConfig: config)
```
