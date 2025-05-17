```python title="flask.py"
# 将参数替换为有效的组织 (Organization) ID。
# 用户的有效组织 (Organization) ID 可以在 ID 令牌 (ID token) 声明 (claim) `organizations` 中找到。
organizationToken = await client.getOrganizationToken(organization_id)
# 或者
organizationTokenClaims = await client.getOrganizationTokenClaims(organization_id)
```
