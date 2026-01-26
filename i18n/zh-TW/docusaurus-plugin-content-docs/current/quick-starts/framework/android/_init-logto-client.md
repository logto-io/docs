建立一個 `LogtoViewModel.kt` 並在此 ViewModel 中初始化 `LogtoClient`：

```kotlin title="LogtoViewModel.kt"
//...with other imports
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
                // 從 extras 中獲取 Application 物件
                val application = checkNotNull(extras[APPLICATION_KEY])
                return LogtoViewModel(application) as T
            }
        }
    }
}
```

接著，為你的 `MainActivity.kt` 建立一個 `LogtoViewModel`：

```kotlin title="MainActivity.kt"
//...with other imports
class MainActivity : AppCompatActivity() {
    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }
    //...其他程式碼
}
```
