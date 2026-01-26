Dans le SDK Logto, nous pouvons utiliser `logtoClient.isAuthenticated` pour vérifier le statut d'authentification (Authentication). Si l'utilisateur est connecté, la valeur sera `true`, sinon, la valeur sera `false`.

Maintenant, ajoutons une donnée en direct à `LogtoViewModel.kt` pour observer le statut d'authentification (Authentication), et mettons à jour le statut lorsque l'utilisateur se connecte ou se déconnecte :

```kotlin
//...avec d'autres imports
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...autres codes

    // Ajouter une donnée en direct pour observer le statut d'authentification (Authentication)
    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)
    val authenticated: LiveData<Boolean>
        get() = _authenticated

    fun signIn(context: Activity) {
        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->
            logtoException?.let { println(it) }
            // Mettre à jour la donnée en direct
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }

    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
            // Mettre à jour la donnée en direct
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }
}
```

Ensuite, nous observons la donnée en direct `authenticated` dans `MainActivity.kt`. Lorsque l'utilisateur est connecté, nous cachons le bouton de connexion et affichons le bouton de déconnexion, et vice versa :

```kotlin
//...avec d'autres imports
class MainActivity : AppCompatActivity() {
    //...autres codes
    override fun onCreate(savedInstanceState: Bundle?) {
        //...autres codes
        val signInButton = findViewById<Button>(R.id.sign_in_button)
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        // ...gérer les codes de clic de bouton

        // Observer le statut d'authentification (Authentication)
        logtoViewModel.authenticated.observe(this) { authenticated ->
            if (authenticated) {
                // L'utilisateur est authentifié
                signInButton.visibility = View.GONE
                signOutButton.visibility = View.VISIBLE
            } else {
                // L'utilisateur n'est pas authentifié
                signInButton.visibility = View.VISIBLE
                signOutButton.visibility = View.GONE
            }
        }
    }
}
```
