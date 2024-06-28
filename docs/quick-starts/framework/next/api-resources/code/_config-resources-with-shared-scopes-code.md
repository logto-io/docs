```ts title="libraries/logto.ts"
export const logtoClient = new LogtoClient({
  // ...other configs
  scopes: ['read', 'write'],
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
});
```
