```dart
// 用户的有效组织 ID 可以在 ID 令牌声明 `organizations` 中找到。
Future<AccessToken?> getOrganizationAccessToken(String organizationId) async {
  var token = await logtoClient.getOrganizationToken(organizationId);

  return token;
}
```
