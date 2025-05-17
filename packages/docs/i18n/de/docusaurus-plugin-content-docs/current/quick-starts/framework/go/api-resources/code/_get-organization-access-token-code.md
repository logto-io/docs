```go
// Ersetze den Parameter durch eine gültige Organisations-ID.
// Gültige Organisations-IDs für den Benutzer können im ID-Token-Anspruch `organizations` gefunden werden.
accessToken, error := logtoClient.GetOrganizationToken("organization-id")

// oder
accessTokenClaims, error := logtoClient.GetOrganizationTokenClaims("organization-id")
```
