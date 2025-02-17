Создайте `LogtoViewModel.kt` и инициализируйте `LogtoClient` в этой модели представления:

```kotlin title="LogtoViewModel.kt"
//...с другими импортами
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
                // Получите объект Application из extras
                val application = checkNotNull(extras[APPLICATION_KEY])
                return LogtoViewModel(application) as T
            }
        }
    }
}
```

затем создайте `LogtoViewModel` для вашего `MainActivity.kt`:

```kotlin title="MainActivity.kt"
//...с другими импортами
class MainActivity : AppCompatActivity() {
    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }
    //...другие коды
}
```
