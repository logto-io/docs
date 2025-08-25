```python title="client.py"
client = LogtoClient(
    LogtoConfig(
        # ...other configs
        # highlight-start
        scopes=["shopping:read", "shopping:write", "store:read", "store:write"],  # ขอบเขต (scopes) ที่ร้องขอ
        resources=["https://shopping.your-app.com/api", "https://store.your-app.com/api"],  # ทรัพยากร (resources) ที่ร้องขอ
        # highlight-end
    ),
)
```
