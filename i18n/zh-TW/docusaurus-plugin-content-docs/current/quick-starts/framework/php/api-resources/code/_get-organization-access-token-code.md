```php title="index.php"
# 將參數替換為有效的組織 (Organization) ID。
# 使用者的有效組織 (Organization) ID 可在 ID 權杖 (ID token) 宣告 (claim) `organizations` 中找到。
$organizationToken = $client->getOrganizationToken(organization_id);
# 或
$claims = $client->getOrganizationTokenClaims(organization_id);
```
