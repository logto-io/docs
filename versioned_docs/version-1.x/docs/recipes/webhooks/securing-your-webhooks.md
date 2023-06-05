---
sidebar_label: Securing Your Webhooks
sidebar_position: 4
---

# Securing Your Webhooks

_Added in v1.5.0_

Once your server is ready to receive webhook requests, you may want to make sure that it can handle the requests securely. Logto generates a signature for each webhook request payload, which allows you to verify that the request comes from Logto.

## Getting the signing key

You'll need to get the signing key from [the Admin Console](./configure-webhooks-in-console.md#secure-webhook) to verify the signature.

## Verifying the signature

Extract the signature from the `logto-signature-sha-256` header of the webhook request.

After that, you should generate a signature using your signing key, and the webhook request body and ensure that the result matches the signature from Logto.

Logto uses an HMAC hex digest to compute the signature.

Here's an example of how to verify the signature in Node.js:

```js
import { createHmac } from 'node:crypto';

export const verify = (signingKey: string, rawBody: Buffer[], expectedSignature: string) => {
  const hmac = createHmac('sha256', signingKey);
  hmac.update(rawBody);
  const signature = hmac.digest('hex');
  return signature === expectedSignature;
};
```
