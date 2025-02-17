```go
// Замените параметр на действительный ID организации.
// Действительные ID организаций для пользователя можно найти в утверждении ID токена `organizations`.
accessToken, error := logtoClient.GetOrganizationToken("organization-id")

// или
accessTokenClaims, error := logtoClient.GetOrganizationTokenClaims("organization-id")
```
