```ts title="app/logto.ts"
export const logtoConfig = {
  // ...other configs
  // highlight-start
  scopes: ['read', 'write'], // ขอบเขต (scopes) ที่ร้องขอ
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // ทรัพยากร (resources) ที่ร้องขอ
  // highlight-end
};
```
