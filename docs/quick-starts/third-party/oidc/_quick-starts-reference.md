Under the hood, a third-party app is just a standard OAuth 2.0 / OIDC client. This means you (or the third-party developer) can use any OAuth 2.0 / OIDC library or framework to integrate with Logto.

If you're not familiar with OAuth 2.0 or OIDC, you can start by following one of our “Traditional web” quick start guides.

A few things to keep in mind:

1. Logto currently requires third-party apps to be “Traditional web” apps. In other words, the app needs a backend server (or backend-for-frontend) to securely store the client secret.
2. Most our quick start guides are written for first-party apps, but you can still use them as a reference for third-party app integration.
3. The main difference is that third-party apps will show a consent screen, asking users for explicit permission to access their data.

You can find more information in our [quick start guides](https://docs.logto.io/quick-starts).
