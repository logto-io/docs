```go
// แทนที่พารามิเตอร์ด้วยรหัสองค์กรที่ถูกต้อง
// สามารถดูรหัสองค์กรที่ถูกต้องสำหรับผู้ใช้ได้ในการอ้างสิทธิ์ (claim) ของโทเค็น ID (`organizations`)
accessToken, error := logtoClient.GetOrganizationToken("organization-id")

// หรือ
accessTokenClaims, error := logtoClient.GetOrganizationTokenClaims("organization-id")
```
