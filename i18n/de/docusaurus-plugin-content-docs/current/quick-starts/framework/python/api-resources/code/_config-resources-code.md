```python title="client.py"
client = LogtoClient(
    LogtoConfig(
        # ...other configs
        # highlight-next-line
        resources=["https://shopping.your-app.com/api", "https://store.your-app.com/api"], # API-Ressourcen hinzufügen
    ),
)
```
