Under the hood, a third-party app is a standard OAuth 2.0 / OIDC client. This means you (or the third-party developer) can use any OAuth 2.0 / OIDC library or framework to integrate with Logto.

A few things to keep in mind:

1. When creating a third-party app, select the appropriate application type based on the app's architecture:
   - **Traditional web**: Uses client secret for authentication.
   - **Single page app / Native**: Uses PKCE for secure authorization without a client secret.
2. Most of our quick start guides are written for first-party apps, but you can still use them as a reference for third-party app integration.
3. The main difference is that third-party apps will show a consent screen, asking users for explicit permission to access their data.

See [Third-party applications](/integrate-logto/third-party-applications) for full integration guide.
