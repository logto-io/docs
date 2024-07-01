```python title="client.py"
from logto import LogtoClient, LogtoConfig, UserInfoScope

client = LogtoClient(
    LogtoConfig(
        # ...other configs
        # highlight-next-line
        scopes=[UserInfoScope.organizations],
    ),
)
```
