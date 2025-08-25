```swift title="ContentView.swift"
let config = try? LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // highlight-start
  // scopes: ขอบเขตการอนุญาตที่ต้องการ
  scopes: ["shopping:read", "shopping:write", "store:read", "store:write"],
  // resources: ทรัพยากร API ที่ต้องการเข้าถึง
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"],
  // highlight-end
)
let client = LogtoClient(useConfig: config)
```
