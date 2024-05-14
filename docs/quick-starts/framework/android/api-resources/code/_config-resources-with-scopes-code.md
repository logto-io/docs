```kotlin
val logtoConfig = LogtoConfig(
    // ..other configs
    scopes = listOf("shopping:read", "shopping:write", "store:read", "store:write"),
    resources = listOf("https://shopping.your-app.com/api", "https://store.your-app.com/api"),
)
```
