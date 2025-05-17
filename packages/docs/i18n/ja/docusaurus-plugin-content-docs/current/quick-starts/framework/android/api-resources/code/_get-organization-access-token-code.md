```kotlin title="LogtoViewModel.kt"
// パラメーターを有効な組織 ID に置き換えます。
// ユーザーに対する有効な組織 ID は、ID トークンのクレーム `organizations` にあります。
logtoClient.getOrganizationToken("organization-id") { logtoException, organizationToken ->
    logtoException?.let { println(it) }
    organizationToken?.let { println(it) }
}

// または
logtoClient.getOrganizationTokenClaims("organization-id") { logtoException, claims ->
    logtoException?.let { println(it) }
    claims?.let { println(it) }
}
```
