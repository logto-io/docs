บางครั้งคุณอาจจำเป็นต้องดึงโทเค็นการเข้าถึง (Access token) หรือโทเค็น ID (ID token) สำหรับการเรียก API คุณสามารถใช้เมธอด `GetTokenAsync` เพื่อดึงโทเค็นเหล่านี้ได้:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

ไม่จำเป็นต้องกังวลเกี่ยวกับการหมดอายุของโทเค็น มิดเดิลแวร์การยืนยันตัวตนจะรีเฟรชโทเค็นโดยอัตโนติเมื่อจำเป็น

:::caution
แม้มิดเดิลแวร์การยืนยันตัวตนจะรีเฟรชโทเค็นโดยอัตโนมัติ แต่การอ้างสิทธิ์ (Claims) ในอ็อบเจกต์ผู้ใช้จะไม่ถูกอัปเดตเนื่องจากข้อจำกัดของตัวจัดการการยืนยันตัวตน OpenID Connect ที่อยู่เบื้องหลัง
ปัญหานี้จะแก้ไขได้เมื่อเราเขียนตัวจัดการการยืนยันตัวตนของเราเอง
:::

โปรดทราบว่าโทเค็นการเข้าถึง (Access token) ข้างต้นเป็นโทเค็นทึบ (Opaque token) สำหรับ userinfo endpoint ใน OpenID Connect ซึ่งไม่ใช่ JWT หากคุณได้ระบุทรัพยากร API (API resource) แล้ว คุณต้องใช้ `LogtoParameters.Tokens.AccessTokenForResource` เพื่อดึงโทเค็นการเข้าถึงสำหรับทรัพยากร API:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

โทเค็นนี้จะเป็น JWT โดยมีทรัพยากร API เป็นผู้รับ (audience)
