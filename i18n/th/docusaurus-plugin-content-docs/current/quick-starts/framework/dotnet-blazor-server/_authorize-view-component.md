อีกทางเลือกหนึ่ง คุณสามารถใช้คอมโพเนนต์ `AuthorizeView` เพื่อแสดงเนื้อหาแบบมีเงื่อนไขตามสถานะการยืนยันตัวตนของผู้ใช้ คอมโพเนนต์นี้มีประโยชน์เมื่อคุณต้องการแสดงเนื้อหาที่แตกต่างกันสำหรับผู้ใช้ที่ยืนยันตัวตนแล้วและยังไม่ได้ยืนยันตัวตน

ใน Razor component ของคุณ ให้เพิ่มโค้ดต่อไปนี้:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization

@* ... *@

<AuthorizeView>
    <Authorized>
        <p>ชื่อ: @User?.Identity?.Name</p>
        @* เนื้อหาสำหรับผู้ใช้ที่ยืนยันตัวตนแล้ว *@
    </Authorized>
    <NotAuthorized>
        @* เนื้อหาสำหรับผู้ใช้ที่ยังไม่ได้ยืนยันตัวตน *@
    </NotAuthorized>
</AuthorizeView>

@* ... *@
```

คอมโพเนนต์ `AuthorizeView` ต้องการ cascading parameter ที่มีชนิดเป็น `Task<AuthenticationState>` วิธีที่ตรงไปตรงมาในการรับพารามิเตอร์นี้คือการเพิ่มคอมโพเนนต์ `<CascadingAuthenticationState>` อย่างไรก็ตาม เนื่องจากธรรมชาติของ Blazor Server เราไม่สามารถเพิ่มคอมโพเนนต์นี้ใน layout หรือ root component ได้โดยตรง (อาจไม่ทำงานตามที่คาดหวัง) ดังนั้นเราสามารถเพิ่มโค้ดต่อไปนี้ใน builder (`Program.cs` หรือ `Startup.cs`) เพื่อให้ cascading parameter นี้:

```csharp title="Program.cs"
builder.Services.AddCascadingAuthenticationState();
```

จากนั้นคุณสามารถใช้คอมโพเนนต์ `AuthorizeView` ในทุกคอมโพเนนต์ที่ต้องการได้
