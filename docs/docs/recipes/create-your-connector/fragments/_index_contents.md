Connector's class is an implementation among _SMSConnector_, _EmailConnector_, and _SocialConnector_. See (TODO: add a link to _@logto/connector-types_) to build a picture of connector types and connector design.

- A connector config validator is obligatory for all connectors.
- All _SMS Connectors_ and _Email Connectors_ require a `sendMessage` method to call providers message sending APIs.
- Authorization URL generator and user profile retriever are required for all _Social Connectors_.
- The method, which can get an access token with an authorization code, is expected for most _Social Connectors_.

:::tip
The methods required by connectors vary by connector type.

Trying to figure out why _Social Connector_ requires some specific methods?<br/>
Go and check out (TODO: link to intro page of OAuth 2.0).
:::

:::note
For most of the _Social Connectors_, obtaining a user profile with end-users authorization follows a two-step scheme (assume that user authorization succeeds):

1. Swap `accessToken` with a connector vendor granted `authCode`.
2. Request for a publicly accessible user profile using `accessToken`.
:::
