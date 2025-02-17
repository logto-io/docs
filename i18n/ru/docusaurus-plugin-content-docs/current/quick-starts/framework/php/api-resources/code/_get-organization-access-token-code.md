```php title="index.php"
# Замените параметр на действительный ID организации.
# Действительные ID организаций для пользователя можно найти в утверждении ID токена `organizations`.
$organizationToken = $client->getOrganizationToken(organization_id);
# или
$claims = $client->getOrganizationTokenClaims(organization_id);
```
