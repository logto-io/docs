```kotlin title="LogtoViewModel.kt"
val logtoConfig = LogtoConfig(
    // ...การตั้งค่าอื่น ๆ
    // highlight-start
    scopes = listOf("read", "write"),
    resources = listOf("https://shopping.your-app.com/api", "https://store.your-app.com/api"),
    // highlight-end
)
```
