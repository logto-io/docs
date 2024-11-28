Similaire à la connexion, nous ajoutons une méthode `signOut` à `LogtoViewModel.kt` pour appeler l'API `logtoClient.signOut` :

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

Après vous être déconnecté, le SDK Logto effacera toutes les informations d'identification locales même si des exceptions Logto se sont produites lors de l'appel de l'API `logtoClient.signOut`.

Ensuite, nous pouvons ajouter un bouton pour appeler la méthode `signOut` dans `MainActivity.kt` :

```kotlin
//...with other imports
class MainActivity : AppCompatActivity() {
    //...other codes
    override fun onCreate(savedInstanceState: Bundle?) {
        //...other codes
        //...sign-in button codes

        // Supposons que vous ayez un bouton avec l'identifiant `sign_out_button` dans votre mise en page
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        signOutButton.setOnClickListener {
            logtoViewModel.signOut()
        }
    }
}
```
