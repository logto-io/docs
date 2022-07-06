---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TokenValidation from './fragments/\_token_validation.mdx';
import TokenExtract from './fragments/\_token_extract.mdx';
import SecretKey from './fragments/\_secret_key.md';

# ⚔️ Protect your API

With a fluent user sign-in experience, by default, Logto comes with the [API resources](../../references/resources/README.md) authorization service. It will help you protect your APIs resources from anonymous identities. Let's walk through the following steps and implement the API resource authorization guard of your own using Logto.

## Register the API resources through Logto **Admin Console**

Logto will identify the registered [API resources](../../references/resources/README.md) from an authorization request and issue an audience-restricted `access_token` accordingly.

Go to the **API Resources** section in **Admin Console**. You will notice a build-in resource listed with the API identifier as `https://api.logto.io.` This resource indicates all the management APIs you may use to maintain the Logto service. It will guarantee all our APIs are under protection and restricted to the Logto authorized users with Admin Role.

<!-- TODO: Replace the API resource AC screenshot -->

![](/img/docs/api_resource_landing.png)
<br />
<br />

Next, click on the **Create API Resource** button and fill out the form to register your API resource:

- A human-readable **API Name** that may better helps you to identify this entity.
- A unique **API Identifier** (a.k.a. [Resource Indicator](../../references/resources/README.md#resource-indicator)) variable in URI format. It represents the resource's identity you'd like to guard.

<!-- TODO: Replace the API resource AC screenshot -->

![](/img/docs/api_resource_create.png)
<br />
<br />

:::caution
The API Identifier is unique and used as the single source of truth of resource indicator for Logto. **NOT** editable once created. Be careful when you make it.
:::

The new API will show up on the list once created. You may manage or delete it on the API details page by clicking on the entity row.

<!-- TODO: Replace the API resource AC screenshot -->

![](/img/docs/api_resource_manage.png)
<br />
<br />

See [API Resource Logto Schema](../../references/resources/README.md#logto-api-resource-schema) for detailed API setting definitions.

:::info
All the API Resources record registered in Logto **Admin Console** will be shared across all your applications.
:::

## Integrate the resources authorization flow into your client application

Once we have your API resource well registered at the Logto server, we may move forward to your applications and see how Logto SDK works.

:::note
If you haven't integrated Logto SDK with your application yet, we highly recommend you to go through our SDK's [**Integration Guide**](../integrate-logto/README.md). Logto has various SDKs developed for you. Stick with your business, and let us do the "heavy-duty."
:::

With Logto SDK, all you need is to pass those resource indicators to the SDK configs when it is initiated.

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
import LogtoClient from '@logto/browser';

const logtoClient = new LogtoClient({
  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001
  appId: '<your-application-id>',
});
```

</TabItem>
</Tabs>

Take a breath here. Your application is almost ready 😊. We have Logto SDK well configured at this point. Users could sign in / sign up through the Logto UI flow now.

After end-users successfully log in, they may try to get access to some of your backend API resources through the client application upon their request. We'll need to loop Logto in again at this point. Call the Logto server through our SDK to request an `access_token` before making your API request.

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

If the client is well-authorized, a [JWT](https://datatracker.ietf.org/doc/html/rfc7519) format `access_token` will be granted and issued by Logto, specifically for the requested resource entity, encrypted, audience-restricted, and with an expiration time. Carry all the necessary info that can represent the authority of this request.

Append the token to your request's Authorization header as the Bearer token:

i.e.

```bash
GET https://logto.dev/api/users

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek

```

Now you have your application well equipped. All the requests from a sign-in user through your application will be well-authorized. Let's go back to your server-side and block out those anonymous attempts.

## Parse and Validate the API request's authorization token

The most crucial step, protect your API resources with trustworthy token validation.

As mentioned above, all the authorized requests should carry an [JWT](https://datatracker.ietf.org/doc/html/rfc7519) format `assess_token` issued by Logto in its Authorization header.

<SecretKey />

<TokenExtract />

<TokenValidation />

## Reference

Logto uses the code-based OAuth 2.0 Authorization Protocol to make your API request safer. If you are interested in the strategy behind it, refer to OAuth 2.0's [official document](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1) for more details.
