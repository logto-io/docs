```ts title="nuxt.config.ts"
export default defineNuxtConfig({
  logto: {
    // highlight-start
    scopes: ['read', 'write'],
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
    // highlight-end
    // ...other configs
  },
});
```
