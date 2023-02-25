# 配置

## 环境变量

### 用法

Logto 按如下顺序处理环境变量 (environment variables)：

- 系统环境变量
- 项目根目录下符合 [dotenv](https://github.com/motdotla/dotenv#readme) 格式的 `.env` 文件

也就是说，系统环境变量会覆盖 `.env` 已存在的值。

### 变量

:::caution
如果你通过 `npm start` 在根目录下运行 Logto，`NODE_ENV` 将永远是 `production`。
:::

在默认值中，`protocol` 将会根据你的 HTTPS 配置取值 `http` 或 `https`。

| Key                     | 默认值                               | 类型                                                     | 描述                                                                                                                                                                                                                    |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Logto 运行在什么样的环境里。                                                                                                                                                                                            |
| PORT                    | `3001`                               | `number`                                                 | Logto 监听的本地端口。                                                                                                                                                                                                  |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Logto 管理控制台监听的本地端口。                                                                                                                                                                                        |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | 设置为 `1` 或 `true` 来禁止以 localhost 地址访问管理控制台。如此时 `ADMIN_ENDPOINT` 也未设置，管理控制台将彻底被禁用。                                                                                                  |
| DB_URL                  | N/A                                  | `string`                                                 | Logto 数据库的 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。                                                                                                                   |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | 详见 [启用 HTTPS](#启用-https)。                                                                                                                                                                                        |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | 同上。                                                                                                                                                                                                                  |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | 同上。                                                                                                                                                                                                                  |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | 指向 Logto 服务的自定义域名，通常用于生产环境（例如 `ENDPOINT=https://logto.domain.com`）。修改 ENDPOINT 会影响 [OIDC issuer identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) 的值。 |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | 指向 Logto 管理控制台的自定义域名，通常用于生产环境（例如 `ADMIN_ENDPOINT=https://admin.domain.com`）。修改 ADMIN_ENDPOINT 将会影响管理控制台应用的 Redirect URIs。                                                     |

### 启用 HTTPS

#### 使用 Node

Node 原生支持 HTTPS。当 `HTTPS_CERT_PATH` 和 `HTTPS_KEY_PATH` **同时** 被提供时才会通过 Node 启用 HTTPS。

`HTTPS_CERT_PATH` 是你的 HTTPS certificate 的路径；`HTTPS_KEY_PATH` 是你的 HTTPS key 的路径。

#### 使用 HTTPS 代理

另一个惯常的做法是在 Node 前放置一个 HTTPS 代理（例如 Nginx）。

在这样的情况下，你很可能需要将 `TRUST_PROXY_HEADER` 设置为 `true` 以表明代理 header 的字段是否应该被信任。Logto 将把此值传递给 [Koa 应用设置](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings)。

见 [Trusting TLS offloading proxies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) 以了解何时需要配置此字段。

## 数据库中的配置项

管理过多的环境变量通常来说不够高效、灵活，因此我们大多数通用配置都存储在数据库表 `logto_configs` 中。

这张表是一个简单的 key-value 的存储结构，所含字段如下：

| Key              | 类型                  | 描述                                                                                                                      |
| ---------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | 存放 [signing cookie keys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys) 的字符串数组 |
| oidc.privateKeys | <code>string[]</code> | 存放 [OIDC JWT 签名](https://openid.net/specs/openid-connect-core-1_0.html#Signing) 所使用的一组私钥                      |

### 支持的 private key 类型

- EC (P-256, secp256k1, P-384, and P-521 curves)
- RSA
- OKP (Ed25519, Ed448, X25519, X448 sub types)
