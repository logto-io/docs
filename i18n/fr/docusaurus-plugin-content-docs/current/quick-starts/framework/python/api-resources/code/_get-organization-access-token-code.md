```python title="flask.py"
# Remplacez le paramètre par un ID d’organisation valide.
# Les ID d’organisations valides pour l’utilisateur peuvent être trouvés dans la revendication de jeton d’identifiant `organizations`.
organizationToken = await client.getOrganizationToken(organization_id)
# ou
organizationTokenClaims = await client.getOrganizationTokenClaims(organization_id)
```
