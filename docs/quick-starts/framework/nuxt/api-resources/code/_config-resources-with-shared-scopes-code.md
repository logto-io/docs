```ts
export default defineNuxtConfig({
  logto: {
    scopes: ['read', 'write'],
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
    // ...other configs
  },
});
```
