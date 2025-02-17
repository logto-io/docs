В Logto SDK мы можем использовать `logtoClient.isAuthenticated` для проверки статуса аутентификации. Если пользователь вошел в систему, значение будет `true`, в противном случае значение будет `false`.

Теперь давайте добавим живые данные в `LogtoViewModel.kt` для наблюдения за статусом аутентификации и обновим статус, когда пользователь вошел или вышел из системы:

```kotlin
//...с другими импортами
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...другие коды

    // Добавьте живые данные для наблюдения за статусом аутентификации
    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)
    val authenticated: LiveData<Boolean>
        get() = _authenticated

    fun signIn(context: Activity) {
        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->
            logtoException?.let { println(it) }
            // Обновите живые данные
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }

    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
            // Обновите живые данные
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }
}
```

Затем мы наблюдаем за живыми данными `authenticated` в `MainActivity.kt`. Когда пользователь вошел в систему, мы скрываем кнопку входа и показываем кнопку выхода, и наоборот:

```kotlin
//...с другими импортами
class MainActivity : AppCompatActivity() {
    //...другие коды
    override fun onCreate(savedInstanceState: Bundle?) {
        //...другие коды
        val signInButton = findViewById<Button>(R.id.sign_in_button)
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        // ...обработка нажатий кнопок

        // Наблюдайте за статусом аутентификации
        logtoViewModel.authenticated.observe(this) { authenticated ->
            if (authenticated) {
                // Пользователь аутентифицирован
                signInButton.visibility = View.GONE
                signOutButton.visibility = View.VISIBLE
            } else {
                // Пользователь не аутентифицирован
                signInButton.visibility = View.VISIBLE
                signOutButton.visibility = View.GONE
            }
        }
    }
}
```
