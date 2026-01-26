ก่อนอื่น ให้เพิ่มเมธอด handler ลงใน `PageModel` ของคุณ ตัวอย่างเช่น:

```csharp title="Pages/Index.cshtml.cs"
// เพิ่มเมธอด handler สำหรับการลงชื่อเข้าใช้และออกจากระบบ
public class IndexModel : PageModel
{
  public async Task OnPostSignInAsync()
  {
    await HttpContext.ChallengeAsync(new AuthenticationProperties
    {
      RedirectUri = "/"
    });
  }

  public async Task OnPostSignOutAsync()
  {
    await HttpContext.SignOutAsync(new AuthenticationProperties
    {
      RedirectUri = "/"
    });
  }
}
```

จากนั้น เพิ่มปุ่มลงในหน้า Razor ของคุณ:

```cshtml title="Pages/Index.cshtml"
<p>ตรวจสอบการยืนยันตัวตน: @User.Identity?.IsAuthenticated</p>
<form method="post">
  @if (User.Identity?.IsAuthenticated == true) {
    <button type="submit" asp-page-handler="SignOut">ออกจากระบบ</button>
  } else {
    <button type="submit" asp-page-handler="SignIn">ลงชื่อเข้าใช้</button>
  }
</form>
```

ระบบจะแสดงปุ่ม "ลงชื่อเข้าใช้" หากผู้ใช้ยังไม่ได้รับการยืนยันตัวตน และจะแสดงปุ่ม "ออกจากระบบ" หากผู้ใช้ได้รับการยืนยันตัวตนแล้ว
