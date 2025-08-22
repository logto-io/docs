```python title="client.py"
client = LogtoClient(
    LogtoConfig(
        # ...การตั้งค่าอื่น ๆ
        # highlight-start
        scopes=["read", "write"],  # ขอบเขต (scopes) ที่ร้องขอ
        resources=["https://shopping.your-app.com/api", "https://store.your-app.com/api"],  # ทรัพยากร API ที่ร้องขอ
        # highlight-end
    ),
)
```
