```swift title="ContentView.swift"
let config = try? LogtoConfig(
  endpoint: "<your-logto-endpoint>", // Например, http://localhost:3001
  appId: "<your-app-id>",
  // highlight-next-line
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // Добавьте ресурсы API
)
let client = LogtoClient(useConfig: config)
```
