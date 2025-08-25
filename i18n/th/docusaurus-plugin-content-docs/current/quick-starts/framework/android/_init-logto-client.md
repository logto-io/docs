สร้างไฟล์ `LogtoViewModel.kt` และเริ่มต้น `LogtoClient` ใน view model นี้:

```kotlin title="LogtoViewModel.kt"
//...with other imports
import io.logto.sdk.android.LogtoClient
import io.logto.sdk.android.type.LogtoConfig

class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // กำหนดค่า LogtoConfig
    private val logtoConfig = LogtoConfig(
          endpoint = "<your-logto-endpoint>",
          appId = "<your-app-id>",
          scopes = null,
          resources = null,
          usingPersistStorage = true,
    )

    // เริ่มต้น LogtoClient ด้วย config และ application
    private val logtoClient = LogtoClient(logtoConfig, application)

    companion object {
        val Factory: ViewModelProvider.Factory = object : ViewModelProvider.Factory {
            @Suppress("UNCHECKED_CAST")
            override fun <T : ViewModel> create(
                modelClass: Class<T>,
                extras: CreationExtras
            ): T {
                // ดึง Application object จาก extras
                val application = checkNotNull(extras[APPLICATION_KEY])
                return LogtoViewModel(application) as T
            }
        }
    }
}
```

จากนั้น สร้าง `LogtoViewModel` สำหรับ `MainActivity.kt` ของคุณ:

```kotlin title="MainActivity.kt"
//...with other imports
class MainActivity : AppCompatActivity() {
    // สร้าง logtoViewModel โดยใช้ Factory
    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }
    //...โค้ดอื่น ๆ
}
```
