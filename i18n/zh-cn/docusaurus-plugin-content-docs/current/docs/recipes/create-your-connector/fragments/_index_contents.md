连接器类型是对于 _SMSConnector_，_EmailConnector_ 和 _SocialConnector_ 接口的一个实现。

这里有对于不同类型连接器接口的详细定义。

```typescript
interface BaseConnector<T> {
  metadata: ConnectorMetadata;
  getConfig: GetConnectorConfig;
  validateConfig: ValidateConfig<T>;
}

interface SmsConnector<T> extends BaseConnector<T> {
  sendMessage: SmsSendMessageFunction;
  sendTestMessage?: SmsSendTestMessageFunction;
}

interface EmailConnector<T> extends BaseConnector<T> {
  sendMessage: EmailSendMessageFunction;
  sendTestMessage?: EmailSendTestMessageFunction;
}

export interface SocialConnector<T> extends BaseConnector<T> {
  getAuthorizationUri: GetAuthorizationUri;
  getUserInfo: GetUserInfo;
}
```

若是要了解连接器接口的设计和连接器类型中方法的定义，参见 [`@logto/connector-types`](https://github.com/logto-io/logto/blob/master/packages/connector-types/src/index.ts)。

关于 _ConnectorMetadata_ 的参考，见「[连接器 - ConnectorMetadata](../../../references/connectors/README.mdx#连接器的-本地储存connectormetadata)」。

- 连接器的 `validateConfig` 方法对于所有类型的连接器都是必须的。
- 所有 _邮件连接器_ 和 _短信连接器_ 都需要 `sendMessage` 方法来调用发送信息的 API（使用的是数据库中的连接器配置）。开发者可以选择性地实现 `sendTestMessage` 方法，来在设置连接器时使用尚未保存的配置发送测试信息。
- 授权 URL 生成器 `getAuthorizationUri` 方法以及获取用户档案的 `getUserInfo` 方法对大多数 _社交连接器_ 都是必要的。
- 所有的 _社交连接器_ 都应该有用用户授权拿到的 authorization code（授权码）交换得到 access token（访问令牌）的 `getUserInfo` 方法。

:::tip
连接器的类型实现具体应该包含哪些方法，因其类型而异。

想知道为什么 _社交连接器_ 一定要包含某些特定的方法？<br/>
来看看「[_OAuth 2.0_ 协议](https://oauth.net/2/)」吧！
:::

:::note
对于大多数 _社交连接器_ 来说，在终端用户授权的前提下最终获取到用户档案的流程可以分为两个步骤（假设终端用户授权成功）：

1. 通过连接器服务商授予的 `authCode` 获取 `accessToken`。
2. 用 `accessToken` 请求可以公开访问的用户档案。

:::
