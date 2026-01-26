```kotlin title="LogtoViewModel.kt"
// Remplacez le paramètre par un ID d’organisation valide.
// Les ID d’organisations valides pour l’utilisateur peuvent être trouvés dans la revendication de jeton d’identifiant `organizations`.
logtoClient.getOrganizationToken("organization-id") { logtoException, organizationToken ->
    logtoException?.let { println(it) }
    organizationToken?.let { println(it) }
}

// ou
logtoClient.getOrganizationTokenClaims("organization-id") { logtoException, claims ->
    logtoException?.let { println(it) }
    claims?.let { println(it) }
}
```
