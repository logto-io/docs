```python
client = LogtoClient(
    LogtoConfig(
        # ...other configs
        scopes=["email", "phone"], # Añadir más alcances
    ),
)

# o

client = LogtoClient(
    LogtoConfig(
        # ...other configs
        scopes=[UserInfoScope.email, UserInfoScope.profile], # Mismo resultado
    ),
)
```
