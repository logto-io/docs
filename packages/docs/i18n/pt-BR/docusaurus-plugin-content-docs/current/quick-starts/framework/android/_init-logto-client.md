Crie um `LogtoViewModel.kt` e inicie o `LogtoClient` neste view model:

```kotlin title="LogtoViewModel.kt"
//...com outros imports
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
                // Obtenha o objeto Application dos extras
                val application = checkNotNull(extras[APPLICATION_KEY])
                return LogtoViewModel(application) as T
            }
        }
    }
}
```

em seguida, crie um `LogtoViewModel` para o seu `MainActivity.kt`:

```kotlin title="MainActivity.kt"
//...com outros imports
class MainActivity : AppCompatActivity() {
    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }
    //...outros códigos
}
```
