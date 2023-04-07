```kotlin
logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->
    // User signed in successfully if `logtoException` is null.
}
```
