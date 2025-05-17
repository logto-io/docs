`LogtoViewModel.kt` 파일을 생성하고 이 뷰 모델에서 `LogtoClient`를 초기화하세요:

```kotlin title="LogtoViewModel.kt"
//...다른 import와 함께
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
                // extras에서 Application 객체를 가져옵니다
                val application = checkNotNull(extras[APPLICATION_KEY])
                return LogtoViewModel(application) as T
            }
        }
    }
}
```

그런 다음, `MainActivity.kt`에 대한 `LogtoViewModel`을 생성하세요:

```kotlin title="MainActivity.kt"
//...다른 import와 함께
class MainActivity : AppCompatActivity() {
    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }
    //...다른 코드
}
```
