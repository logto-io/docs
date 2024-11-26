---
sidebar_position: 1
---

<head>
  <link rel="canonical" href="https://docs.logto.io/logto-cloud/custom-domain/#configure-custom-domain-in-console" />
</head>

# Configure custom domain in Console

To add a new custom domain in the Logto Console, follow these steps:

1. Navigate to the "Settings" and go to the “Domains” tab.
2. In “Custom Domain” section, enter your domain name and click “add domain”. ![Add domain](./assets/add-domain.webp)
3. Copy the CNAME value in the table, and go to your domain’s DNS provider to add record. ![Verify](./assets/verify.webp)
4. Wait for the verification and SSL process.
   1. We will auto-verify your records every 10 seconds until the custom domain is added. Just ensure that the entered domain name or DNS Records are accurate.
   2. Verification typically takes a few minutes but can take up to 24 hours, depending on the DNS provider. Feel free to navigate away during the process.

## Troubleshooting

### SSL Certificate Issues

If you encounter SSL certificate issues when setting up your custom domain, it may be related to CAA records in your DNS configuration. CAA records specify which Certificate Authorities (CAs) are authorized to issue certificates for your domain.

To troubleshoot and resolve SSL certificate issues related to CAA records, refer to [Cloudflare's documentation](https://developers.cloudflare.com/ssl/edge-certificates/caa-records/) on CAA Records.

### "The hostname is associated with a held zone" Error

If you encounter the error message "The hostname is associated with a held zone, please contact the owner to have the hold removed" when adding a custom domain, it means that the domain is already in Cloudflare zone, and it is set to "Zone Hold" status. See this [Cloudflare documentation](https://developers.cloudflare.com/fundamentals/setup/account/account-security/zone-holds/) for more information.

To resolve this issue, you'll need to release the zone hold. Follow the above link for instructions on how to release the zone hold in Cloudflare.
