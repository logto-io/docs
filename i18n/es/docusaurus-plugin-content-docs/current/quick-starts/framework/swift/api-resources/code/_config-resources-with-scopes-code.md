```swift title="ContentView.swift"
let config = try! LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // highlight-start
  scopes: ["shopping:read", "shopping:write", "store:read", "store:write"], // Alcances requeridos para acceder a los recursos de la API
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Recursos de API a los que se accederá
  // highlight-end
)
let client = LogtoClient(useConfig: config)
```
