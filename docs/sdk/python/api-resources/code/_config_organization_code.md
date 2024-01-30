```python
from logto import LogtoClient, LogtoConfig, UserInfoScope

client = LogtoClient(
    LogtoConfig(
        # ...other configs
        scopes=[UserInfoScope.organizations],
    ),
)
```
