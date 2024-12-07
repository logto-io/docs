```python title="flask.py"
# パラメーターを有効な組織 ID に置き換えます。
# ユーザーの有効な組織 ID は、ID トークンのクレーム `organizations` にあります。
organizationToken = await client.getOrganizationToken(organization_id)
# または
organizationTokenClaims = await client.getOrganizationTokenClaims(organization_id)
```
