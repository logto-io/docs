```php title="index.php"
# Substitua o parâmetro por um ID de organização válido.
# IDs de organização válidos para o usuário podem ser encontrados na reivindicação do token de ID `organizations`.
$organizationToken = $client->getOrganizationToken(organization_id);
# ou
$claims = $client->getOrganizationTokenClaims(organization_id);
```
