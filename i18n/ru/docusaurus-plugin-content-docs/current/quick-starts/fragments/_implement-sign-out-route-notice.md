`postLogoutRedirectUri` является необязательным, и если он не указан, пользователь будет перенаправлен на страницу по умолчанию Logto после успешного выхода (без перенаправления обратно в ваше приложение).

> **Примечание**
> Название `postLogoutRedirectUri` взято из спецификации [OpenID Connect RP-Initiated Logout](https://openid.net/specs/openid-connect-rpinitiated-1_0.html). Хотя Logto использует "sign-out" вместо "logout", концепция остается той же.
