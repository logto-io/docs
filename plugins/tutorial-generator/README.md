# Generating the "Build X with Y" tutorial

The "Build X with Y" tutorial is a series of step-by-step guides that help developers build their application with a specific pair of Logto SDK and connector. For example: "How to build Google sign-in with Next.js".

The plugin comes along with some built-in templates in the "/tutorial" folder.

- `_template_passwordless.mdx`: For tutorials integrating with a passwordless (email and SMS) sign-in method.
- `_template_social.mdx`: For tutorials integrating with a social sign-in method.
- `_template_sso.mdx`: For tutorials integrating with a single sign-on (SSO) method.

Here's how you can add a new X & Y combination to the tutorials:

## Add a new SDK

1. Create a new SDK guide folder in "/docs/quick-starts". For example: "/docs/quick-starts/framework/react".
2. Make sure there's a `_for-tutorial.mdx` fragment in the folder. This MDX fragment will be used in the tutorial as the SDK integration part.
3. In the `_for-tutorial.mdx` fragment, re-use as much content as possible from the existing quick-starts guide of your SDK.
4. Make sure the level of headings (h2 / h3) are correctly used.
5. Make sure the "quick-start" guide frontmatter contains the additional necessary properties for the tutorial generator to work. For example:

```md title="/docs/quick-starts/framework/dotnet-blazor-wasm/README.mdx"
---
language: c#
official_link: https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models#blazor-webassembly
app_type: Single page app
framework: .NET Core (Blazor WebAssembly)
tutorial_name: .NET Core (Blazor WebAssembly)
---
```

These are all necessary variables that are injected into the tutorial template by the generator plugin.

| Property      | Description                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------- |
| language      | The programming language used in the SDK framework.                                            |
| official_link | The official documentation link of the SDK.                                                    |
| app_type      | The application type of application the SDK.                                                   |
| framework     | The name of the SDK used in Logto console.                                                     |
| tutorial_name | (OPTIONAL) The customized alias of the SDK. If not provided, the `sidebar_label` will be used. |

## Add a new connector

1. Create a new connector guide folder in "/docs/integrations". For example: "/docs/integrations/social/google".
2. Similar to SDK, each connector guide used in the tutorial should have a `_integration.mdx` fragment.
3. Make sure the level of headings are properly handled in the fragment.
4. Make sure the "integration" guide frontmatter contains the additional necessary properties for the tutorial generator to work. For example:

```md title="/docs/integrations/email/aws-ses/README.mdx"
---
tutorial_name: AWS SES
tutorial_config_name: AWS SES email connector
tutorial_sign_up_identifier: Email address
---
```

These are all necessary variables that are injected into the tutorial template by the generator plugin.

| Property                    | Description                                                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| tutorial_name               | The name of the connector used in the tutorial.                                                                       |
| tutorial_config_name        | The name of configuration used in the 3rd party service platform.                                                     |
| tutorial_sign_up_identifier | (OPTIONAL) The sign-up identifier used in email or SMS template. Available options: `Email address` or `Phone number` |

## Add i18n translations

Whenever you make changes to the SDK or connector guides, or the tutorial templates, make sure to translate them to all supported locales.

### Translate templates

Translate the templates if you made any changes to them. With the CLI command below, you can translate the templates to a specific locale.

```bash
node translate-tutorial-templates.mjs --locale fr
```

### Translate original SDK and connector guides

Translate the guide fragments in both SDK (quick-starts) and connector (integrations) folders. Same as translating other documentation pages.

```bash
node translate.mjs --locale fr --sync --all
```

Check out the source code of `translate.mjs` to see how it works.

### Re-generate the tutorials

Re-generate the tutorials using `pnpm build`.

### Commit all the changes

Commit all changes to the Git repository. Including:

- All `_template-*.mdx` files for all locales
- All the generated tutorials (`generated-*.mdx`) for all locales
- The `metadata.json` file (intermittent file generated by the tutorial generator)
