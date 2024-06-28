```ts title="/app/logto.ts"
export const logtoConfig = {
  // ...other configs
  scopes: ['shopping:read', 'shopping:write', 'store:read', 'store:write'],
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
};
```
