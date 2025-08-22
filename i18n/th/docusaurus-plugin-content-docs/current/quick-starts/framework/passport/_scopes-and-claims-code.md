```ts
export default function initPassport() {
  passport.use(
    new OpenIDConnectStrategy(
      {
        // ... ตัวเลือกอื่น ๆ
        clientID: appId,
        clientSecret: appSecret,
        callbackURL: '/callback',
        // highlight-start
        scope: ['openid', 'offline_access', 'profile', 'email'],
        // highlight-end
      }
      // ... ตัวเลือกอื่น ๆ
    )
  );
  // ... ตัวเลือกอื่น ๆ
}
```
