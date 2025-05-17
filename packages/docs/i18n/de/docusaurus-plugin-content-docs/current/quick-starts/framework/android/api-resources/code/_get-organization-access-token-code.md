```kotlin title="LogtoViewModel.kt"
// Ersetze den Parameter durch eine gültige Organisations-ID.
// Gültige Organisations-IDs für den Benutzer können im ID-Token-Anspruch `organizations` gefunden werden.
logtoClient.getOrganizationToken("organization-id") { logtoException, organizationToken ->
    logtoException?.let { println(it) }
    organizationToken?.let { println(it) }
}

// oder
logtoClient.getOrganizationTokenClaims("organization-id") { logtoException, claims ->
    logtoException?.let { println(it) }
    claims?.let { println(it) }
}
```
