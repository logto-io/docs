```php title="index.php"
# Reemplaza el parámetro con un ID de organización válido.
# Los IDs de organización válidos para el usuario se pueden encontrar en el reclamo del token de ID `organizations`.
$organizationToken = $client->getOrganizationToken(organization_id);
# o
$claims = $client->getOrganizationTokenClaims(organization_id);
```
