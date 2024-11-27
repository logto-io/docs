```ts
export default function initPassport() {
  passport.use(
    new OpenIDConnectStrategy(
      {
        // ... other options
        clientID: appId,
        clientSecret: appSecret,
        callbackURL: '/callback',
        // highlight-start
        scope: ['openid', 'offline_access', 'profile', 'email'],
        // highlight-end
      }
      // ... other options
    )
  );
  // ... other options
}
```
