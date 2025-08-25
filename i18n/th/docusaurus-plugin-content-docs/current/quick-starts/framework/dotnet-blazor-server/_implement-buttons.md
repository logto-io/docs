ใน Razor component ให้เพิ่มโค้ดต่อไปนี้:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager

@* ... *@

<p>Is authenticated: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true)
{
    <button @onclick="SignOut">Sign out</button>
}
else
{
    <button @onclick="SignIn">Sign in</button>
}

@* ... *@

@code {
    private ClaimsPrincipal? User { get; set; }

    protected override async Task OnInitializedAsync()
    {
        var authState = await AuthenticationStateProvider.GetAuthenticationStateAsync();
        User = authState.User;
    }

    private void SignIn()
    {
        NavigationManager.NavigateTo("/SignIn", forceLoad: true);
    }

    private void SignOut()
    {
        NavigationManager.NavigateTo("/SignOut", forceLoad: true);
    }
}
```

**คำอธิบาย**:

- ตัวแปร `AuthenticationStateProvider` ที่ถูก inject เข้ามา ใช้สำหรับดึงสถานะการยืนยันตัวตน (authentication state) ของผู้ใช้ปัจจุบัน และนำไปกำหนดค่าให้กับ property `User`
- เมธอด `SignIn` และ `SignOut` ใช้สำหรับเปลี่ยนเส้นทาง (redirect) ผู้ใช้ไปยัง endpoint สำหรับลงชื่อเข้าใช้และออกจากระบบตามลำดับ เนื่องจากลักษณะของ Blazor Server เราจำเป็นต้องใช้ `NavigationManager` พร้อมกับ force load เพื่อให้เกิดการเปลี่ยนเส้นทาง

หน้าดังกล่าวจะแสดงปุ่ม "Sign in" หากผู้ใช้ยังไม่ได้รับการยืนยันตัวตน และจะแสดงปุ่ม "Sign out" หากผู้ใช้ได้รับการยืนยันตัวตนแล้ว
