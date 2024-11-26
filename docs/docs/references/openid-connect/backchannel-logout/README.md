import Availability from '@components/Availability';

<head>
  <link rel="canonical" href="https://docs.logto.io/end-user-flows/sign-out/#federated-sign-out-back-channel-logout" />
</head>

# Backchannel logout

<Availability cloud oss={{ major: 1, minor: 18 }} />

Logto supports the backchannel logout mechanism as defined in the [OpenID Connect Back-Channel Logout 1.0](https://openid.net/specs/openid-connect-backchannel-1_0.html) specification. This mechanism allows the RP (Relying Party) to receive logout notifications from the OP (OpenID Provider) when a user logs out from the OP.

## How it works

When a user logs out from the OP, the OP sends a logout notification to the RPs that have registered for backchannel logout. The RP must validate the logout notification and log out the user from the RP if the notification is valid.

## Registering for backchannel logout

To register for backchannel logout, navigate to the application details page in the Logto Console and locate the "Backchannel logout" section. Enter the backchannel logout URL of your RP and click "Save".

You can also enable session requirements for backchannel logout. When enabled, Logto will include the `sid` claim in the logout token.

For programmatic registration, you can set the `backchannelLogoutUri` and `backchannelLogoutSessionRequired` properties in the application `oidcClientMetadata` object.

## I'm not receiving logout notifications

If you're not receiving logout notifications, check the following:

- Ensure that the backchannel logout URL is correct.
- Check if the application to receive logout notifications is in the same session as the application that initiated the logout.
