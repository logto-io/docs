En Logto SDK, podemos usar `logtoClient.isAuthenticated` para verificar el estado de autenticación. Si el usuario ha iniciado sesión, el valor será `true`, de lo contrario, el valor será `false`.

Ahora, vamos a añadir un dato en vivo a `LogtoViewModel.kt` para observar el estado de autenticación y actualizar el estado cuando el usuario inicie o cierre sesión:

```kotlin
//...con otras importaciones
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...otros códigos

    // Añadir un dato en vivo para observar el estado de autenticación
    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)
    val authenticated: LiveData<Boolean>
        get() = _authenticated

    fun signIn(context: Activity) {
        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->
            logtoException?.let { println(it) }
            // Actualizar el dato en vivo
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }

    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
            // Actualizar el dato en vivo
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }
}
```

Luego, observamos el dato en vivo `authenticated` en `MainActivity.kt`. Cuando el usuario ha iniciado sesión, ocultamos el botón de inicio de sesión y mostramos el botón de cierre de sesión, y viceversa:

```kotlin
//...con otras importaciones
class MainActivity : AppCompatActivity() {
    //...otros códigos
    override fun onCreate(savedInstanceState: Bundle?) {
        //...otros códigos
        val signInButton = findViewById<Button>(R.id.sign_in_button)
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        // ...manejar códigos de clic de botón

        // Observar el estado de autenticación
        logtoViewModel.authenticated.observe(this) { authenticated ->
            if (authenticated) {
                // El usuario está autenticado
                signInButton.visibility = View.GONE
                signOutButton.visibility = View.VISIBLE
            } else {
                // El usuario no está autenticado
                signInButton.visibility = View.VISIBLE
                signOutButton.visibility = View.GONE
            }
        }
    }
}
```
