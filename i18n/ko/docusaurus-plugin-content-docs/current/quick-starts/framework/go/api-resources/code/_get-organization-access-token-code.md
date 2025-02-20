```go
// 매개변수를 유효한 조직 ID로 교체하세요.
// 사용자의 유효한 조직 ID는 ID 토큰 클레임 `organizations`에서 찾을 수 있습니다.
accessToken, error := logtoClient.GetOrganizationToken("organization-id")

// 또는
accessTokenClaims, error := logtoClient.GetOrganizationTokenClaims("organization-id")
```
