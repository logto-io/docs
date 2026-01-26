```kotlin title="LogtoViewModel.kt"
// แทนที่พารามิเตอร์ด้วยรหัสองค์กรที่ถูกต้อง
// สามารถดูรหัสองค์กรที่ถูกต้องสำหรับผู้ใช้ได้ในการอ้างสิทธิ์ (claim) โทเค็น ID `organizations`
logtoClient.getOrganizationToken("organization-id") { logtoException, organizationToken ->
    logtoException?.let { println(it) }
    organizationToken?.let { println(it) }
}

// หรือ
logtoClient.getOrganizationTokenClaims("organization-id") { logtoException, claims ->
    logtoException?.let { println(it) }
    claims?.let { println(it) }
}
```
