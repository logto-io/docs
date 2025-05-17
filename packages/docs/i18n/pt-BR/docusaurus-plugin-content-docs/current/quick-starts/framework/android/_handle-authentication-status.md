No Logto SDK, podemos usar `logtoClient.isAuthenticated` para verificar o status de autenticação. Se o usuário estiver autenticado, o valor será `true`, caso contrário, o valor será `false`.

Agora, vamos adicionar um live data ao `LogtoViewModel.kt` para observar o status de autenticação e atualizar o status quando o usuário fizer login ou logout:

```kotlin
//...com outros imports
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...outros códigos

    // Adicionar um live data para observar o status de autenticação
    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)
    val authenticated: LiveData<Boolean>
        get() = _authenticated

    fun signIn(context: Activity) {
        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->
            logtoException?.let { println(it) }
            // Atualizar o live data
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }

    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
            // Atualizar o live data
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }
}
```

Em seguida, observamos o live data `authenticated` em `MainActivity.kt`. Quando o usuário estiver autenticado, ocultamos o botão de login e mostramos o botão de logout e vice-versa:

```kotlin
//...com outros imports
class MainActivity : AppCompatActivity() {
    //...outros códigos
    override fun onCreate(savedInstanceState: Bundle?) {
        //...outros códigos
        val signInButton = findViewById<Button>(R.id.sign_in_button)
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        // ...códigos de manipulação de clique de botão

        // Observar o status de autenticação
        logtoViewModel.authenticated.observe(this) { authenticated ->
            if (authenticated) {
                // O usuário está autenticado
                signInButton.visibility = View.GONE
                signOutButton.visibility = View.VISIBLE
            } else {
                // O usuário não está autenticado
                signInButton.visibility = View.VISIBLE
                signOutButton.visibility = View.GONE
            }
        }
    }
}
```
