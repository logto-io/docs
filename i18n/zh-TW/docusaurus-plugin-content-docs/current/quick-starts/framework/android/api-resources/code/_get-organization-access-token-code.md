```kotlin title="LogtoViewModel.kt"
// 將參數替換為有效的組織 ID。
// 使用者的有效組織 ID 可以在 ID 權杖 (ID token) 宣告 (claim) `organizations` 中找到。
logtoClient.getOrganizationToken("organization-id") { logtoException, organizationToken ->
    logtoException?.let { println(it) }
    organizationToken?.let { println(it) }
}

// 或
logtoClient.getOrganizationTokenClaims("organization-id") { logtoException, claims ->
    logtoException?.let { println(it) }
    claims?.let { println(it) }
}
```
