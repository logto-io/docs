```go
// Remplacez le paramètre par un ID d’organisation valide.
// Les ID d’organisations valides pour l’utilisateur peuvent être trouvés dans la revendication de jeton d’identifiant `organizations`.
accessToken, error := logtoClient.GetOrganizationToken("organization-id")

// ou
accessTokenClaims, error := logtoClient.GetOrganizationTokenClaims("organization-id")
```
