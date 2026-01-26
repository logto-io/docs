```python
client = LogtoClient(
    LogtoConfig(
        # ...other configs
        scopes=["email", "phone"], # Weitere Berechtigungen hinzufügen
    ),
)

# oder

client = LogtoClient(
    LogtoConfig(
        # ...other configs
        scopes=[UserInfoScope.email, UserInfoScope.profile], # Gleiches Ergebnis
    ),
)
```
