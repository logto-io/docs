`LogtoViewModel.kt` を作成し、このビューモデルで `LogtoClient` を初期化します：

```kotlin title="LogtoViewModel.kt"
//...他のインポート
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
                // extras から Application オブジェクトを取得
                val application = checkNotNull(extras[APPLICATION_KEY])
                return LogtoViewModel(application) as T
            }
        }
    }
}
```

次に、`MainActivity.kt` のために `LogtoViewModel` を作成します：

```kotlin title="MainActivity.kt"
//...他のインポート
class MainActivity : AppCompatActivity() {
    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }
    //...他のコード
}
```
