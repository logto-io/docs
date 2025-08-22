```ts title="hooks.server.ts"
export const handle = handleLogto(
  {
    // ...การตั้งค่าอื่น ๆ
    scopes: ['read', 'write'], // ขอบเขต (scopes)
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // ทรัพยากร API (resources)
  }
  // ...การตั้งค่าอื่น ๆ
);
```
