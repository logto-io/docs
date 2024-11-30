```dart
// Los IDs de organización válidos para el usuario se pueden encontrar en el reclamo del Token de ID `organizations`.
Future<AccessToken?> getOrganizationAccessToken(String organizationId) async {
  var token = await logtoClient.getOrganizationToken(organizationId);

  return token;
}
```
