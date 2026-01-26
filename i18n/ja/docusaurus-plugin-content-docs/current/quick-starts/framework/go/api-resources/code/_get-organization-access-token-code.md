```go
// パラメーターを有効な組織 ID に置き換えてください。
// ユーザーの有効な組織 ID は、ID トークンのクレーム `organizations` にあります。
accessToken, error := logtoClient.GetOrganizationToken("organization-id")

// または
accessTokenClaims, error := logtoClient.GetOrganizationTokenClaims("organization-id")
```
