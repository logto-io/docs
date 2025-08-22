เนื่องจากเราไม่สามารถเข้าถึง `HttpContext` ได้โดยตรงใน Razor components เราจึงต้อง inject `HttpContextAccessor` เข้าไปใน component และใช้มันเพื่อดึงโทเค็น ตัวอย่างโค้ดต่อไปนี้แสดงวิธีดึงโทเค็นการเข้าถึง (Access Token) สำหรับทรัพยากร API (API resource) ใน Razor component:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@using Logto.AspNetCore.Authentication
@using Microsoft.AspNetCore.Authentication
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject IHttpContextAccessor HttpContextAccessor

@* ... *@

<p><b>ทรัพยากร:</b> @(Resource ?? "(null)")</p>
<p><b>โทเค็นการเข้าถึง (Access Token):</b> @(AccessToken ?? "(null)")</p>

@* ... *@

@code {
    private ClaimsPrincipal? User { get; set; }
    private string? AccessToken { get; set; }
    private string? Resource { get; set; }

    protected override async Task OnInitializedAsync()
    {
        var authState = await AuthenticationStateProvider.GetAuthenticationStateAsync();
        User = authState.User;

        if (User?.Identity?.IsAuthenticated == true)
        {
            await FetchTokenAsync();
        }
    }

    private async Task FetchTokenAsync()
    {
        var httpContext = HttpContextAccessor.HttpContext;
        if (httpContext == null)
        {
            return;
        }

        var logtoOptions = httpContext.GetLogtoOptions();
        Resource = logtoOptions?.Resource;
        // เปลี่ยนเป็นประเภทโทเค็นอื่นหากจำเป็น
        AccessToken = await httpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
    }
}
```
