---
slug: /security/blocklist
sidebar_label: Blocklist
---

# Blocklist

## Email blocklist {#email-blocklist}

The email blocklist policy allows customization of email blocklist settings to prevent account sign-up abuse. It monitors email addresses used for sign-up and account settings. If a user attempts to sign up or link an email address that violates any blocklist rules, the system will reject the request, helping to mitigate spam accounts and enhance overall account security.

Visit the <CloudLink to="/security/blocklist"> Console > Security > Blocklist</CloudLink> to configure the email blocklist settings.

### Block email subaddressing {#block-email-subaddressing}

Email subaddressing allows users to create variations of their email addresses by adding a plus sign (+) followed by additional characters (e.g., user+tag@example.com). This feature can be exploited by malicious users to bypass blocklist restrictions. By enabling the block email subaddressing feature, the system will reject any sign-up or account linking attempts that utilize subaddressed email formats.

### Custom email blocklist {#custom-email-blocklist}

You can create a custom email blocklist by specifying a list of email addresses or domains to block. The system will reject any sign-up or account linking attempts that match these entries. The blocklist supports both full email address and domain matching.

For instance, adding `@example.com` to the blocklist will block all email addresses with that domain. Similarly, adding `foo@example.com` will specifically block that email address.

### Block disposable email addresses {#block-disposable-email-addresses}

This is a <b>cloud-only</b> feature. Once enabled, the system will automatically validates the domain of the provided email address against a list of known disposable email domains. If the domain is found in the list, the request will be rejected. The list of disposable email domains is regularly updated to ensure its effectiveness.
