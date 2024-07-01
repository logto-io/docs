```php title="index.php"
# Replace the parameter with a valid organization ID.
# Valid organization IDs for the user can be found in the ID token claim `organizations`.
$organizationToken = $client->getOrganizationToken(organization_id);
# or
$claims = $client->getOrganizationTokenClaims(organization_id);
```
