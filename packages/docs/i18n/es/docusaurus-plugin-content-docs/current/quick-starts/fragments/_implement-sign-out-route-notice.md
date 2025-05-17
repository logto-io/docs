`postLogoutRedirectUri` es opcional, y si no se proporciona, el usuario será redirigido a una página predeterminada de Logto después de un cierre de sesión exitoso (sin redirigir de vuelta a tu aplicación).

> **Nota**
> El nombre `postLogoutRedirectUri` proviene de la especificación [OpenID Connect RP-Initiated Logout](https://openid.net/specs/openid-connect-rpinitiated-1_0.html). Aunque Logto utiliza "cierre de sesión" en lugar de "logout", el concepto es el mismo.
