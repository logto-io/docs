import Availability from '@components/Availability';

<head>
  <link rel="canonical" href="https://docs.logto.io/end-user-flows/sign-in-flow-parameters/" />
</head>

# Authentication parameters

In addition to the parameters required by the [OpenID Connect Core specification](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest), Logto supports the following parameters in the authentication request for better customization:

- `first_screen`: The first screen to show for the authentication process.
- `direct_sign_in`: Whether to skip the first screen and invoke the sign-in process directly.

## First screen

<Availability cloud oss={{ major: 1, minor: 20 }} />

This parameter allows you to customize the first screen that users see when they start the authentication process.
The value for this parameter can be:

- `sign_in`: Allow users to directly access the sign-in page.
- `register`: Allow users to directly access the registration page.
- `single_sign_on`: Allow users to directly access the single sign-on (SSO) page.
- `identifier:sign_in`: Allow users to direct access a page that only display specific identifier-based sign-in methods to users.
- `identifier:register`: Allow users to direct access a page that only display specific identifier-based registration methods to users.
- `reset_password`: Allow users to directly access the password reset page.

If omitted, the default value is `sign_in`.

:::note
In OSS version, the `first_screen` parameter has been supported since version 1.15.0 for `signIn` and `register`.
However, now the `signIn` value has been deprecated and should now be replaced with `sign_in`
:::

You can specify an additional `identifier` parameter to focus the screen on a specific identifier if you're using the following values for the `first_screen` parameter:

- `identifier:sign_in`
- `identifier:register`
- `reset_password`

Valid `identifier` values are `username`, `email`, and `phone`. Multiple identifiers can be specified by separating them with spaces.

:::note
Unsupported identifiers in the sign-in experience configuration will be ignored. If all specified identifiers are unsupported, the default sign-in experience configuration will be used. If no identifier is supported in the sign-in experience configuration, the user will be redirected to the sign-in page.
:::

Below is a non-normative example of an authentication request with the `first_screen` parameter:

```bash
curl --location \
  --request GET 'https://[tenant-id].logto.app/oidc/auth?client_id=1234567890&...&first_screen=identifier:sign_in&identifier=email username'
```

:::info
When `first_screen` is set, the legacy `interaction_mode` parameter is ignored.
:::

In supported Logto SDKs, you can set the `firstScreen` property when calling the `signIn` method:

```ts title="JavaScript"
/* For register screen */
logtoClient.signIn({
  redirectUri: 'https://your-app.com/callback',
  firstScreen: 'register',
});

/* For identifier sign-in screen */
logtoClient.signIn({
  redirectUri: 'https://your-app.com/callback',
  firstScreen: 'identifier:sign_in',
  /* JavaScript SDK using `identifiers` option to specify the `identifier` parameter */
  identifiers: ['email', 'username'],
});
```

:::note
We are gradually adding support for the `first_screen` parameter to all Logto SDKs. If you don't see it in your SDK, please open an issue or contact us.
:::

## Direct sign-in

<Availability cloud oss={{ major: 1, minor: 15 }} />

This parameter allows you to skip the first screen and invoke the sign-in process directly. A specific sign-in method needs to be specified in the request. The current supported formats are:

- `social:<idp-name>` (Use a social connector with the specified IdP name, e.g. `social:google`)
- `sso:<connector-id>` (Use the specified enterprise SSO connector, e.g. `sso:123456`)

:::info
The specified sign-in method must be enabled in the sign-in experience to work properly.
:::

### How to find the connector IdP name

In the Logto Console, navigate to the "Connectors" page and click on the connector you want to use. The identity provider name (IdP name) is displayed at the top of the connector settings.

![Connector IdP name](./assets/idp-name.webp)

### How to find the enterprise SSO connector ID

In the Logto Console, navigate to the "Enterprise SSO" page and click on the connector you want to use. The connector ID is displayed in the top section of the connector details.

![Enterprise SSO connector ID](./assets/enterprise-sso.webp)

### Fall back to the first screen

If the direct sign-in method fails, the user will be redirected to the first screen specified by the `first_screen` parameter.

### Examples

Here's a non-normative example of the authentication request with the `direct_sign_in` parameter:

```bash
curl --location \
  --request GET 'https://[tenant-id].logto.app/oidc/auth?client_id=1234567890&...&direct_sign_in=sso:123456'
```

In supported Logto SDKs, you can set the `directSignIn` property when calling the `signIn` method:

```ts title="JavaScript"
logtoClient.signIn({
  redirectUri: 'https://your-app.com/callback',
  directSignIn: 'sso:123456',
});
```

:::note
We are gradually adding support for the `direct_sign_in` parameter to all Logto SDKs. If you don't see it in your SDK, please open an issue or contact us.
:::
