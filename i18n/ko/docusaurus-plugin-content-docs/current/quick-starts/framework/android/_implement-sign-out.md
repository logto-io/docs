로그인과 유사하게, `LogtoViewModel.kt`에 `signOut` 메서드를 추가하여 `logtoClient.signOut` API를 호출합니다:

```kotlin
//...다른 import와 함께
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...다른 코드
    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
        }
    }
}
```

로그아웃한 후, Logto SDK는 `logtoClient.signOut` API를 호출할 때 Logto 예외가 발생하더라도 모든 로컬 자격 증명을 지웁니다.

그런 다음, `MainActivity.kt`에서 `signOut` 메서드를 호출하는 버튼을 추가할 수 있습니다:

```kotlin
//...다른 import와 함께
class MainActivity : AppCompatActivity() {
    //...다른 코드
    override fun onCreate(savedInstanceState: Bundle?) {
        //...다른 코드
        //...로그인 버튼 코드

        // 레이아웃에 `sign_out_button`이라는 id를 가진 버튼이 있다고 가정합니다
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        signOutButton.setOnClickListener {
            logtoViewModel.signOut()
        }
    }
}
```
