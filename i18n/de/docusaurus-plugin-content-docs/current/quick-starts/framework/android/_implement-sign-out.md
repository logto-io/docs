Ähnlich wie bei der Anmeldung fügen wir eine `signOut`-Methode zu `LogtoViewModel.kt` hinzu, um die `logtoClient.signOut` API aufzurufen:

```kotlin
//...mit anderen Imports
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...andere Codes
    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
        }
    }
}
```

Nachdem du dich abgemeldet hast, wird das Logto SDK alle lokalen Anmeldeinformationen löschen, auch wenn Logto-Ausnahmen aufgetreten sind, als die `logtoClient.signOut` API aufgerufen wurde.

Dann können wir einen Button hinzufügen, um die `signOut`-Methode in `MainActivity.kt` aufzurufen:

```kotlin
//...mit anderen Imports
class MainActivity : AppCompatActivity() {
    //...andere Codes
    override fun onCreate(savedInstanceState: Bundle?) {
        //...andere Codes
        //...Anmeldebutton-Codes

        // Angenommen, du hast einen Button mit der ID `sign_out_button` in deinem Layout
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        signOutButton.setOnClickListener {
            logtoViewModel.signOut()
        }
    }
}
```
