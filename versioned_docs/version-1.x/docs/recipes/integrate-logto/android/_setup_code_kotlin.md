```kotlin
import io.logto.sdk.android.LogtoClient
import io.logto.sdk.android.type.LogtoConfig
import io.logto.sdk.core.constant.PromptValue

class MainActivity : AppCompatActivity() {

    private lateinit var logtoClient: LogtoClient

    override fun onCreate(savedInstanceState: Bundle?) {
        // ...
        val logtoConfig = LogtoConfig(
            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001
            appId = "<your-app-id>",
            scopes = null,
            resources = null,
            usingPersistStorage = true,
            prompt = PromptValue.CONSENT,
        )

        logtoClient = LogtoClient(logtoConfig, application)
    }
}
```
