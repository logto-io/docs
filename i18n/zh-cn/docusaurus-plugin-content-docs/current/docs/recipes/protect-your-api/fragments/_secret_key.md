### 获取 JWK 公钥

Logto 颁发的所有令牌都使用了 [JWK](https://datatracker.ietf.org/doc/html/rfc7517) 签名。 （有关详细信息，请参阅 [JWS](https://datatracker.ietf.org/doc/html/rfc7515)）

在继续之前，我们需要获取一个公钥用来验证 Bearer Token (`access_token`) 的签名。

密钥集可以通过 Logto 的 **jwks_uri** 查询接口：`https://<your-logto-domain>/oidc/jwks` 来获取。

:::note
所有最新的 Logto 授权服务器的配置都可以通过 `https://<your-logto-domain>/oidc/.well-known/openid-configuration` 找到，包括 **jwks_uri** 以及其他相关配置。
:::

在返回数据中，你将获得一个 JWKS（JSON Web 密钥集）。 我们需要将其**保存**在你的服务端。它将被用来验证所有请求的令牌签名。
