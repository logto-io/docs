```kotlin title="LogtoViewModel.kt"
// Reemplaza el parámetro con un ID de organización válido.
// Los IDs de organización válidos para el usuario se pueden encontrar en el reclamo del token de ID `organizations`.
logtoClient.getOrganizationToken("organization-id") { logtoException, organizationToken ->
    logtoException?.let { println(it) }
    organizationToken?.let { println(it) }
}

// o
logtoClient.getOrganizationTokenClaims("organization-id") { logtoException, claims ->
    logtoException?.let { println(it) }
    claims?.let { println(it) }
}
```
