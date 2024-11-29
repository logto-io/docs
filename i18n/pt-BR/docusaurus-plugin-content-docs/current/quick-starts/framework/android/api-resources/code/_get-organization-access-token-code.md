```kotlin title="LogtoViewModel.kt"
// Substitua o parâmetro por um ID de organização válido.
// IDs de organização válidos para o usuário podem ser encontrados na reivindicação do token de ID `organizations`.
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
