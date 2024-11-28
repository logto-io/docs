```kotlin title="LogtoViewModel.kt"
// 将参数替换为有效的组织 ID。
// 用户的有效组织 ID 可以在 ID 令牌声明 `organizations` 中找到。
logtoClient.getOrganizationToken("organization-id") { logtoException, organizationToken ->
    logtoException?.let { println(it) }
    organizationToken?.let { println(it) }
}

// 或者
logtoClient.getOrganizationTokenClaims("organization-id") { logtoException, claims ->
    logtoException?.let { println(it) }
    claims?.let { println(it) }
}
```
