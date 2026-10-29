```swift title="ContentView.swift"
let config = try! LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // highlight-start
  scopes: ["shopping:read", "shopping:write", "store:read", "store:write"], // Portées d'accès pour les autorisations
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Ressources API ciblées
  // highlight-end
)
let client = LogtoClient(useConfig: config)
```
