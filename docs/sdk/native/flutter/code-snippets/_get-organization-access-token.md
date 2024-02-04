```dart
// Valid organization IDs for the user can be found in the ID token claim `organizations`.
Future<AccessToken?> getOrganizationAccessToken(String organizationId) async {
  var token = await logtoClient.getAccessToken(organizationId: organizationId);

  return token;
}
```
