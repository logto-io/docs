サインインと同様に、`LogtoViewModel.kt` に `signOut` メソッドを追加して `logtoClient.signOut` API を呼び出します：

```kotlin
//...他のインポート
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...他のコード
    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
        }
    }
}
```

サインアウトした後、Logto SDK は `logtoClient.signOut` API を呼び出す際に Logto 例外が発生した場合でも、すべてのローカル資格情報をクリアします。

次に、`MainActivity.kt` に `signOut` メソッドを呼び出すボタンを追加できます：

```kotlin
//...他のインポート
class MainActivity : AppCompatActivity() {
    //...他のコード
    override fun onCreate(savedInstanceState: Bundle?) {
        //...他のコード
        //...サインインボタンのコード

        // レイアウトに id `sign_out_button` を持つボタンがあると仮定します
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        signOutButton.setOnClickListener {
            logtoViewModel.signOut()
        }
    }
}
```
