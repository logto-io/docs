```kotlin title="LogtoViewModel.kt"
val logtoConfig = LogtoConfig(
    // ...other configs
    // highlight-start
    scopes = listOf("read", "write"),
    resources = listOf("https://shopping.your-app.com/api", "https://store.your-app.com/api"),
    // highlight-end
)
```
