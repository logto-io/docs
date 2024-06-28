```kotlin title="LogtoViewModel.kt"
val logtoConfig = LogtoConfig(
    // ..other configs
    // highlight-start
    scopes = listOf("shopping:read", "shopping:write", "store:read", "store:write"),
    resources = listOf("https://shopping.your-app.com/api", "https://store.your-app.com/api"),
    // highlight-end
)
```
