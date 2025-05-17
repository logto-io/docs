```python title="flask.py"
# Ersetze den Parameter durch eine gültige Organisations-ID.
# Gültige Organisations-IDs für den Benutzer können im ID-Token-Anspruch `organizations` gefunden werden.
organizationToken = await client.getOrganizationToken(organization_id)
# oder
organizationTokenClaims = await client.getOrganizationTokenClaims(organization_id)
```
