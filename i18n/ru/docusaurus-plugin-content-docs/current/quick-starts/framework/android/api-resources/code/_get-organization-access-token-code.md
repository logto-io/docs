```kotlin title="LogtoViewModel.kt"
// Замените параметр на действительный ID организации.
// Действительные ID организаций для пользователя можно найти в утверждении ID токена `organizations`.
logtoClient.getOrganizationToken("organization-id") { logtoException, organizationToken ->
    logtoException?.let { println(it) }
    organizationToken?.let { println(it) }
}

// или
logtoClient.getOrganizationTokenClaims("organization-id") { logtoException, claims ->
    logtoException?.let { println(it) }
    claims?.let { println(it) }
}
```
