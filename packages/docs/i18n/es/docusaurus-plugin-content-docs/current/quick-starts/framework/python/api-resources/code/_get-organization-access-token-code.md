```python title="flask.py"
# Reemplaza el parámetro con un ID de organización válido.
# Los IDs de organización válidos para el usuario se pueden encontrar en el reclamo del token de ID `organizations`.
organizationToken = await client.getOrganizationToken(organization_id)
# o
organizationTokenClaims = await client.getOrganizationTokenClaims(organization_id)
```
