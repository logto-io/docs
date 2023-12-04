---
sidebar_label: SMS connector
sidebar_position: 2
---

# Configure SMS Connector

Configuring an SMS connector allows you to send a one-time password (OTP) to the user's phone number. This passwordless authentication mechanism can be utilized in various scenarios, including sign-up, sign-in, forgot password, and link-account processes, to validate the user's identity. It streamlines user authentication and enhances security by minimizing the risk of password-related breaches.

Logto has some built-in SMS connectors which allow out-of-box usage:

- [Twilio SMS](https://github.com/logto-io/logto/tree/master/packages/connectors/connector-twilio-sms)
- [Aliyun SMS](https://github.com/logto-io/logto/tree/master/packages/connectors/connector-aliyun-sms)
- [Tencent SMS](https://github.com/logto-io/logto/tree/master/packages/connectors/connector-tencent-sms)
- [SMS Aero service](https://github.com/logto-io/logto/tree/master/packages/connectors/connector-smsaero)

:::tip
We're still working on more connectors! But If you don't see the connector you want, just let us know your needs in Discord or file a Feature Request on GitHub.
For those using the Logto Open-Source Version, we offer the flexibility to [create your own connector](../../configure-connectors/create-your-connector/README.md) to extend.
:::
