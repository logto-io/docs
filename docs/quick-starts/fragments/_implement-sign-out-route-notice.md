`postLogoutRedirectUri` is optional, and if not provided, the user will be redirected to a Logto default page after a successful sign-out (without redirecting back to your application).

> **Note**
> The name `postLogoutRedirectUri` is from the [OpenID Connect RP-Initiated Logout](https://openid.net/specs/openid-connect-rpinitiated-1_0.html) specification. Although Logto uses "sign-out" instead of "logout", the concept is the same.
