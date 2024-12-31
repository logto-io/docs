```dart
// 사용자를 위한 유효한 조직 ID는 ID 토큰 클레임 `organizations`에서 찾을 수 있습니다.
Future<AccessToken?> getOrganizationAccessToken(String organizationId) async {
  var token = await logtoClient.getOrganizationToken(organizationId);

  return token;
}
```
