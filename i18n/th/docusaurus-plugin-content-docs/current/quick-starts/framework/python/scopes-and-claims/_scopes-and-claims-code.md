```python
client = LogtoClient(
    LogtoConfig(
        # ...การตั้งค่าอื่น ๆ
        scopes=["email", "phone"], # เพิ่มขอบเขต (scopes) เพิ่มเติม
    ),
)

# หรือ

client = LogtoClient(
    LogtoConfig(
        # ...การตั้งค่าอื่น ๆ
        scopes=[UserInfoScope.email, UserInfoScope.profile], # ได้ผลลัพธ์เดียวกัน
    ),
)
```
