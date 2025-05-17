```kotlin title="LogtoViewModel.kt"
logtoClient.getAccessToken("https://shopping.your-app.com/api") { logtoException, 访问令牌 (Access token) ->
    logtoException?.let { println(it) }
    访问令牌 (Access token)?.let { println(it) }
}
```
