---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TokenValidation from './fragments/\_token_validation.mdx';
import TokenExtract from './fragments/\_token_extract.mdx';
import SecretKey from './fragments/\_secret_key.md';
import KotlinSetupCode from '../integrate-logto/fragments/\_android_sdk_setup_code_kotlin.md';
import JavaSetupCode from '../integrate-logto/fragments/\_android_sdk_setup_code_java.md';

# ⚔️ 保护你的 API

除了提供一个流畅的用户登录系统，Logto 默认还集成了 [API 资源](../../references/resources/README.md) 的授权服务，从而更好的保护你的 API 资源免受匿名身份的访问和侵害。让我们通过以下步骤，使用 Logto 来实现一个你自己的服务端资源权限保护系统。

## 在 Logto 管控制台内注册 API 资源

Logto 服务可以从每一个授权请求中识别出所申请的目标 [API 资源](../../references/resources/README.md)，并相应的颁发其专属的 `access_token` 令牌。

访问 Logto 管理控制台的 **API 资源** 页面。在列表中你会看到一个拥有 `https://api.logto.io` 作为 `API identifier` 的内置 API 资源。该资源代表了所有注册在此路由地址下，Logto 服务所提供的管理 API。它将保证我们所有的 API 都设置了权限保护，仅具有管理员角色的 Logto 授权用户才可以访问。

![API 资源](./assets/api-resources.png)

接下来，点按 **创建 API 资源** 按钮，并输入一下信息，来注册一个你自己的 API 资源：

- 一个可读性高的 **API 名称**，以更好的帮助你在未来能够快速识别此 API 资源
- 一个全局唯一的， **URI** 格式的，**API Identifier** (又可称之为 [Resource Indicator](../../references/resources/README.md#resource-indicator))。用来识别受保护的 API 资源。

<img src={require('./assets/create-api-resource.png').default} alt="创建 API 资源" width="700px" /><br/><br/>

:::caution
API Identifier 将被 Logto 用作全局唯一的 API 资源标识符。 一经创建**不可**编辑。请小心填写。
:::

创建后，新的 API 资源将显示在列表中。你可以过点按该 API 资源， 在 API 详情页面内对其进行管理或删除操作。

![API 资源详情](./assets/api-resource-details.png)

有关详细的 API 设置定义，请参阅 [API 资源数据格式](../../references/resources/README.md#logto-api-resource-schema)。

:::info
所有在 Logto 管理控制台内注册的 API 资源信息可以被所有的应用所共享。
:::

## 将资源授权流程集成到你的客户端应用程序中

一旦在 Logto 服务器上成功地注册了你的 API 资源，我们就可以回到客户端应用程序中，来看看 Logto SDK 是如何工作的。

:::note
如果你尚未将 Logto SDK 集成到你的客户端应用程序中，请阅读我们 SDK 的 [**集成指南**](../integrate-logto/README.md)。 Logto 提供了多种平台 SDK 来满足不同的客户端需求。专注于你的产品，让我们来处理繁琐的流程。
:::

使用 Logto SDK，你只需在启动时将这些资源的 **API Identifier** 作为配置传给 SDK。

<Tabs>

<TabItem value="kotlin" label="Kotlin">

<KotlinSetupCode />

</TabItem>

<TabItem value="java" label="Java">

<JavaSetupCode />

</TabItem>

<TabItem value="swift" label="Swift">

```swift
import Logto
import LogtoClient

let config = try? LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-application-id>",
  resources: ["<your-api-resource>"]
)
let client = LogtoClient(useConfig: config)
```

</TabItem>

<TabItem value="react" label="React">

```js
import { LogtoProvider, LogtoConfig } from '@logto/react';

const config: LogtoConfig = {
  appId: '<your-application-id>',
  endpoint: '<your-logto-endpoint>',
  resources: ['<your-api-resource>'],
};

const App = () => <LogtoProvider config={config}>{/* Your app content */}</LogtoProvider>;
```

</TabItem>
<TabItem value="vue" label="Vue">

```js
import { createLogto, LogtoConfig } from '@logto/vue';

const config: LogtoConfig = {
  appId: '<your-application-id>',
  endpoint: '<your-logto-endpoint>',
  resources: ['<your-api-resource>'],
};

const app = createApp(App);

app.use(createLogto, config);
app.mount('#app');
```

</TabItem>
<TabItem value="js" label="VanillaJs">

```js
import LogtoClient from '@logto/browser';

const logtoClient = new LogtoClient({
  appId: '<your-application-id>',
  endpoint: '<your-logto-endpoint>',
  resources: ['<your-api-resource>'],
});
```

</TabItem>
</Tabs>

截止到这里，你应用程序就已经接近完成了 😊。此时已经成功配置好了 Logto SDK。用户可以通过 Logto UI 来完成登录和注册的流程了。

用户成功登录后便可以通过客户端的操作来对你的后端 API 资源进行访问。此时我们需要再次借助 Logto，在客户端发出 API 请求之前，通过 Logto SDK 调用 Logto 服务器来申请一个 `access_token` 授权令牌。

:::note
被申请访问的 API 资源应该满足下列条件：

1. 通过管理控制台台成功注册在 Logto 服务器中
2. 在客户端启动时作为配置参数传给了 Logto SDK

:::

<Tabs>
<TabItem value="kotlin" label="Kotlin">

```kotlin
logtoClient.getAccessToken("<your-target-api-resource>", { logtoException, accessToken ->
    // custom logic
})
```

</TabItem>
<TabItem value="java" label="Java">

```java
logtoClient.getAccessToken("<your-target-api-resource>", (logtoException, accessToken) -> {
    // custom logic
});
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
  let token = try await client.getAccessToken(for: "<your-target-api-resource>")
  // custom logic
```

</TabItem>
<TabItem value="react" label="React">

```js
const { getAccessToken } = useLogto();
const token = await getAccessToken('<your-target-api-resource>');
// custom logic
```

</TabItem>

<TabItem value="vue" label="Vue">

```js
const { getAccessToken } = useLogto();
const token = await getAccessToken('<your-target-api-resource>');
// custom logic
```

</TabItem>

<TabItem value="js" label="VanillaJs">

```js
const token = await logtoClient.getAccessToken('<your-target-api-resource>');
// custom logic
```

</TabItem>

</Tabs>

如果该用户成功授权，Logto 将生成并颁发一个专属 [JWT](https://datatracker.ietf.org/doc/html/rfc7519) 格式的 `access_token` 令牌。该令牌经过加密，且携带了受众目标，颁发来源，使用时效等代表了所请求权限的必要信息。

将此令牌作为不记名（Bearer）令牌附加到你的 Authorization 请求头中。

例如：

```bash
GET https://logto.dev/api/users

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek

```

现在你的客户端应用程序已经配置完善。登录用户通过这个客户端所发出的所有请求都将得到充分授权。接下来让我们回到你的服务器端去屏蔽那些未被授权的匿名请求。

## 解析并验证 API 请求的权限令牌

最关键的一步便是通过对一个可信赖的令牌进行验证来保护您的 API 资源。如上所述，所有经过授权的请求都应在其 Authorization 请求头中携带由 Logto 颁发的 [JWT](https://datatracker.ietf.org/doc/html/rfc7519) 格式的 `assess_token` 令牌。

<SecretKey />

<TokenExtract />

<TokenValidation />

## 参考

Logto 使用基于 authorization code-based OAuth 2.0 授权协议使 API 请求流程变得更加安全。如果你对其背后的实现感兴趣，请参阅 OAuth 2.0 的[官方文档](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1) 了解更多详情。
