---
date: 2023-02-26
authors: gao
tags: [release]
---

# Logto 2023 February Update (Extended)

:::info
While Logto Cloud is still under construction, we would like to introduce some new features to our foundation, Logto OSS. This will be the last version before general availability.
:::

Notable updates include:

- Refactored infrastructure and enhanced security
- Smart Input and Customize CSS added to Sign-in Experience
- Open standard connectors (SAML, OIDC, and OAuth 2.0)
- New language support

Let's take a look at what's inside!

{/* truncate */}

## 💥 BREAKING CHANGES 💥

### Decouple normal users and admins

Logto was using a single port to serve both normal users and admins, as well as the web console. While we continuously maintain a high level of security, it’ll still be great to decouple these components into two separate parts to keep data isolated and provide a flexible infrastructure.

<img width="737" alt="image" src="https://user-images.githubusercontent.com/14722250/221365507-6f20a804-1059-4933-9b88-df1244ab900b.png" />

From this version, Logto now listens to two ports by default, one for normal users (`3001`), and one for admins (`3002`).

<details>
<summary><b>‼️ Click to expand details</b></summary>
<p>

- Nothing changed for normal users. No adaption is needed.
- For admin users:
  - The default Admin Console URL has been changed to `http://localhost:3002/console`.
  - To change the admin port, set the environment variable `ADMIN_PORT`. For instance, `ADMIN_PORT=3456`.
  - You can specify a custom endpoint for admins by setting the environment variable `ADMIN_ENDPOINT`. For example, `ADMIN_ENDPOINT=https://admin.your-domain.com`.
  - You can now completely disable admin endpoints by setting `ADMIN_DISABLE_LOCALHOST=1` and leaving `ADMIN_ENDPOINT` unset.
  - Admin Console and admin user data are not accessible via normal user endpoints, including `localhost` and `ENDPOINT` from the environment.
  - Admin Console no longer displays audit logs of admin users. However, these logs still exist in the database, and Logto still inserts admin user logs. There is just no convenient interface to inspect them.
  - Due to the data isolation, the numbers on the dashboard may slightly decrease (admins are excluded).
- Resource Indicator for Logto Management API changed from `https://[your-tenant-id].logto.app/api` to `https://default.logto.app/api`.

</p>
</details>

