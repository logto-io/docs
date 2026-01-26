```python title="client.py"
from logto import LogtoClient, LogtoConfig, UserInfoScope

client = LogtoClient(
    LogtoConfig(
        # ...outras configurações
        # highlight-next-line
        scopes=[UserInfoScope.organizations],
    ),
)
```
