---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA bot protection

CAPTCHA bot protection helps secure your user flows by verifying that users are human, significantly reducing bot attacks. Logto supports leading providers such as Google reCAPTCHA Enterprise and Cloudflare Turnstile.

## Enabling CAPTCHA bot protection {#enabling-captcha-bot-protection}

Follow these steps to activate CAPTCHA for your user flows (sign-in, registration, and password recovery):

1. **Navigate to settings**: Go to **Console > Security > Bot protection**.
2. **Select provider**: Choose your preferred CAPTCHA provider (e.g., Google reCAPTCHA Enterprise or Cloudflare Turnstile).
3. **Configuration**: Follow the instructions on the left side of the page to configure the selected CAPTCHA provider.
4. **Save**: Click **Save and done** to apply your settings.
5. **(Optional) Enable CAPTCHA**: CAPTCHA will automatically be enabled on the security page once a provider is configured. However, you can manually verify or adjust settings as needed.

## Previewing CAPTCHA integration {#previewing-captcha-integration}

You have two options to preview and test CAPTCHA integration:

1. **Use your application**: Navigate to your application's sign-in, registration, or password recovery pages and attempt the respective user actions.
2. **Demo app**: Go to **Get started** and use the provided demo application to test CAPTCHA functionality.

Ensure the CAPTCHA challenge appears as expected in either option.

## Supported providers {#supported-providers}

Currently, we support:

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
