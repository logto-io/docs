```python title="flask.py"
# 將參數替換為有效的組織 (Organization) ID。
# 使用者的有效組織 (Organization) ID 可以在 ID 權杖 (ID token) 宣告 (claim) `organizations` 中找到。
organizationToken = await client.getOrganizationToken(organization_id)
# 或
organizationTokenClaims = await client.getOrganizationTokenClaims(organization_id)
```
