```python
# Replace the parameter with a valid organization ID.
# Valid organization IDs for the user can be found in the ID token claim `organizations`.
organizationToken = await client.getOrganizationToken("organization-id")
# or
claims = await client.getOrganizationTokenClaims("organization-id")
```
