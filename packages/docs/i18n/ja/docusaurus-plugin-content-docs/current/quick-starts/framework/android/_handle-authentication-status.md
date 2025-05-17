Logto SDK では、`logtoClient.isAuthenticated` を使用して認証 (Authentication) ステータスを確認できます。ユーザーがサインインしている場合、この値は `true` になり、そうでない場合は `false` になります。

次に、`LogtoViewModel.kt` にライブデータを追加して認証 (Authentication) ステータスを監視し、ユーザーがサインインまたはサインアウトしたときにステータスを更新します：

```kotlin
//...他のインポート
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...他のコード

    // 認証 (Authentication) ステータスを監視するライブデータを追加
    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)
    val authenticated: LiveData<Boolean>
        get() = _authenticated

    fun signIn(context: Activity) {
        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->
            logtoException?.let { println(it) }
            // ライブデータを更新
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }

    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
            // ライブデータを更新
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }
}
```

次に、`MainActivity.kt` で `authenticated` ライブデータを監視し、ユーザーがサインインしている場合はサインインボタンを非表示にし、サインアウトボタンを表示し、逆の場合も同様にします：

```kotlin
//...他のインポート
class MainActivity : AppCompatActivity() {
    //...他のコード
    override fun onCreate(savedInstanceState: Bundle?) {
        //...他のコード
        val signInButton = findViewById<Button>(R.id.sign_in_button)
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        // ...ボタンクリック処理コード

        // 認証 (Authentication) ステータスを監視
        logtoViewModel.authenticated.observe(this) { authenticated ->
            if (authenticated) {
                // ユーザーは認証 (Authentication) されています
                signInButton.visibility = View.GONE
                signOutButton.visibility = View.VISIBLE
            } else {
                // ユーザーは認証 (Authentication) されていません
                signInButton.visibility = View.VISIBLE
                signOutButton.visibility = View.GONE
            }
        }
    }
}
```
