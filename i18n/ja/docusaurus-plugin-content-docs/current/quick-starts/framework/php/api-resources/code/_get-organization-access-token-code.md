```php title="index.php"
# パラメーターを有効な組織 ID に置き換えてください。
# ユーザーの有効な組織 ID は、ID トークンのクレーム `organizations` にあります。
$organizationToken = $client->getOrganizationToken(organization_id);
# または
$claims = $client->getOrganizationTokenClaims(organization_id);
```
