Logto SDK에서 `logtoClient.isAuthenticated`를 사용하여 인증 상태를 확인할 수 있습니다. 사용자가 로그인되어 있으면 값은 `true`가 되고, 그렇지 않으면 값은 `false`가 됩니다.

이제 `LogtoViewModel.kt`에 라이브 데이터를 추가하여 인증 상태를 관찰하고, 사용자가 로그인하거나 로그아웃할 때 상태를 업데이트해 보겠습니다:

```kotlin
//...다른 import와 함께
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...다른 코드

    // 인증 상태를 관찰하기 위한 라이브 데이터 추가
    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)
    val authenticated: LiveData<Boolean>
        get() = _authenticated

    fun signIn(context: Activity) {
        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->
            logtoException?.let { println(it) }
            // 라이브 데이터 업데이트
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }

    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
            // 라이브 데이터 업데이트
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }
}
```

그런 다음, `MainActivity.kt`에서 `authenticated` 라이브 데이터를 관찰하여 사용자가 로그인하면 로그인 버튼을 숨기고 로그아웃 버튼을 표시하며, 그 반대의 경우도 처리합니다:

```kotlin
//...다른 import와 함께
class MainActivity : AppCompatActivity() {
    //...다른 코드
    override fun onCreate(savedInstanceState: Bundle?) {
        //...다른 코드
        val signInButton = findViewById<Button>(R.id.sign_in_button)
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        // ...버튼 클릭 처리 코드

        // 인증 상태 관찰
        logtoViewModel.authenticated.observe(this) { authenticated ->
            if (authenticated) {
                // 사용자가 인증되었습니다
                signInButton.visibility = View.GONE
                signOutButton.visibility = View.VISIBLE
            } else {
                // 사용자가 인증되지 않았습니다
                signInButton.visibility = View.VISIBLE
                signOutButton.visibility = View.GONE
            }
        }
    }
}
```
