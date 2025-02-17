```python
client = LogtoClient(
    LogtoConfig(
        # ...other configs
        scopes=["email", "phone"], # Добавьте больше областей действия
    ),
)

# или

client = LogtoClient(
    LogtoConfig(
        # ...other configs
        scopes=[UserInfoScope.email, UserInfoScope.profile], # Тот же результат
    ),
)
```
