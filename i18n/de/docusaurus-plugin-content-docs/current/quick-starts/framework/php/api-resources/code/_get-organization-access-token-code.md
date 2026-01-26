```php title="index.php"
# Ersetze den Parameter durch eine gültige Organisations-ID.
# Gültige Organisations-IDs für den Benutzer können im ID-Token-Anspruch `organizations` gefunden werden.
$organizationToken = $client->getOrganizationToken(organization_id);
# oder
$claims = $client->getOrganizationTokenClaims(organization_id);
```
