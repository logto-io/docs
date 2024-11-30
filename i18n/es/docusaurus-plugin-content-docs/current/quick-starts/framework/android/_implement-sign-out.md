Similar al inicio de sesión, añadimos un método `signOut` a `LogtoViewModel.kt` para llamar a la API `logtoClient.signOut`:

```kotlin
//...con otros imports
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...otros códigos
    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
        }
    }
}
```

Después de cerrar sesión, el SDK de Logto borrará todas las credenciales locales incluso si ocurren excepciones de Logto al llamar a la API `logtoClient.signOut`.

Luego, podemos añadir un botón para llamar al método `signOut` en `MainActivity.kt`:

```kotlin
//...con otros imports
class MainActivity : AppCompatActivity() {
    //...otros códigos
    override fun onCreate(savedInstanceState: Bundle?) {
        //...otros códigos
        //...códigos del botón de inicio de sesión

        // Supongamos que tienes un botón con id `sign_out_button` en tu diseño
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        signOutButton.setOnClickListener {
            logtoViewModel.signOut()
        }
    }
}
```
