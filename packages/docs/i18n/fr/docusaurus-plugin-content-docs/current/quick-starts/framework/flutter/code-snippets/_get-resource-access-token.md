```dart title="lib/main.dart"
Future<Jeton d’accès?> getAccessToken(String resource) async {
  var token = await logtoClient.getAccessToken(resource: resource);

  return token;
}
```
