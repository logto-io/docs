```php title="index.php"
# แทนที่พารามิเตอร์ด้วยรหัสองค์กรที่ถูกต้อง
# สามารถดูรหัสองค์กรที่ถูกต้องสำหรับผู้ใช้ได้ในการอ้างสิทธิ์ (claim) ของโทเค็น ID (`organizations`)
$organizationToken = $client->getOrganizationToken(organization_id);
# หรือ
$claims = $client->getOrganizationTokenClaims(organization_id);
```
