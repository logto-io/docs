```dart
// IDs de organizações válidas para o usuário podem ser encontradas na reivindicação do Token de ID `organizations`.
Future<AccessToken?> getOrganizationAccessToken(String organizationId) async {
  var token = await logtoClient.getOrganizationToken(organizationId);

  return token;
}
```
