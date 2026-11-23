---
slug: /security/captcha/geetest
sidebar_label: GeeTest
---

# GeeTest

[GeeTest](https://www.geetest.com) CAPTCHA v4 is an adaptive CAPTCHA service with localized challenges, widely used in mainland China where global providers such as Google reCAPTCHA may be hard to reach. This guide will walk you through the process of setting up GeeTest CAPTCHA v4 with Logto.

## Prerequisites {#prerequisites}

- A GeeTest account with CAPTCHA v4 enabled.

## Get the CAPTCHA ID and key {#get-the-captcha-id-and-key}

1. Log in to the [GeeTest dashboard](https://auth.geetest.com/login).
2. Create an application and a **CAPTCHA v4** event.
3. Copy the **CAPTCHA ID** and **CAPTCHA key** from the dashboard.

## Configure Logto {#configure-logto}

1. Go to **Console > Security > CAPTCHA**.
2. Choose **GeeTest** as the CAPTCHA provider.
3. Enter the **CAPTCHA ID** and **CAPTCHA key** you copied from the GeeTest dashboard, and save your changes.

Alternatively, you can configure GeeTest via the Management API (`PUT /api/captcha-provider`) with `type` set to `"Geetest"`, `siteKey` set to your CAPTCHA ID, and `secretKey` set to your CAPTCHA key:

```json
{
  "config": {
    "type": "Geetest",
    "siteKey": "<captchaId>",
    "secretKey": "<captchaKey>"
  }
}
```

:::note
Logto's built-in sign-in experience initializes GeeTest v4 in `bind` mode, maps the UI language automatically, and updates Content Security Policy headers to permit GeeTest SDK, API, and static origins while GeeTest is enabled.
:::

## Bring your UI {#bring-your-ui}

If you use [Bring your UI](/customization/bring-your-ui/), Logto can't inject or run GeeTest in your custom frontend automatically. After enabling CAPTCHA in Logto Console, your custom UI must load the GeeTest v4 script, run the challenge, and send the serialized validation result as `captchaToken` to the Experience API.

Load the GeeTest v4 script in your custom UI:

```html
<script src="https://static.geetest.com/v4/gt4.js" async defer></script>
```

Before starting the interaction, initialize GeeTest v4 in `bind` mode with `window.initGeetest4`, call `captcha.showCaptcha()`, and read the validation result from `captcha.getValidate()` inside `onSuccess`. Because `captcha.getValidate()` returns four fields (`lot_number`, `captcha_output`, `pass_token`, and `gen_time`), serialize the object with `JSON.stringify(validate)` and pass it as `captchaToken` in `PUT /api/experience`:

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.initGeetest4(
    {
      captchaId: '<captchaId>',
      product: 'bind',
      onError: reject,
    },
    (captcha) => {
      captcha
        .onReady(() => {
          captcha.showCaptcha();
        })
        .onSuccess(() => {
          const validate = captcha.getValidate();

          if (!validate) {
            reject(new Error('Missing GeeTest validation result'));
            return;
          }

          // `validate` contains: lot_number, captcha_output, pass_token, gen_time
          resolve(JSON.stringify(validate));
        })
        .onError(reject)
        .onClose(() => {
          reject(new Error('GeeTest CAPTCHA was closed'));
        });
    }
  );
});

await fetch('/api/experience', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    interactionEvent: 'SignIn',
    captchaToken,
  }),
});
```

## Enable CAPTCHA {#enable-captcha}

Remember to enable CAPTCHA bot protection after you have set up the CAPTCHA provider.

Go to the Security page, find the CAPTCHA tab, and switch on the toggle button of "Enable CAPTCHA".
