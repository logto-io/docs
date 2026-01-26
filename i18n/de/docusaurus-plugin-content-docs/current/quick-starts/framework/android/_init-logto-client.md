Erstelle eine `LogtoViewModel.kt` und initialisiere `LogtoClient` in diesem ViewModel:

```kotlin title="LogtoViewModel.kt"
//...mit anderen Imports
import io.logto.sdk.android.LogtoClient
import io.logto.sdk.android.type.LogtoConfig

class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    private val logtoConfig = LogtoConfig(
          endpoint = "<your-logto-endpoint>",
          appId = "<your-app-id>",
          scopes = null,
          resources = null,
          usingPersistStorage = true,
    )

    private val logtoClient = LogtoClient(logtoConfig, application)

    companion object {
        val Factory: ViewModelProvider.Factory = object : ViewModelProvider.Factory {
            @Suppress("UNCHECKED_CAST")
            override fun <T : ViewModel> create(
                modelClass: Class<T>,
                extras: CreationExtras
            ): T {
                // Hole das Application-Objekt aus extras
                val application = checkNotNull(extras[APPLICATION_KEY])
                return LogtoViewModel(application) as T
            }
        }
    }
}
```

erstelle dann ein `LogtoViewModel` für deine `MainActivity.kt`:

```kotlin title="MainActivity.kt"
//...mit anderen Imports
class MainActivity : AppCompatActivity() {
    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }
    //...andere Codes
}
```
