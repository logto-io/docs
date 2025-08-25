หากต้องการทราบว่าผู้ใช้ได้รับการยืนยันตัวตนหรือไม่ คุณสามารถตรวจสอบพร็อพเพอร์ตี้ `User.Identity?.IsAuthenticated`

หากต้องการรับการอ้างสิทธิ์โปรไฟล์ผู้ใช้ (user profile claims) คุณสามารถใช้พร็อพเพอร์ตี้ `User.Claims` ได้ดังนี้:

```csharp
var claims = User.Claims;

// รับ user ID
var userId = claims.FirstOrDefault(c => c.Type == LogtoParameters.Claims.Subject)?.Value;
```

ดู [`LogtoParameters.Claims`](https://github.com/logto-io/csharp/blob/master/src/Logto.AspNetCore.Authentication/LogtoParameters.cs) สำหรับรายการชื่อการอ้างสิทธิ์ (claim names) และความหมายของแต่ละรายการ
