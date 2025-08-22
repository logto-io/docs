```python title="client.py"
client = LogtoClient(
    LogtoConfig(
        # ...การตั้งค่าอื่น ๆ
        # highlight-next-line
        resources=["https://shopping.your-app.com/api", "https://store.your-app.com/api"], # เพิ่มทรัพยากร API
    ),
)
```
