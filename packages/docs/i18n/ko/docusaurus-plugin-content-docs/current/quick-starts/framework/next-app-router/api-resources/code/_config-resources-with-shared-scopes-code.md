```ts title="app/logto.ts"
export const logtoConfig = {
  // ...other configs
  // highlight-start
  scopes: ['read', 'write'],
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
  // highlight-end
};
```
