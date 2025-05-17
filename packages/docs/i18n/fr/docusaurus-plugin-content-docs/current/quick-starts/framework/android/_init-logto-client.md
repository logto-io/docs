Créez un `LogtoViewModel.kt` et initialisez `LogtoClient` dans ce modèle de vue :

```kotlin title="LogtoViewModel.kt"
//...avec d'autres imports
import io.logto.sdk.android.LogtoClient
import io.logto.sdk.android.type.LogtoConfig

class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    private val logtoConfig = LogtoConfig(
          endpoint = "<votre-point-de-terminaison-logto>",
          appId = "<votre-id-app>",
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
                // Obtenez l'objet Application à partir des extras
                val application = checkNotNull(extras[APPLICATION_KEY])
                return LogtoViewModel(application) as T
            }
        }
    }
}
```

ensuite, créez un `LogtoViewModel` pour votre `MainActivity.kt` :

```kotlin title="MainActivity.kt"
//...avec d'autres imports
class MainActivity : AppCompatActivity() {
    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }
    //...autres codes
}
```
