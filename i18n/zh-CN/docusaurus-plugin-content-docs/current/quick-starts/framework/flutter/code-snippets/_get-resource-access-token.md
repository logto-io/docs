```dart title="lib/main.dart"
Future<访问令牌 (AccessToken)?> getAccessToken(String resource) async {
  var token = await logtoClient.getAccessToken(resource: resource);

  return token;
}
```
