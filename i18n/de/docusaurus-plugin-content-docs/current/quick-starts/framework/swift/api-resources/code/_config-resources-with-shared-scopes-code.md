```swift title="ContentView.swift"
let config = try! LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // highlight-start
  scopes: ["read", "write"], // Berechtigungen
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // API-Ressourcen
  // highlight-end
)
let client = LogtoClient(useConfig: config)
```