If you are upgrading from a previous version, simply run the [database alteration command](https://docs.logto.io/docs/references/using-cli/database-alteration) as usual, and we'll take care of the rest.

:::success ***DID YOU KNOW?***
Under the hood, we use the powerful Postgres feature Row-Level Security to isolate admin and user data.
:::

### CORS policy

- If `ADMIN_ENDPOINT` is not specified, `localhost:[admin-port]` will be allowed to perform Cross-Origin Resource Sharing (CORS) in Logto.
- If `ADMIN_ENDPOINT` is specified, only requests from the origin of `ADMIN_ENDPOINT` will be allowed.

## 🔐 Security update

In previous versions, when registering or changing passwords, all new passwords were stored in plain text in the Audit Logs before being encrypted and inserted into the database.

In this version, we have updated the process to fully mask password fields before inserting them into the Audit Logs.

:::caution
For enhanced security and compliance, we strongly recommend removing all passwords from the Audit Logs or deleting all logs that include passwords.
:::

If you have any questions regarding this issue or the removal of data, please do not hesitate to contact us via email or Discord.

## 🧑‍🚀 Feature update

### 💡 Smart Input for Sign-in Experience

We have integrated the traditional input fields for username, phone number, and email into a single intelligent input box:

<p>
<video src="https://user-images.githubusercontent.com/14722250/221401902-cc9bcd91-160c-4058-91ce-1e8a7bdfc842.mov" />
</p>

This advanced input box automatically identifies the type of characters you’re entering, such as an `@` sign or consecutive numbers, and provides relevant error feedback.

By streamlining the sign-in process, users no longer need to waste time figuring out which button to click to switch their desired login method. This reduces the risk of errors and ensures a smoother sign-in experience.

### 🎨 Customize CSS in Sign-in Experience

We have put a lot of effort into improving the user sign-in experience and have provided a brand color option for the UI. However, we know that fine-tuning UI requirements can be unpredictable. While Logto is still exploring the best options for customization, we want to provide a programmatic method to unblock your development.

You can now use the Management API `PATCH /api/sign-in-exp` with body `{ "customCss": "arbitrary string" }` to set customized CSS for the sign-in experience. You should see the value of `customCss` attached after `<title>` of the page. If the style has a higher priority, it should be able to override.

For instance, if you want to give your sign-in page a feel of the ***Night City***, try this CSS:

<details>

<summary><b>Click to expand CSS and preview</b></summary>

<p></p>

```css
@font-face { font-family: 'Rock Salt'; font-style: normal; font-weight: 400; font-display: swap; src: url(https://fonts.gstatic.com/s/rocksalt/v18/MwQ0bhv11fWD6QsAVOZrt0M6p7NGrQ.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
@font-face { font-family: 'Share Tech'; font-style: normal; font-weight: 400; font-display: swap; src: url(https://fonts.gstatic.com/s/sharetech/v17/7cHtv4Uyi5K0OeZ7bohU8H0JmBUhfrE.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
#app * { font-family: 'Share Tech'; letter-spacing: 0.5px; }
#app > div[class$=viewBox] { background-image: url(https://silverhand.io/assets/v-in-nc.jpg); background-size: cover; }
#app main[class$=main] { background-image: url(https://silverhand.io/assets/gentle-universe.png); background-size: cover; opacity: 0.98; min-height: initial; padding: 24px; padding-bottom: 72px; border-radius: 12px; }
#app main[class$=main] img[class$=logo] { content: url(https://silverhand.io/assets/cyberpunk-2077.png); margin: -20px 0 -12px; height: 160px; }
#app main[class$=main] div[class$=headline] { visibility: hidden; height: 60px; }
#app main[class$=main] div[class$=headline]:before { content: 'Welcome to Night City'; visibility: visible; display: block; font-family: 'Rock Salt'; font-style: italic; line-height: 60px; font-size: 20px; color: rgba(245,250,255,0.6); padding: 0 20px; }
#app form div[class$=inputField] > div { outline: none; border: none; border-radius: 4px; }
#app form div[class$=inputField] > div > input, #app form div[class$=inputField] div[class$=countryCodeSelector] { background: initial; background-color: #453f67; font-family: 'Share Tech'; letter-spacing: 0.5px; font-size: 16px; font-weight: 600; }
#app button { font-weight: 600; font-size: 16px; border-radius: 4px; }
#app button[type=submit] { background: linear-gradient(270.84deg, #2FD6FB -24.55%, #6369FC 44.33%, #A741EB 119.2%), #5D34F2; }
```

![custom-css-preview](https://user-images.githubusercontent.com/14722250/221394786-4ae77638-8f35-4791-afae-8ab6a314dbf8.jpg)

*"We have a city to burn!"*

</details>

:::note
Since Logto uses CSS Modules, you may see a hash value in the `class` property of DOM elements (e.g. a `<div>` with `vUugRG_container`).

To override these, you can use the `$=` CSS selector to match elements that end with a specified value. In this case, it should be `div[class$=container]`.
:::

### 🔗 Open standard connectors with better config interface

Logto now supports standard protocols (SAML, OIDC, and OAuth 2.0) for creating social connectors to integrate external identity providers. Each protocol can create multiple social connectors, giving you more control over your access needs.

Plus, we optimized the config interface for SAML connectors. Try it and let us know your feeling!

### 📄 New language

Added Russian translation. (credit [@evist0](https://github.com/evist0))

## 🎉 New Contributors

* [@Alanimdeo](https://github.com/Alanimdeo) made their first contribution in [#3064](https://github.com/logto-io/logto/pull/3064)
* [@gadkins](https://github.com/gadkins) made their first contribution in [#3032](https://github.com/logto-io/logto/pull/3032)
* [@evist0](https://github.com/evist0) made their first contribution in [#3158](https://github.com/logto-io/logto/pull/3158)
* [@muratgozel](https://github.com/muratgozel) made their first contribution in [#3203](https://github.com/logto-io/logto/pull/3203)

Thank you!
