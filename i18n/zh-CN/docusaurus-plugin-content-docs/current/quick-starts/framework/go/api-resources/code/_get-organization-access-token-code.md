```go
// 将参数替换为有效的组织 ID。
// 用户的有效组织 ID 可以在 ID 令牌声明 `organizations` 中找到。
accessToken, error := logtoClient.GetOrganizationToken("organization-id")

// 或者
accessTokenClaims, error := logtoClient.GetOrganizationTokenClaims("organization-id")
```
