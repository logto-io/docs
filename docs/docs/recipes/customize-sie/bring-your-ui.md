---
sidebar_label: Bring your UI
sidebar_position: 6
---

import Availability from '@components/Availability';

# Bring your own sign-in experience UI

<Availability cloud oss={false} />

In addition to all the customization methods we introduced above, you can deeply customize your sign-in experience by bringing your own UI to completely replace the built-in Logto sign-in interface. This feature enables you to upload a zip file containing your custom UI assets (HTML, CSS, JavaScript, images, etc.), have it hosted on Logto Cloud servers, and use it as the sign-in experience for your tenant users.

:::note

Please note that this feature requires your custom UI to be Single Page Application (SPA) compatible, and it's recommended to always use a production build for optimal performance.

:::

## Upload your custom UI assets

:::note

Proceed with caution when using this feature in production, since it will immediately affect your users' sign-in experience.

:::

Navigate to "Sign-in experience > Branding > Custom UI > Bring your UI" in the Logto Console.

Click to select or drag and drop your zip file containing your custom UI assets, and the upload process will start automatically. Once the upload is complete, save the changes, and your custom UI will be served immediately.

![Bring your ui](./assets/sie-bring-your-ui.webp)

The "Sign-in preview" window will be disabled when you use this feature due to potential unknown issues with your custom code. However, you can still click the "Live preview" button to test your custom UI in a new opened browser tab.

![Custom ui enabled](./assets/sie-custom-ui-enabled.webp)

## Interact with Logto experience API

When developing your custom UI pages, you can interact with Logto's experience API to perform various actions such as sign-in, sign-up, password reset, binding social accounts, enabling MFA, and more. Refer to [Logto experience API documentation](https://openapi.logto.io/group/endpoint-interaction) for more details.

Other sign-in experience configurations, such as branding colors, company logo, favicon, password policy, localized language phrases, even custom CSS, can still be fetched from the [sign-in experience API endpoint](https://openapi.logto.io/operation/operation-getsigninexperienceconfig).

## Restore to Logto built-in sign-in experience

If you wish to restore to Logto's built-in sign-in experience, simply click the delete button on the custom UI card. After saving the changes, the sign-in experience UI will be reverted back to Logto's default.
