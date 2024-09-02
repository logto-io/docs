---
sidebar_label: Bring your UI
sidebar_position: 6
---

import Availability from '@components/Availability';

# Bring your own Sign-in Experience UI

<Availability cloud oss={false} />

In addition to all the customization methods we introduced above, you can deeply customize your Sign-in Experience by bringing your own UI to completely replace the built-in Logto sign-in interface. This feature enables you to upload a zip file containing your custom UI assets (HTML, CSS, JavaScript, images, etc.), have it hosted on Logto Cloud servers, and use it as the Sign-in Experience for your tenant users.

:::note

Please note that this feature requires your custom UI to be Single Page Application (SPA) compatible, and it's recommended to always use a production build for optimal performance.

:::

## Upload your custom UI assets

:::note

Proceed with caution when using this feature in production, since it will immediately affect your users' Sign-in Experience.

:::

Navigate to "Sign-in experience > Branding > Custom UI > Bring your UI" in the Logto Console.

Click to select or drag and drop your zip file containing your custom UI assets, and the upload process will start automatically. Once the upload is complete, save the changes, and your custom UI will be served immediately.

The "Sign-in preview" window will be disabled when you use your custom sign-in UI. However, you can still click the "Live preview" button to test your custom sign-in page in a new opened browser tab.

### Custom UI assets requirements

- The upload assets should be packed as a single zip file.
- The zip file should contain an `index.html` file in the root directory.
- The zip file should not exceed 20MB in size.
- The zip file should not contain any file that exceeds 10MB in size.
- The zip file should not contain more than 200 files in total.

### Tips to quickly get started

At this point, the fastest way to initiate a custom sign-in UI is to clone the [Logto experience project](https://github.com/logto-io/logto/tree/master/packages/experience). This is the built-in Logto Sign-in Experience UI that covers all features and Logto's best practices. You can customize it to fit your needs.

After checking out the code, just simply run:

```
pnpm install && pnpm start
```

Note: The whole Logto project is a [pnpm monorepo](https://pnpm.io/workspaces), and you can find workspace protocol dependencies in package.json. Replace it with regular semver if you are not using pnpm, and want to run it as a standalone project.

Moreover, we are working on providing more simplified and scenario-based sample projects to cover the most common use cases. Stay tuned for our future updates!

## Interact with Logto Experience API

When developing your custom UI pages, you can interact with Logto's Experience API to perform various actions such as sign-in, sign-up, password reset, binding social accounts, enabling MFA, and more. Refer to [Logto Experience API documentation](https://openapi.logto.io/group/endpoint-interaction) for more details.

We've also provided a CLI tool to help you proxy the Experience API requests from your local dev machine to the Logto Cloud endpoint. Refer to [Logto Tunnel CLI documentation](/docs/references/tunnel-cli/) for more details.

Other Sign-in Experience configurations, such as branding colors, company logo, favicon, password policy, localized language phrases, even custom CSS, can still be fetched from the [sign-in Experience API endpoint](https://openapi.logto.io/operation/operation-getsigninexperienceconfig).

We are continuously working on providing more scenario-based custom UI samples and best practices to help you get started quickly. Stay tuned for our future updates!

## Restore to Logto built-in Sign-in Experience

If you wish to restore to Logto's built-in Sign-in Experience, simply click the delete button on the custom UI card. After saving the changes, the Sign-in Experience UI will be reverted back to Logto's default.
