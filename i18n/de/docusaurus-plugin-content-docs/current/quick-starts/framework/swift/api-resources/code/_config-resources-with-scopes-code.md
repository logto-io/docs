```swift title="ContentView.swift"
let config = try! LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // highlight-start
  scopes: ["shopping:read", "shopping:write", "store:read", "store:write"], // Berechtigungen für den Zugriff auf Shopping- und Store-APIs
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // API-Ressourcen-URIs
  // highlight-end
)
let client = LogtoClient(useConfig: config)
```
