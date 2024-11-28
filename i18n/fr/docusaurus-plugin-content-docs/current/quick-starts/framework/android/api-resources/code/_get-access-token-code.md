```kotlin title="LogtoViewModel.kt"
logtoClient.getAccessToken("https://shopping.your-app.com/api") { logtoException, jetonD’accès ->
    logtoException?.let { println(it) }
    jetonD’accès?.let { println(it) }
}
```
