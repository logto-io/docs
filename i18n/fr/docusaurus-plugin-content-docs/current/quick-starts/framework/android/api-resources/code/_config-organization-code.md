```kotlin title="LogtoViewModel.kt"
val logtoConfig = LogtoConfig(
    // ...other configs
    // highlight-start
    scopes = listOf(UserScope.Organisations),
    // highlight-end
)
```
