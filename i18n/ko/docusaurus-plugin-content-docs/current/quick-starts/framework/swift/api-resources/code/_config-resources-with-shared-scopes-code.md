```swift title="ContentView.swift"
let config = try! LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-app-id>",
  // highlight-start
  scopes: ["read", "write"], // 요청할 스코프 (Scopes)를 지정합니다.
  resources: ["https://shopping.your-app.com/api", "https://store.your-app.com/api"], // 접근할 API 리소스 (API resources)를 지정합니다.
  // highlight-end
)
let client = LogtoClient(useConfig: config)
```
