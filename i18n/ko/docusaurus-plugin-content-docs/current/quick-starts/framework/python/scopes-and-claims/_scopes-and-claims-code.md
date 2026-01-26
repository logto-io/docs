```python
client = LogtoClient(
    LogtoConfig(
        # ...other configs
        scopes=["email", "phone"], # 더 많은 스코프 추가
    ),
)

# 또는

client = LogtoClient(
    LogtoConfig(
        # ...other configs
        scopes=[UserInfoScope.email, UserInfoScope.profile], # 동일한 결과
    ),
)
```
