```python title="client.py"
client = LogtoClient(
    LogtoConfig(
        # ...other configs
        # highlight-start
        scopes=["read", "write"],
        resources=["https://shopping.your-app.com/api", "https://store.your-app.com/api"],
        # highlight-end
    ),
)
```
