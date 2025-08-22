```python title="client.py"
from logto import LogtoClient, LogtoConfig, UserInfoScope

client = LogtoClient(
    LogtoConfig(
        # ...การตั้งค่าอื่น ๆ
        # highlight-next-line
        scopes=[UserInfoScope.organizations],
    ),
)
```
