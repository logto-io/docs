```swift title="ContentView.swift"
let config = try! LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // destaque-início
  scopes: ["shopping:read", "shopping:write", "store:read", "store:write"], // escopos de permissão
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // recursos de API
  // destaque-fim
)
let client = LogtoClient(useConfig: config)
```
