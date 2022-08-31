import APIResourceSchema from './fragments/\_api_resource_schema.mdx';

# 📁 API 资源

## 简介

### 什么是 API 资源?

API 资源，即 [Resource Indicators](https://www.rfc-editor.org/rfc/rfc8707.html)，被用来声明用户所请求的目标服务接口或者资源。通常是一个指向到接口或资源地址的 URI 变量。

### 为什么需要 API 资源

Logto 作为一个授权服务器，旨在为大量不同的资源和接口提供权限服务。我们将会根据用户所声明的 API 资源标识来生成和颁发带有特定内容、类型，和受众目标的加密令牌。

将授权令牌及对应的权限校验应用到你的请求当中，可以更好的保护你的私有资源不被匿名身份者访问或者攻击。

## 定义

### Resource Indicator

- 一个有效的资源标识，用来表示被请求方的目标接口或者资源。
- 它的值 **必须** 是一个完整的 URI 格式。
- 该 URI **不能** 包含任何 fragment 片段。
- 该 URI **不应** 包含任何 query 片段。
- 该 URI **应** 尽可能的具体。用于表示一个或一组完整的接口或资源。

在实际应用中，客户端可能仅知道与其交互的应用程序或者被请求资源的根地址。这时就可以用它来作为 Resource Indicator， 用来代表所有该地址下的接口和资源

例如：Logto 提供的管理接口 URI 地址

```
https://api.logto.io
```

默认初始状态下，该 URI 就会被作为一个 API 资源注册在 Logto 侧。 所有该地址下的管理接口都会受到 Logto 服务器的保护。

### Logto API 资源的数据格式

<APIResourceSchema />

## API 资源是如何运作的

### 1. 授权请求

当在对授权端点的发起的请求中使用 resource 参数时，它声明了所有当前所请求授权访问的受保护资源。

```bash
GET https://logto.dev/oidc/auth?response_type=code
    &client_id=s6BhdRkqt3
    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI
    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fapplications
    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fusers
```

Logto 会校验这些 resource indicators 的合法性并颁发带有相应权限的 `authorization_code`.

### 2. Access Token 请求

当 resource 参数被用于向令牌端点发出的 `access_token` 令牌请求时，它指明了当前客户端打算使用该被请求令牌的目标服务接口或资源

```bash
POST https://logto.dev/oidc/token HTTP/1.1

    grant_type=authorization_code
    redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ
    resource=https%3A%2F%2Flogto.test.dev%2Fusers
```

请求成功后，Logto 将颁发一个 `access_token` 访问令牌，其受众目标仅限于该被请求的接口或资源。

### 3. API 请求

每一个由客户端发起面向一个 API 资源访问的请求头中将携带一个由 Logto 颁发，带有受众，授权，时效等信息的 `access_token` 加密令牌。

```bash
GET https://logto.dev/api/users

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek

```

:::tip
请参照我们的 [**API 资源保护**](../../recipes/protect-your-api/README.mdx) 指南，添加令牌验证到你的服务器接口端，是你的私有资源得到更好的保护。
:::

Logto 遵循标准的 OAuth 2.0 令牌授权协议来保护你的数据资源。 你可以访问 OAuth 2.0 的[官方文档](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1)，以获取跟多细节。
