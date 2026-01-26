```dart title="lib/main.dart"
Future<AccessToken?> getAccessToken(String resource) async {
  // ดึงโทเค็นการเข้าถึง (AccessToken) สำหรับ resource ที่ระบุ
  var token = await logtoClient.getAccessToken(resource: resource);

  return token;
}
```
