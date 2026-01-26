Im Logto SDK können wir `logtoClient.isAuthenticated` verwenden, um den Authentifizierungsstatus zu überprüfen. Wenn der Benutzer angemeldet ist, wird der Wert `true` sein, andernfalls wird der Wert `false` sein.

Nun fügen wir `LogtoViewModel.kt` eine Live-Daten hinzu, um den Authentifizierungsstatus zu beobachten und den Status zu aktualisieren, wenn der Benutzer sich anmeldet oder abmeldet:

```kotlin
//...mit anderen Imports
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...andere Codes

    // Füge eine Live-Daten hinzu, um den Authentifizierungsstatus zu beobachten
    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)
    val authenticated: LiveData<Boolean>
        get() = _authenticated

    fun signIn(context: Activity) {
        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->
            logtoException?.let { println(it) }
            // Aktualisiere die Live-Daten
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }

    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
            // Aktualisiere die Live-Daten
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }
}
```

Dann beobachten wir die `authenticated` Live-Daten in `MainActivity.kt`. Wenn der Benutzer angemeldet ist, blenden wir die Anmeldeschaltfläche aus und zeigen die Abmeldeschaltfläche an und umgekehrt:

```kotlin
//...mit anderen Imports
class MainActivity : AppCompatActivity() {
    //...andere Codes
    override fun onCreate(savedInstanceState: Bundle?) {
        //...andere Codes
        val signInButton = findViewById<Button>(R.id.sign_in_button)
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        // ...behandle Button-Klick-Codes

        // Beobachte den Authentifizierungsstatus
        logtoViewModel.authenticated.observe(this) { authenticated ->
            if (authenticated) {
                // Der Benutzer ist authentifiziert
                signInButton.visibility = View.GONE
                signOutButton.visibility = View.VISIBLE
            } else {
                // Der Benutzer ist nicht authentifiziert
                signInButton.visibility = View.VISIBLE
                signOutButton.visibility = View.GONE
            }
        }
    }
}
```
