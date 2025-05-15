```dart
// 使用者的有效組織 ID 可以在 ID 權杖 (ID token) 宣告 (claim) `organizations` 中找到。
Future<AccessToken?> getOrganizationAccessToken(String organizationId) async {
  var token = await logtoClient.getOrganizationToken(organizationId);

  return token;
}
```
