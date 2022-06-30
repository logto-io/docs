Connector's class is an implementation among _SMSConnector_, _EmailConnector_ and _SocialConnector_. See (TODO: add link to _@logto/connector-types_) to have a whole picture of connector types.

:::tip
The function requirements vary by different connector types.

Trying to figure out the reason why these following mentioned methods are required for _Social Connector_?<br/>
Find more on (TODO: link to intro page of OAuth 2.0)
:::

- A connector config validator is obligatory for all connectors.
- A `sendMessage` method should be implemented in all _SMS Connectors_ and _Email Connectors_.
- "Authorization URL generator" and "user profile extractor" are required for all _Social Connectors_.
- "Get access token with authorization code" method is also expected for most _Social Connectors_.

:::note
For most of the _Social Connectors_, getting user profile with end-user's authorization is a two-step method (assume that user authorization succeed):

1. Exchange `accessToken` with `authCode` which is granted by connector vendor.
2. Request for open user profile using `accessToken`.
   :::
