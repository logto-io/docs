---
sidebar_label: WebAuthn (Passkey)
sidebar_position: 3
---

# WebAuthn (Passkey)

_Added in v1.11.0_

WebAuthn provides a more secure and user-friendly alternative to traditional passwords. By using public-key cryptography, WebAuthn enhances security by linking the user's device, the service domain, and the user ID, effectively countering phishing and password attacks. Compatible with various devices or browsers, and allows users to employ biometrics and hardware security features for convenient authentication. Logto now supports WebAuthn for Multi-Factor Authentication (MFA).

## Concepts

Customers always know Passkey rather than WebAuthn, so what’s the relationship between them, and how to use them? Let's explore these concepts:

- **Passkey**: A passkey is a FIDO-based, phishing-resistant credential to replace passwords. It utilizes asymmetric public-key cryptography for enhanced security. It can be hardware tokens or security keys, such as USB or Bluetooth devices. Since "Passkey" is the authentication method displayed to users, it should be used within your product client.
- **WebAuthn**: It is a JavaScript API developed by the W3C and FIDO Alliance, that empowers web applications authentication with FIDO2 standards. Passkey is one of the authentication methods WebAuthn supports. In the Logto Console, we professionally refer to this integration as "WebAuthn.”

WebAuthn provides diverse authenticators for users to choose from, available in two types for local and cloud usage:

- **Platform authenticator (Internal authenticator)**: It is tied to a single and specific device OS, such as a computer, laptop, phone, or tablet, which the user signs in with. It works exclusively on the device for authorization using methods like biometrics or a device passcode, so it's a quick way to authenticate. E,g,. iCloud Keychain verified by Touch ID, Face ID, or device passcode on macOS or iOS; Windows Hello verified by facial recognition, fingerprint, or friendly PIN.
- **Roaming authenticator (External authenticator, Cross-platform authenticator)**: It is a separate, portable device or software application, such as a hardware security key or a smartphone. It should link the device using USB or keeping NFC or Bluetooth on. The roaming authenticator is not limited to a single device or browser, providing greater flexibility.

To delve deeper into the principles and processes of WebAuthn, you can refer to our blog posts: [WebAuthn and Passkey 101](https://blog.logto.io/web-authn-and-passkey-101/) and [Things you should know before integrating WebAuthn](https://blog.logto.io/webauthn-base-knowledge/).

## Pay attention to limitations

It's essential to be aware of some limitations when implementing WebAuthn:

1. **Platform and browser limitation**: It's important to note that Logto does not currently offer WebAuthn support for native applications. Additionally, the availability of WebAuthn authenticators depends on browser and device capabilities ([Check the list](https://caniuse.com/?search=webauthn)). Therefore, WebAuthn is always not the sole option for implementing Multi-Factor Authentication (MFA), otherwise, you can control which browsers and devices can access your product.
2. **Domain limitation**: Changing the domain can hinder user verification through their existing WebAuthn accounts. Passkeys are bound to the specific domain of the current web page and cannot be used across different domains.
3. **Device limitation**: Losing the device can result in a loss of access to their accounts, especially for those relying on "This device" Platform Authenticators. To enhance authentication access, it's advisable to provide users with more than one authentication factor.

## Auth flows

The Passkey specification requires users to actively click the button on the current page to initiate the authentication component. This means that in both the setup and verification flows, users should be redirected to the landing page to initiate WebAuthn.

- **Setup flows**

![WebAuthn setup flow](./assets/webauthn-setup-flow.webp)

- **Verification flows**

![WebAuthn verification flow](./assets/webauthn-verification-flow.webp)
