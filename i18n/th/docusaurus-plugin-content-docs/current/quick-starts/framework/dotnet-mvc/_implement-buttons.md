ก่อนอื่น ให้เพิ่มเมธอดสำหรับการดำเนินการ (actions) ลงใน `Controller` ของคุณ ตัวอย่างเช่น:

```csharp title="Controllers/HomeController.cs"
public class HomeController : Controller
{
  public IActionResult SignIn()
  {
    // โค้ดนี้จะเปลี่ยนเส้นทางผู้ใช้ไปยังหน้าลงชื่อเข้าใช้ของ Logto
    return Challenge(new AuthenticationProperties { RedirectUri = "/" });
  }

  // ใช้คีย์เวิร์ด `new` เพื่อหลีกเลี่ยงการชนกับเมธอด `ControllerBase.SignOut`
  new public IActionResult SignOut()
  {
    // โค้ดนี้จะล้างคุกกี้การยืนยันตัวตนและเปลี่ยนเส้นทางผู้ใช้ไปยังหน้าลงชื่อออกของ Logto
    // เพื่อเคลียร์เซสชันของ Logto ด้วย
    return SignOut(new AuthenticationProperties { RedirectUri = "/" });
  }
}
```

จากนั้น เพิ่มลิงก์ลงใน View ของคุณ:

```cshtml title="Views/Home/Index.cshtml"
<p>Is authenticated: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true) {
  <a asp-controller="Home" asp-action="SignOut">Sign out</a>
} else {
  <a asp-controller="Home" asp-action="SignIn">Sign in</a>
}
```

ระบบจะแสดงลิงก์ "Sign in" หากผู้ใช้ยังไม่ได้รับการยืนยันตัวตน และจะแสดงลิงก์ "Sign out" หากผู้ใช้ได้รับการยืนยันตัวตนแล้ว
