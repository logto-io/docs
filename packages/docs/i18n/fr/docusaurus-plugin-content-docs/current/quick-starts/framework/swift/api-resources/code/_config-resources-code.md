```swift title="ContentView.swift"
let config = try? LogtoConfig(
  endpoint: "<your-logto-endpoint>", // E.g. http://localhost:3001
  appId: "<your-app-id>",
  // highlight-next-line
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Ajouter des ressources API
)
let client = LogtoClient(useConfig: config)
```
