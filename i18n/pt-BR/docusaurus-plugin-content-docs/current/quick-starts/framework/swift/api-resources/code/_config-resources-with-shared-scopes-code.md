```swift title="ContentView.swift"
let config = try! LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // início do destaque
  scopes: ["read", "write"], // escopos de acesso
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // recursos de API
  // fim do destaque
)
let client = LogtoClient(useConfig: config)
```
