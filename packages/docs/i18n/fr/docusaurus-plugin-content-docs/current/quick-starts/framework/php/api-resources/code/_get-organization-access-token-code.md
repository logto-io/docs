```php title="index.php"
# Remplacez le paramètre par un ID d’organisation valide.
# Les ID d’organisations valides pour l’utilisateur peuvent être trouvés dans la revendication de jeton d’identifiant `organizations`.
$organizationToken = $client->getOrganizationToken(organization_id);
# ou
$claims = $client->getOrganizationTokenClaims(organization_id);
```
