在 Logto SDK 中，我們可以使用 `logtoClient.isAuthenticated` 來檢查驗證 (Authentication) 狀態，如果使用者已登入，該值將為 `true`，否則該值將為 `false`。

現在，讓我們在 `LogtoViewModel.kt` 中新增一個 live data 來觀察驗證 (Authentication) 狀態，並在使用者登入或登出時更新狀態：

```kotlin
//...其他匯入
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...其他程式碼

    // 新增一個 live data 來觀察驗證 (Authentication) 狀態
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

接著，我們在 `MainActivity.kt` 中觀察 `authenticated` live data，當使用者已登入時，我們隱藏登入按鈕並顯示登出按鈕，反之亦然：

```kotlin
//...其他匯入
class MainActivity : AppCompatActivity() {
    //...其他程式碼
    override fun onCreate(savedInstanceState: Bundle?) {
        //...其他程式碼
        val signInButton = findViewById<Button>(R.id.sign_in_button)
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        // ...處理按鈕點擊程式碼

        // 觀察驗證 (Authentication) 狀態
        logtoViewModel.authenticated.observe(this) { authenticated ->
            if (authenticated) {
                // 使用者已驗證 (Authenticated)
                signInButton.visibility = View.GONE
                signOutButton.visibility = View.VISIBLE
            } else {
                // 使用者未驗證 (Authenticated)
                signInButton.visibility = View.VISIBLE
                signOutButton.visibility = View.GONE
            }
        }
    }
}
```
