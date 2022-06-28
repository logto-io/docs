---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ⚔️ Protect your API

Along with a fluent user sign-in experience, by default, Logto comes with the [API resources](../../references/resources/README.md) authorization service. It will help you protect the private APIs resources from anonymous identities. Let's walk through the following steps and implement the API resource authorization guard of your own using Logto.

## Register the API resource through Logto **Admin Console**

Logto will identify the registered [API resources](../../references/resources/README.md) from an authorization request and issue an audience-restricted `access_token` accordingly.

Go to the **API Resources** section in **Admin Console**. You will notice a build-in resource listed with the API identifier as `https://api.logto.io`. This resource indicates all the management APIs you may use to maintain Logto service. It will guarantee all our APIs are under protection and restricted to the Logto authorized users with Admin Role.

<!-- TODO: Replace the API resource AC screenshot -->

![](/img/docs/api_resource_landing.png)
<br />
<br />

Next, click on the **Create API Resource** button to register your own API resource by entering:

- A human-readable **API Name** that may better helps you to identify this entity.
- A unique **API Identifier** (a.k.a. [Resource Indicator](../../references/resources/README.md#resource-indicator)) variable in URI format. It represents the resource's identity you'd like to guard.

<!-- TODO: Replace the API resource AC screenshot -->

<img src="/img/docs/api_resource_create.png" width="100%" />
<br />
<br />

:::caution
The API Identifier is unique and used as the single source of truth of resource indicator for Logto. **NOT** editable once created. Be careful when you create it.
:::

The new API will show up on the list once created. You may manage or delete it on the API details page by clicking on the entity row.

<!-- TODO: Replace the API resource AC screenshot -->

<img src="/img/docs/api_resource_manage.png" width="100%" />
<br />
<br />

See [API Resource Logto Schema](../../references/resources/README.md#logto-api-resource-schema) for detailed API setting definitions.

:::info
All the API Resources record registered in Logto **Admin Console** will be shared across all your applications.
:::

## Register the API resources to your client application

Once we have your API resource well registered at the Logto server, we may move forward to your applications and see how Logto SDK do its work.

:::note
If you haven't integrate Logto SDK with your application yet, we highly recommend you to go through our SDK's [**Integration Guide**](../integrate-logto/README.md). Logto has various SDKs developed for you. Stick with your business, and let us do the "heavy-duty."
:::

With Logto SDK, all you need is to pass-in those resource indicators to the SDK configs when it is initiated.

<Tabs>

<TabItem value="kotlin" label="Kotlin">

```kotlin
import io.logto.sdk.android.LogtoClient
import io.logto.sdk.android.type.LogtoConfig

class MainActivity : AppCompatActivity() {
  var resources = listOf("<your-api-resource>");

  val logtoConfig = LogtoConfig(
    endpoint = "<your-logto-endpoint>",
    appId = "<your-app-id>",
    scopes = null,
    resources = resources,
    usingPersistStorage = true,
  )

  val logtoClient = LogtoClient(logtoConfig, application)
}
```

</TabItem>

<TabItem value="java" label="Java">

```java
import io.logto.sdk.android.LogtoClient;
import io.logto.sdk.android.type.LogtoConfig;

public class MainActivity extends AppCompatActivity {
    private LogtoClient logtoClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        List<String> resources = Arrays.asList("<your-api-resource>");

        LogtoConfig logtoConfig = new LogtoConfig(
            "<your-logto-endpoint>",
            "<your-app-id>",
            null,
            resources,
            true
        );

        logtoClient = new LogtoClient(logtoConfig, getApplication());
    }
}
```

</TabItem>

<TabItem value="swift" label="Swift">

```swift
import Logto

let config = try? LogtoConfig(
  endpoint: "<your-logto-endpoint>",
  appId: "<your-application-id>"
  resources: ["<your-api-resource>"]
)
let logtoClient = LogtoClient(useConfig: config)
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
// TODO:
```

</TabItem>
</Tabs>

Take a breath here. Your application is almost ready 😊. Logto SDK is well configured at this point. Users could sign in / sign up through the Logto UI flow now.

After end-users successfully log in, they may try to get access to some of your backend API resources through the client application upon their request. We'll need to loop Logto in again at this point. Call Logto server through our SDK to request an `access_token` before making your actual API request.

:::note

The requested target resource should be:

1. Registered in Logto server.
2. Initiated as configs into the Logto SDK at your application.

:::

<Tabs>
<TabItem value="kotlin" label="Kotlin">

```kotlin
logtoClient.getAccessToken("<your-target-api-resource>", { logtoException: LogtoException?, result: AccessToken? ->
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

If the client is well-authorized, a [JWT](https://datatracker.ietf.org/doc/html/rfc7519) format `access_token` will be granted and issued by Logto, specifically for the requested resource entity, encrypted, audience-restricted, and with a lifetime. Carry all the necessary info that can represent the authority of this request.

Append the token to your request's Authorization header as the Bearer code:

i.e.

```bash
GET https://logto.dev/api/users

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek

```

Now you have your application well equipped. All the requests that come from a log-in user through your application will be well-authorized. Let's go back to your server-side, and block out those anonymous attempts.

## Validate the API request's authorization

The most important step, protect your API resources with the trustworthy token validation.

As mentioned above, all the authorized requests should carry an [JWT](https://datatracker.ietf.org/doc/html/rfc7519) format `assess_token` issued by Logto in its Authorization header.

### Get the JWK Public Key

All tokens issued by logto are signed with [JWK](https://datatracker.ietf.org/doc/html/rfc7517). ( See [JWS](https://datatracker.ietf.org/doc/html/rfc7515) for details)
You will need a public key to verify the signature of the Bearer Token(_access_token_) before moving on.

The key set can be inquired through Logto's **jwks_uri**: `https://<your-logto-domain>/oidc/jwks`.

:::note
All the latest Logto Authorization Server Configurations can be found by `https://<your-logto-domain>/oidc/.well-known/openid-configuration`. Including the **jwks_uri** and other authorization configs.
:::

As a response, you will get a JWKS ( JSON Web Key Sets). **Keep it** on your server. You will need it to verify all the requests' token signatures.

### Validate the existence and extract the Bearer Token from Headers

The request should contains a `Authorization` header with a `Bearer <access_token>` format. Extract the Bearer Token from request header:

<Tabs>

<TabItem value="js" label="NodeJs">

```js
import { IncomingHttpHeaders } from 'http';

const extractBearerTokenFromHeaders = ({ authorization }: IncomingHttpHeaders) => {
  assertThat(authorization, new Error({ code: 'auth.authorization_header_missing', status: 401 }));

  assertThat(
    authorization.startsWith('Bearer'),
    new Error({ code: 'auth.authorization_token_type_not_supported', status: 401 })
  );

  return authorization.slice(bearerTokenIdentifier.length + 1);
};
```

</TabItem>
<TabItem value="java" label="java">
// TODO:
</TabItem>

</Tabs>

### Token Validation

A encoded [JWS](https://datatracker.ietf.org/doc/html/rfc7515) token is constructed with three parts:

- JOSE Header: Declares the code type and encode algorithm
- JWS Payload: Includes all the token's claims
- JWS Signature: Signature signed with JWK

A standard schema of Logto JWS Payload: (claims may very, based on your OIDC config)

| key       | description                |
| --------- | -------------------------- |
| jti       | unique JWT ID              |
| sub       | subject, usually user id   |
| iat       | timestamp token issues at  |
| exp       | timestamp token expires at |
| client_id | application id             |
| iss       | token issuer identity      |
| aud       | audience of the token      |

:::note
For development, you could use a handy site, [jwt.io](https://jwt.io/), to decode and check the tokens you received. Be careful with the tokens come from production env, as the service is provided by a third party, and your token may be toasted.
:::

The Bearer Token should be accepted only if:

- the token's signature is verified
- the token's issuer is `https://<your-logto-domain>/oidc` (issued by the Logto server)
- the token's audience is the current API indicator (audience-restricted)
- the token is with n its valid lifetime

There are various open source tools that can help you tovalid the tokens easily:

<Tabs>
<TabItem value="js" label="Express">

Use [jose](https://github.com/panva/jose) to validate the token's signature, expiration status, and the required claims easily.

```bash
  npm install jose --save
```

```js
import { jwtVerify } from 'jose';

const { payload } = await jwtVerify(
  token,  // The raw Bearer Token extracted from the request header
  publicKey, // jwks inquired from Logto server
  {
    issuer, // expected issuer of the token, should be https://<your-logto-domain>/oidc (issued by the Logto server)
    audience: // expected audience token, should be the resource indicator of the current API
  });
```

</TabItem>
  <TabItem value="java" label="Spring">
  // TODO:
  </TabItem>
</Tabs>

## Reference

Logto uses the Code Based OAuth 2.0 Authorization Protocol to make your API request flow more secure. If you are interested in the strategy behind , please refer to OAuth 2.0's [official document](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1) for more details.
