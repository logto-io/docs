`postLogoutRedirectUri` はオプションであり、提供されない場合、ユーザーはサインアウトが成功した後に Logto のデフォルトページにリダイレクトされます（あなたのアプリケーションに戻るリダイレクトは行われません）。

> **注** > `postLogoutRedirectUri` という名前は、[OpenID Connect RP-Initiated Logout](https://openid.net/specs/openid-connect-rpinitiated-1_0.html) 仕様から来ています。Logto は「サインアウト」を「ログアウト」の代わりに使用していますが、概念は同じです。
