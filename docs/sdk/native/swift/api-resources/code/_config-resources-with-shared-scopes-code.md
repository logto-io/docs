```swift
let config = try? LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  scopes: ["read", "write"],
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"],
)
let client = LogtoClient(useConfig: config)
```
