Connector's class is an implementation among _SMSConnector_, _EmailConnector_, and _SocialConnector_.

Here is an interface definition of different types of connectors.

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

To see connector methods' definition and build a picture of connector interface design, see [`@logto/connector-types`](https://github.com/logto-io/logto/blob/master/packages/connector-types/src/index.ts). You can also find _ConnectorMetadata_ reference at "[Connectors](../../references/connectors)".

- A connector `validateConfig` is obligatory for all connectors.
- All _SMS Connectors_ and _Email Connectors_ require a `sendMessage` method to call providers message sending APIs using configs from the database. Developers can choose to implement a `sendTestMessage` method to send a testing message with unsaved config in the text input box while setting connectors up.
- Authorization URL generator `getAuthorizationUri` and user profile retriever `getUserInfo` are required for all _Social Connectors_.
- The `getUserInfo` method, which can retrieve an access token with an authorization code, is expected for most _Social Connectors_.

:::tip
The methods required by connectors vary by connector type.

Trying to figure out why _Social Connector_ requires some specific methods?<br/>
Go and check out [_OAuth 2.0_ protocol](https://oauth.net/2/).
:::

:::note
For most of the _Social Connectors_, obtaining a user profile with end-users authorization follows a two-step scheme (assume that user authorization succeeds):

1. Fetch `accessToken` by a connector vendor granted `authCode`.
2. Request for a publicly accessible user profile using `accessToken`.

:::
