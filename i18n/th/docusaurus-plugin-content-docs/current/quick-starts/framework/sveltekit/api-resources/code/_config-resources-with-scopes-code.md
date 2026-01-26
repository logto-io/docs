```ts title="hooks.server.ts"
export const handle = handleLogto(
  {
    // ...การตั้งค่าอื่น ๆ
    scopes: ['shopping:read', 'shopping:write', 'store:read', 'store:write'],
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
  }
  // ...การตั้งค่าอื่น ๆ
);
```
