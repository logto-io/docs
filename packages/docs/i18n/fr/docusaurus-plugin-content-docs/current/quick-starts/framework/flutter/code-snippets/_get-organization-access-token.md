```dart
// Les identifiants d’ organisation valides pour l’utilisateur peuvent être trouvés dans la revendication de jeton d’identifiant `organizations`.
Future<AccessToken?> getOrganizationAccessToken(String organizationId) async {
  var token = await logtoClient.getOrganizationToken(organizationId);

  return token;
}
```
