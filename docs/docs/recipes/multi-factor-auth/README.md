---
sidebar_position: 3.1
---

# 🛡️ Multi-factor auth

_Added in v1.11.0_

Logto offers a minimal-effort configuration process, allowing you to enable MFA with a single click. Our comprehensive MFA flows prioritize security and balance user experience.

## What is MFA?

MFA, or Multi-Factor Authentication, is a security method that adds an extra layer of protection during the login process. It requires users to provide multiple credentials to establish their digital identity. There are two primary types of authentication:

- **SFA/1FA (Single-Factor Authentication)**: This is the initial login method, typically requiring a username/email/phone and password.
- **MFA/2FA (Multi-Factor Authentication/Two-Factor Authentication)**: MFA mandates at least two different verification methods for accessing your account, effectively strengthening your defense against unauthorized access.

Authentication factors are the moves that prove you're really you. There are lots of factors divided by attributes to choose from:

| Types      | What it means      | Verification factors (Logto supported)                                    |
| ---------- | ------------------ | ------------------------------------------------------------------------- |
| Knowledge  | Something you know | Password, Email verification code, Backup code                            |
| Possession | Something you have | SMS verification code, Authenticator app OTP, Hardware OTP (Security key) |
| Inherence  | Something you are  | Biometrics like fingerprints, face ID                                     |

In an MFA flow, it's essential that the second authentication step uses a different attribute type (Knowledge/Possession/Inherence) from the first. For instance, combining "Password (Knowledge)" as the 1FA and "Authenticator app OTP (Possession)" as the 2FA can effectively thwart various attack vectors.

## Why do we need MFA?

MFA is a vital security measure, particularly for B2B and B2E services, and it's recommended for B2C applications as well. Here's why it's crucial:

- **Account Hacking**: Unauthorized access to accounts is a prevalent security concern, but MFA provides robust protection, blocking 99.9% of account hacks (especially for password breaches). It's a cost-effective way to enhance security, complemented by options like passwordless logins, password policies, password managers, and attack protection measures.
- **SaaS Adoption**: A significant number of enterprises are adopting MFA to safeguard their employees and protect sensitive company data and assets. A survey by LastPass revealed that 57% of global businesses now use MFA, marking a 12% increase from the previous year.
- **Regulatory Compliance**: MFA helps organizations stay compliant with data protection regulations such as GDPR and NIST, ensuring the security of user data.

## Logto support

Logto simplifies the process of enabling MFA by offering a one-click toggle, requiring no complex configurations. Get started with our quick guide on how to [Enable Verification Factors](./config-mfa).

We also provide support for two MFA policies: User-Controlled and Mandatory MFA, with Adaptive MFA on the horizon. Learn more about configuring these policies in our guide on [Setting MFA Policies](./config-mfa).

Additionally, you have the flexibility to customize your User Account Settings and Profile pages through our [Management API](/docs/tutorials/get-started/explore-management-api). This functionality includes the ability to manage the Authenticator app OTP and Backup codes, with WebAuthn support coming soon.

Learn more about the usage and user flow for each verification factor, including [Authenticator app OTP](./authenticator-app-otp), [WebAuthn (Passkey)](./webauthn), and [Backup codes](./backup-code) in our dedicated resources.
