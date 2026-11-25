---
slug: /security/captcha/cap
sidebar_label: Cap
---

# Cap

[Cap](https://capjs.js.org) is an open-source, self-hosted CAPTCHA alternative based on proof-of-work without visual puzzles or third-party service dependencies, making it well suited for regions where external CAPTCHA services are unreachable. This guide walks you through setting up Cap with Logto.

## Prerequisites {#prerequisites}

- A publicly reachable [Cap Standalone](https://capjs.js.org/guide/capd/index.html) instance over HTTPS, since both the browser sign-in page and Logto need access to it.

## Create a site key {#create-a-site-key}

1. Open the dashboard of your Cap Standalone instance and log in with your admin key.
2. Create a new site key. If you restrict CORS origins, add Logto's endpoint domain, such as `https://[tenant-id].logto.app`.
3. Copy the **Site key** and **Secret key**. The secret key is only shown once.

## Configure Logto {#configure-logto}

In **Console > Security > CAPTCHA**, choose **Cap** and fill in the following details:

- **Cap endpoint**: The base URL of your Cap Standalone instance, e.g., `https://cap.example.com`
- **Site key**: The site key you copied above
- **Secret key**: The secret key you copied above

Alternatively, you can configure Cap through the Management API with `PUT /api/captcha-provider`:

```json
{
  "config": {
    "type": "Cap",
    "endpoint": "https://cap.example.com",
    "siteKey": "<siteKey>",
    "secretKey": "<secretKey>"
  }
}
```

:::note
Use HTTPS for your Cap endpoint in production. Browsers block mixed HTTP requests from an HTTPS sign-in page, and HTTP sends the secret key unencrypted.
:::

## Security note {#security-note}

Cap's instrumentation challenge evaluates scripts in the browser to detect bots. While Cap is enabled, Logto's built-in sign-in page allows the Cap origin, blob workers, WebAssembly (`'wasm-unsafe-eval'`), and dynamic JavaScript evaluation (`'unsafe-eval'`) in its Content Security Policy.

## Bring your UI {#bring-your-ui}

If you use [Bring your UI](/customization/bring-your-ui/), Logto can't inject or run Cap in your custom frontend automatically. After enabling CAPTCHA in Logto Console, your custom UI must load `@cap.js/widget`, render the widget, and send the solved token to the Experience API.

Load `@cap.js/widget` in your custom UI (or install and bundle it in your frontend build):

```html
<script src="https://cdn.jsdelivr.net/npm/@cap.js/widget" async></script>
```

:::note
If you load `@cap.js/widget` from a CDN instead of bundling it, add the CDN origin (such as `https://cdn.jsdelivr.net`) to `scriptSrc` and `connectSrc` in your [custom CSP sources](/customization/bring-your-ui/#configure-custom-csp-sources) so the widget script and its WebAssembly solver can load.
:::

Add the `<cap-widget>` element pointing to your Cap Standalone endpoint and site key:

```html
<cap-widget data-cap-api-endpoint="https://cap.example.com/<siteKey>/"></cap-widget>
```

Listen for the `solve` event (`event.detail.token`), send the single-use token as `captchaToken` in `PUT /api/experience`, and reset the widget with `widget.reset()` after consuming it:

```js
await customElements.whenDefined('cap-widget');
const widget = document.querySelector('cap-widget');

const captchaToken =
  widget.token ??
  (await new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('solve', onSolve);
      widget.removeEventListener('error', onError);
    };

    const onSolve = (event) => {
      cleanup();
      resolve(event.detail.token);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail?.message ?? 'Cap verification failed'));
    };

    widget.addEventListener('solve', onSolve);
    widget.addEventListener('error', onError);
    widget.solve().catch((error) => {
      cleanup();
      reject(error);
    });
  }));

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
  // Cap tokens are single-use; reset the widget after consuming the token.
  widget.reset();
}
```

## Enable CAPTCHA {#enable-captcha}

Remember to enable CAPTCHA bot protection after you have set up the CAPTCHA provider.

Go to the Security page, find the CAPTCHA tab, and switch on the toggle button of "Enable CAPTCHA".
