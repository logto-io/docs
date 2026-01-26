```dart
// Gültige Organisations-IDs für den Benutzer sind im ID-Token-Anspruch `organizations` zu finden.
Future<AccessToken?> getOrganizationAccessToken(String organizationId) async {
  var token = await logtoClient.getOrganizationToken(organizationId);

  return token;
}
```
