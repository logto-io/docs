Similar to sign-in, we add a `signOut` method to `LogtoViewModel.kt` to call `logtoClient.signOut` API:

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

After you signed out, the Logto SDK will clear all local credentials even though Logto exceptions occurred when calling `logtoClient.signOut` API.

Then, we can add a button to call the `signOut` method in `MainActivity.kt`:

```kotlin
//...with other imports
class MainActivity : AppCompatActivity() {
    //...other codes
    override fun onCreate(savedInstanceState: Bundle?) {
        //...other codes
        //...sign-in button codes

        // Assume you have a button with id `sign_out_button` in your layout
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        signOutButton.setOnClickListener {
            logtoViewModel.signOut()
        }
    }
}
```
