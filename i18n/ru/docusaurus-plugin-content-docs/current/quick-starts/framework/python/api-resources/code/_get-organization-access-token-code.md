```python title="flask.py"
# Замените параметр на действительный ID организации.
# Действительные ID организаций для пользователя можно найти в утверждении ID токена `organizations`.
organizationToken = await client.getOrganizationToken(organization_id)
# или
organizationTokenClaims = await client.getOrganizationTokenClaims(organization_id)
```
