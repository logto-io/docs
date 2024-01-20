```kotlin
logtoClient.getAccessToken("https://shopping.your-app.com/api") { logtoException, accessToken ->
    logtoException?.let { println(it) }
    accessToken?.let { println(it) }
}
```
