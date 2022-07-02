Connector's class is an implementation among _SMSConnector_, _EmailConnector_, and _SocialConnector_.

Here is an interface definition of different types of connectors.

```typescript
interface BaseConnector {
  metadata: ConnectorMetadata;
  validateConfig: ValidateConfig;
  getConfig: GetConnectorConfig;
}

interface SmsConnector extends BaseConnector {
  sendMessage: SmsSendMessageFunction;
}

interface EmailConnector extends BaseConnector {
  sendMessage: EmailSendMessageFunction;
}

interface SocialConnector extends BaseConnector {
  getAuthorizationUri: GetAuthorizationUri;
  getUserInfo: GetUserInfo;
}
```

To see connector methods' definition and build a picture of connector interface design, see [`@logto/connector-types`](https://github.com/logto-io/logto/blob/master/packages/connector-types/src/index.ts). You can also find _ConnectorMetadata_ reference at "[Connectors](../../references/connectors)".

- A connector `validateConfig` is obligatory for all connectors.
- All _SMS Connectors_ and _Email Connectors_ require a `sendMessage` method to call providers message sending APIs.
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
