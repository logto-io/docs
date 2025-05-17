```go
// Substitua o parâmetro por um ID de organização válido.
// IDs de organização válidos para o usuário podem ser encontrados na reivindicação do token de ID `organizations`.
accessToken, error := logtoClient.GetOrganizationToken("organization-id")

// ou
accessTokenClaims, error := logtoClient.GetOrganizationTokenClaims("organization-id")
```
