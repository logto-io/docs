---
slug: /security/captcha/friendly-captcha
sidebar_label: Friendly Captcha
---

# Friendly Captcha

[Friendly Captcha](https://friendlycaptcha.com) v2 is a privacy-first, GDPR-compliant CAPTCHA service based on proof-of-work without visual puzzles. This guide walks you through setting up Friendly Captcha with Logto.

## Prerequisites {#prerequisites}

- A Friendly Captcha account

## Get the sitekey and API key {#get-the-sitekey-and-api-key}

1. Log in to the [Friendly Captcha dashboard](https://app.friendlycaptcha.com) and go to **Applications**.
2. Click **+ New Application** and select **v2**.
3. If you restrict allowed origins on the application, add your Logto endpoint domain (e.g., `https://[tenant-id].logto.app`).
4. Ensure the global endpoint (`global.frcapi.com`) is enabled, and copy the **Sitekey** (starts with `FC`).
5. Open **API Keys** in the dashboard, create a new **API key**, and copy it.

## Configure Logto {#configure-logto}

1. Go to **Console > Security > CAPTCHA**, select **Friendly Captcha**, and enter the **Site key** and **API key**.
2. Alternatively, configure it via the Management API (`PUT /api/captcha-provider`):

```json
{
  "config": {
    "type": "FriendlyCaptcha",
    "siteKey": "<siteKey>",
    "secretKey": "<apiKey>"
  }
}
```

:::note
While Friendly Captcha is enabled, Logto's built-in sign-in page automatically allows `https://*.frcapi.com` (`connect-src`), `'wasm-unsafe-eval'` (`script-src`), and `worker-src 'self' blob:` in its Content Security Policy.
:::

## Bring your UI {#bring-your-ui}

If you use [Bring your UI](/customization/bring-your-ui/), Logto can't inject or run Friendly Captcha in your custom frontend automatically. After enabling CAPTCHA in Logto Console, your custom UI must load `@friendlycaptcha/sdk`, mount the widget, wait for the completion token, and send it to the Experience API.

Install the Friendly Captcha v2 SDK in your custom UI project:

```bash
npm install @friendlycaptcha/sdk
```

Add a container for the widget:

```html
<div id="friendly-captcha-container"></div>
```

Mount the widget with `FriendlyCaptchaSDK`, wait for `frc:widget.complete` to read `event.detail.response`, pass that single-use token as `captchaToken` in `PUT /api/experience`, and reset via `widget.reset()` after consuming the token so retries obtain a fresh token:

```js
import { FriendlyCaptchaSDK } from '@friendlycaptcha/sdk';

const sdk = new FriendlyCaptchaSDK();
const element = document.querySelector('#friendly-captcha-container');

const widget = sdk.createWidget({
  element,
  sitekey: '<siteKey>',
});

const getCaptchaToken = () => {
  if (widget.getState() === 'completed') {
    return Promise.resolve(widget.getResponse());
  }

  return new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('frc:widget.complete', onComplete);
      widget.removeEventListener('frc:widget.error', onError);
    };

    const onComplete = (event) => {
      cleanup();
      resolve(event.detail.response);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail.error.detail || event.detail.error.code));
    };

    widget.addEventListener('frc:widget.complete', onComplete);
    widget.addEventListener('frc:widget.error', onError);

    if (['init', 'reset', 'unactivated'].includes(widget.getState())) {
      widget.start();
    }
  });
};

// Before starting the interaction, obtain the single-use token:
const captchaToken = await getCaptchaToken();

try {
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
} finally {
  // Tokens are single-use; reset the widget so retries obtain a fresh token.
  widget.reset();
}
```

## Enable CAPTCHA {#enable-captcha}

Remember to enable CAPTCHA bot protection after you have set up the CAPTCHA provider.

Go to the Security page, find the CAPTCHA tab, and switch on the toggle button of "Enable CAPTCHA".
