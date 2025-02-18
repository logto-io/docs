```kotlin title="LogtoViewModel.kt"
// 매개변수를 유효한 조직 ID로 교체하세요.
// 사용자를 위한 유효한 조직 ID는 ID 토큰 클레임 `organizations`에서 찾을 수 있습니다.
logtoClient.getOrganizationToken("organization-id") { logtoException, organizationToken ->
    logtoException?.let { println(it) }
    organizationToken?.let { println(it) }
}

// 또는
logtoClient.getOrganizationTokenClaims("organization-id") { logtoException, claims ->
    logtoException?.let { println(it) }
    claims?.let { println(it) }
}
```
