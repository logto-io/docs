`postLogoutRedirectUri` 是可选的，如果未提供，用户将在成功退出后被重定向到 Logto 默认页面（不会重定向回你的应用程序）。

> **注意**
> 名称 `postLogoutRedirectUri` 来自 [OpenID Connect RP-Initiated Logout](https://openid.net/specs/openid-connect-rpinitiated-1_0.html) 规范。虽然 Logto 使用“sign-out”而不是“logout”，但概念是相同的。
