与登录类似，我们在 `LogtoViewModel.kt` 中添加一个 `signOut` 方法来调用 `logtoClient.signOut` API：

```kotlin
//...with other imports
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...other codes
    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
        }
    }
}
```

在你登出后，即使在调用 `logtoClient.signOut` API 时发生了 Logto 异常，Logto SDK 也会清除所有本地凭据。

然后，我们可以在 `MainActivity.kt` 中添加一个按钮来调用 `signOut` 方法：

```kotlin
//...with other imports
class MainActivity : AppCompatActivity() {
    //...other codes
    override fun onCreate(savedInstanceState: Bundle?) {
        //...other codes
        //...sign-in button codes

        // 假设你的布局中有一个 id 为 `sign_out_button` 的按钮
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        signOutButton.setOnClickListener {
            logtoViewModel.signOut()
        }
    }
}
```
