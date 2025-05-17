```dart title="lib/main.dart"
Future<AccessToken?> getAccessToken(String resource) async {
  var token = await logtoClient.getAccessToken(resource: resource);

  return token;
}
```
