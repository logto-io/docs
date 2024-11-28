在 Logto SDK 中，我们可以使用 `logtoClient.isAuthenticated` 来检查认证 (authentication) 状态，如果用户已登录，值将为 `true`，否则，值将为 `false`。

现在，让我们在 `LogtoViewModel.kt` 中添加一个 live data 来观察认证 (authentication) 状态，并在用户登录或注销时更新状态：

```kotlin
//...with other imports
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...other codes

    // 添加一个 live data 来观察认证 (authentication) 状态
    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)
    val authenticated: LiveData<Boolean>
        get() = _authenticated

    fun signIn(context: Activity) {
        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->
            logtoException?.let { println(it) }
            // 更新 live data
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }

    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
            // 更新 live data
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }
}
```

然后，我们在 `MainActivity.kt` 中观察 `authenticated` live data，当用户登录时，我们隐藏登录按钮并显示注销按钮，反之亦然：

```kotlin
//...with other imports
class MainActivity : AppCompatActivity() {
    //...other codes
    override fun onCreate(savedInstanceState: Bundle?) {
        //...other codes
        val signInButton = findViewById<Button>(R.id.sign_in_button)
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        // ...handle button click codes

        // 观察认证 (authentication) 状态
        logtoViewModel.authenticated.observe(this) { authenticated ->
            if (authenticated) {
                // 用户已认证 (authenticated)
                signInButton.visibility = View.GONE
                signOutButton.visibility = View.VISIBLE
            } else {
                // 用户未认证 (authenticated)
                signInButton.visibility = View.VISIBLE
                signOutButton.visibility = View.GONE
            }
        }
    }
}
```
