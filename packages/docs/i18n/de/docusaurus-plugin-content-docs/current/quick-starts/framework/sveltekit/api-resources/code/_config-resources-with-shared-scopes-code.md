```ts title="hooks.server.ts"
export const handle = handleLogto(
  {
    // ...other configs
    scopes: ['read', 'write'],
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
  }
  // ...other configs
);
```
