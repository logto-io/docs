```java
import io.logto.sdk.android.LogtoClient;
import io.logto.sdk.android.type.LogtoConfig;
import io.logto.sdk.core.constant.PromptValue;

public class MainActivity extends AppCompatActivity {

    private LogtoClient logtoClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // ...
        LogtoConfig logtoConfig = new LogtoConfig(
            "<your-logto-endpoint>",  // E.g. http://localhost:3001
            "<your-app-id>",
            null,
            null,
            true,
            PromptValue.CONSENT
        );

        logtoClient = new LogtoClient(logtoConfig, getApplication());
    }
}
```
