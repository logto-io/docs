```ts title="libraries/logto.ts"
export const logtoClient = new LogtoClient({
  // ...other configs
  // highlight-start
  scopes: ['shopping:read', 'shopping:write', 'store:read', 'store:write'],
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
  // highlight-end
});
```
