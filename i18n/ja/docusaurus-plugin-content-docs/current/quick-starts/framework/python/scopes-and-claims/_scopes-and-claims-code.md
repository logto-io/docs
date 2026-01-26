```python
client = LogtoClient(
    LogtoConfig(
        # ...other configs
        scopes=["email", "phone"], # スコープを追加
    ),
)

# または

client = LogtoClient(
    LogtoConfig(
        # ...other configs
        scopes=[UserInfoScope.email, UserInfoScope.profile], # 同じ結果
    ),
)
```
