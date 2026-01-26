```python title="flask.py"
# Substitua o parâmetro por um ID de organização válido.
# IDs de organização válidos para o usuário podem ser encontrados na reivindicação do Token de ID `organizations`.
organizationToken = await client.getOrganizationToken(organization_id)
# ou
organizationTokenClaims = await client.getOrganizationTokenClaims(organization_id)
```
