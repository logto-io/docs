```ts title="nuxt.config.ts"
export default defineNuxtConfig({
  logto: {
    // highlight-next-line
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // 新增 API 資源 (API resources)
    // ...other configs
  },
});
```
