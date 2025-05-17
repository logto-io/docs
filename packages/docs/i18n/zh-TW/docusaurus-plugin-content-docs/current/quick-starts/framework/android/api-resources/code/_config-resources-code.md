```kotlin title="LogtoViewModel.kt"
val logtoConfig = LogtoConfig(
    //...other configs
    // highlight-start
    resources = listOf("https://shopping.your-app.com/api", "https://store.your-app.com/api"), // 新增 API 資源 (API resources)
    // highlight-end
)
```
