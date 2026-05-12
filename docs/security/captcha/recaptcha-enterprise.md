---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise is a Google service that protects websites from fraud and abuse using advanced bot detection without disrupting user experience. This guide will walk you through the process of setting up reCAPTCHA Enterprise with Logto.

## Prerequisites {#prerequisites}

- A Google Cloud project

## Setup a reCAPTCHA key {#setup-a-recaptcha-key}

1. Go to the [reCAPTCHA page of Google Cloud Console](https://console.cloud.google.com/security/recaptcha).
2. Click **Create key** button near "reCAPTCHA keys".
3. Fill out the form with the following details:
   - **Display name**: Any name you want to give to the key
   - **Application type**: Website
   - **Domain list**: Add Logto's endpoint domain
   - **Verification type**: Choose between **Score-based (invisible)** or **Checkbox challenge**. This determines how reCAPTCHA will be displayed to users. See [Verification mode](#verification-mode) for more details.
4. After creating the key, you will be redirected to the key details page, copy the **ID**.

## Setup an API key {#setup-an-api-key}

1. Go to the [Credentials page of Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Click **Create credentials** button and select **API key**.
3. Copy the API key.
4. Optionally, you can restrict the API key to **reCAPTCHA Enterprise API** to make it more secure.
5. Remember to leave "Application restrictions" to **None** if you don't understand what it is.

## Get project ID {#get-project-id}

1. Copy the **Project ID** from the [home page of Google Cloud Console](https://console.cloud.google.com/welcome).

## Verification mode {#verification-mode}

reCAPTCHA Enterprise supports two verification modes:

- **Invisible**: Score-based verification that runs automatically in the background without user interaction. This is the default mode.
- **Checkbox**: Displays the classic "I'm not a robot" checkbox widget that requires user interaction.

:::note
The verification mode you select in Logto must match the key type you created in Google Cloud Console. If you created a score-based key, select **Invisible**. If you created a checkbox challenge key, select **Checkbox**.
:::

## Bring your UI {#bring-your-ui}

If you use [Bring your UI](/customization/bring-your-ui/), Logto can't inject or run reCAPTCHA in your custom frontend automatically. After enabling CAPTCHA in Logto Console, your custom UI must load the reCAPTCHA Enterprise script, get a CAPTCHA token, and send it to the Experience API.

For **Invisible** mode, load the script with your site key:

```html
<script src="https://www.google.com/recaptcha/enterprise.js?render=<siteKey>" async defer></script>
```

If you configured a custom domain in Logto, replace `www.google.com` with that domain, for example `recaptcha.net`.

Before starting the interaction, execute reCAPTCHA with the fixed action `interaction` and pass the returned token as `captchaToken` in `PUT /api/experience`:

```js
const captchaToken = await grecaptcha.enterprise.execute('<siteKey>', {
  action: 'interaction',
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

For **Checkbox** mode, load the script with `render=explicit`, render the widget in your page, and use the callback token as `captchaToken` when calling `PUT /api/experience`.

## Custom domain {#custom-domain}

By default, Logto loads the reCAPTCHA script from `www.google.com`. However, in some regions where Google's standard domain is inaccessible, you can configure an alternative domain.

Supported domains:

- `www.google.com` (default)
- `recaptcha.net`

To configure a custom domain, enter the domain in the **Domain** field when setting up reCAPTCHA Enterprise in Logto Console.

## Enable CAPTCHA {#enable-captcha}

Remember to enable CAPTCHA bot protection after you have set up the CAPTCHA provider.

Go to the Security page, find the CAPTCHA tab, and switch on the toggle button of "Enable CAPTCHA".
