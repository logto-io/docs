```dart
// สามารถดูรหัสองค์กร (organization IDs) ที่ถูกต้องสำหรับผู้ใช้ได้ในการอ้างสิทธิ์ (claim) `organizations` ของโทเค็น ID
Future<AccessToken?> getOrganizationAccessToken(String organizationId) async {
  var token = await logtoClient.getOrganizationToken(organizationId);

  return token;
}
```
