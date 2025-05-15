```go
// Reemplaza el parámetro con un ID de organización válido.
// Los IDs de organización válidos para el usuario se pueden encontrar en el reclamo del Token de ID `organizations`.
accessToken, error := logtoClient.GetOrganizationToken("organization-id")

// o
accessTokenClaims, error := logtoClient.GetOrganizationTokenClaims("organization-id")
```
