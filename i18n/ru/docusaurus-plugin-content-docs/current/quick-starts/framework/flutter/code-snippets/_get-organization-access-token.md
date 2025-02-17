```dart
// Действительные идентификаторы организаций для пользователя можно найти в утверждении ID токена `organizations`.
Future<AccessToken?> getOrganizationAccessToken(String organizationId) async {
  var token = await logtoClient.getOrganizationToken(organizationId);

  return token;
}
```
