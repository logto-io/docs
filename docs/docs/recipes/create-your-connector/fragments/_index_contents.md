The connector's type is a specification of either _SmsConnector_, _EmailConnector_, or _SocialConnector_.

Here is a detailed type definition for different kinds of connectors.

```typescript
type BaseConnector<Type extends ConnectorType> = {
  type: Type;
  metadata: ConnectorMetadata;
  configGuard: ZodType;
};

type SmsConnector = BaseConnector<ConnectorType.Sms> & {
  sendMessage: SendMessageFunction;
};

type EmailConnector = BaseConnector<ConnectorType.Email> & {
  sendMessage: SendMessageFunction;
};

type SocialConnector = BaseConnector<ConnectorType.Social> & {
  getAuthorizationUri: GetAuthorizationUri;
  getUserInfo: GetUserInfo;
};
```

To see connector methods' definition and build a picture of connector interface design, see [`@logto/connector-core`](https://github.com/logto-io/logto/blob/master/packages/connector-core/src/types.ts). You can also find _ConnectorMetadata_ reference at "[Connectors - ConnectorMetadata](../../../references/connectors/README.mdx#connectors-local-storage-connectormetadata)".

- A connector `validateConfig` is obligatory for all connectors and is closely based on the value of `configGuard`.
- All _Sms Connectors_ and _Email Connectors_ require a `sendMessage` method to call providers message sending APIs using configs from the database. Developers can choose to send a testing message with unsaved config via this method while setting connectors up.
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
