```dart
// ユーザーに対する有効な組織 ID は、ID トークンのクレーム `organizations` にあります。
Future<AccessToken?> getOrganizationAccessToken(String organizationId) async {
  var token = await logtoClient.getOrganizationToken(organizationId);

  return token;
}
```
