เนื่องจาก Blazor Server ใช้ SignalR ในการสื่อสารระหว่างเซิร์ฟเวอร์และไคลเอนต์ นั่นหมายความว่าวิธีที่จัดการ HTTP context โดยตรง (เช่น การออกคำสั่ง challenge หรือ redirect) จะไม่ทำงานตามที่คาดหวังเมื่อถูกเรียกจาก Blazor component

เพื่อให้ถูกต้อง เราต้องเพิ่ม endpoint สองตัวสำหรับการ redirect ไปยังหน้าลงชื่อเข้าใช้และออกจากระบบโดยเฉพาะ:

```csharp title="Program.cs"
app.MapGet("/SignIn", async context =>
{
    // ถ้ายังไม่ได้ยืนยันตัวตน ให้ challenge และ redirect ไปที่หน้าแรก
    if (!(context.User?.Identity?.IsAuthenticated ?? false))
    {
        await context.ChallengeAsync(new AuthenticationProperties { RedirectUri = "/" });
    } else {
        context.Response.Redirect("/");
    }
});

app.MapGet("/SignOut", async context =>
{
    // ถ้ายืนยันตัวตนแล้ว ให้ sign out และ redirect ไปที่หน้าแรก
    if (context.User?.Identity?.IsAuthenticated ?? false)
    {
        await context.SignOutAsync(new AuthenticationProperties { RedirectUri = "/" });
    } else {
        context.Response.Redirect("/");
    }
});
```

ตอนนี้เราสามารถ redirect ไปยัง endpoint เหล่านี้เพื่อเรียกกระบวนการลงชื่อเข้าใช้และออกจากระบบได้
