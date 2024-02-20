---
sidebar_position: 2
---

# Use custom domain

Once you've configured your settings, both your custom domain name and the default Logto domain name will be available for your tenant. However, certain configurations are required to activate your custom domain name.

:::note
In this article, we assume that your custom domain is `auth.example.com`.
:::

![Example domain](./assets/example-domain.webp)

## Updating the SDK endpoint for applications

Alter your initialization code for the Logto SDK by modifying the domain name of the endpoint.

```ts
const client = new LogtoClient({
  ..., // other options
  endpoint: 'https://auth.example.com',
});
```

## Modifying auth endpoints for other applications

If you have applications that aren't using the Logto SDK, it's necessary to update their auth endpoints.

You can locate the auth endpoints at the well-known URL:

```
https://auth.example.com/oidc/.well-known/openid-configuration
```

## Updating the social connector's callback URI

The social connector's callback URI will be updated automatically if your users are using the custom domain. You need to go to the social provider's developer console to update the callback URI.

When your users are using the custom domain, the social connector's callback URI will be using the new domain. Therefore, you need to navigate to the social provider's developer console to manually update the callback URI.

## Troubleshooting SSL Certificate Issues

If you encounter SSL certificate issues when setting up your custom domain, it may be related to CAA records in your DNS configuration. CAA records specify which Certificate Authorities (CAs) are authorized to issue certificates for your domain.

To troubleshoot and resolve SSL certificate issues related to CAA records, refer to [Cloudflare's documentation](https://developers.cloudflare.com/ssl/edge-certificates/caa-records/) on CAA Records.
