```python title="client.py"
client = LogtoClient(
    LogtoConfig(
        # ...other configs
        resources=["https://shopping.your-app.com/api", "https://store.your-app.com/api"], # Add API resources
    ),
)
```
