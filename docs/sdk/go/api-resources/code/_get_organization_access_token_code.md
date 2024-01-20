```kotlin
// Replace the parameter with a valid organization ID.
// Valid organization IDs for the user can be found in the ID token claim `organizations`.
accessToken, error := logtoClient.GetOrganizationToken("organization-id")

// or
accessTokenClaims, error := logtoClient.GetOrganizationTokenClaims("organization-id")
```
