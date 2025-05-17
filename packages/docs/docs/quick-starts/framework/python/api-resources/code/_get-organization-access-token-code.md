```python title="flask.py"
# Replace the parameter with a valid organization ID.
# Valid organization IDs for the user can be found in the ID token claim `organizations`.
organizationToken = await client.getOrganizationToken(organization_id)
# or
organizationTokenClaims = await client.getOrganizationTokenClaims(organization_id)
```
