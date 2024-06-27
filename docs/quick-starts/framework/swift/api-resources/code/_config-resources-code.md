```swift title="SwiftUI Demo/ContentView.swift"
let config = try? LogtoConfig(
  endpoint: "<your-logto-endpoint>", // E.g. http://localhost:3001
  appId: "<your-app-id>",
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Add API resources
)
let client = LogtoClient(useConfig: config)
```
