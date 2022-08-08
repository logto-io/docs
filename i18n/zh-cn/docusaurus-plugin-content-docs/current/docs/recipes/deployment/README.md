---
sidebar_position: 8
---

# 🚀 部署

## 环境变量

我们在演示中（`docker-compose.yml`）使用了一组自动生成的环境变量，你应该替换成自己的，并维护多个 Logto 实例之间的变量统一性。

你可以直接设置环境变量，或者在 Logto 项目根目录中放置一个 `.env` 文件。如果你在用 Docker 进行测试，可以去 `/etc/logto` 里看看自动生成的 `.env`。

### 基础

- `DB_URL` Logto 数据库的 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。
- `PORT` Logto 监听的本地端口。默认 `3001`。
- `ENDPOINT` 你可以指定一个带有自定义域名的指向 Logto 的 URL，用于在线测试或生产环境（例如 `ENDPOINT=https://logto.domain.com`）。这也会影响到 [OIDC issuer identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) 和「管理控制台」Redirect URIs 的值。
- `OIDC_COOKIE_KEYS` [Signing cookie keys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys) 的字符串数组。定期轮换以确保安全。
- `OIDC_PRIVATE_KEYS` [OIDC JWT 签名](https://openid.net/specs/openid-connect-core-1_0.html#Signing) 的 private key 内容数组。如果你想在 `.env` 中设置，你可以通过 [多行值](https://github.com/motdotla/dotenv#multiline-values) 来实现。

**我想使用 `.pem` 文件用作 OIDC private key。我该怎么做？**

将 `OIDC_PRIVATE_KEYS` 置空，并将 `.pem` 文件的路径配置到 `OIDC_PRIVATE_KEY_PATHS` 数组中 。它的默认值是 `['./oidc-private-key.pem']`。

有关环境变量的详情，请参见 [配置](../../references/core/configuration.md)。

### HTTPS

你可以直接使用 Node.js 来直接提供 HTTPS，或者在 Node.js 前设置一个 HTTPS 代理/负载均衡。详情参见 [启用 HTTPS](../../references/core/configuration.md#启用-https)。

## 如何安全地升级 Logto？

除非我们在 changelog 里特意提出，你都无需变更代码和数据库即可轻松升级 Logto。我们的 API 遵循 [semver](https://semver.org/) 标准。

如果数据库变更无法避免，我们将提供一个顺滑的数据库迁移过程，并在 changelog 中详细描述。你将能轻松完成它。
