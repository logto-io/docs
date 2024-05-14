In Logto SDK, we can use `logtoClient.isAuthenticated` to check the authentication status, if the user is signed in, the value will be `true`, otherwise, the value will be `false`.

Now, let's add a live data to `LogtoViewModel.kt` to observe the authentication status, and update the status when the user signed in or signed out:

```kotlin
//...with other imports
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...other codes

    // Add a live data to observe the authentication status
    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)
    val authenticated: LiveData<Boolean>
        get() = _authenticated

    fun signIn(context: Activity) {
        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->
            logtoException?.let { println(it) }
            // Update the live data
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }

    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
            // Update the live data
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }
}
```

Then, we observe the `authenticated` live data in `MainActivity.kt`, when the user is signed in, we hide the sign-in button and show the sign-out button and vice versa:

```kotlin
//...with other imports
class MainActivity : AppCompatActivity() {
    //...other codes
    override fun onCreate(savedInstanceState: Bundle?) {
        //...other codes
        val signInButton = findViewById<Button>(R.id.sign_in_button)
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        // ...handle button click codes

        // Observe the authentication status
        logtoViewModel.authenticated.observe(this) { authenticated ->
            if (authenticated) {
                // The user is authenticated
                signInButton.visibility = View.GONE
                signOutButton.visibility = View.VISIBLE
            } else {
                // The user is not authenticated
                signInButton.visibility = View.VISIBLE
                signOutButton.visibility = View.GONE
            }
        }
    }
}
```
