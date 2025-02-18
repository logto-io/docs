```ts title="nuxt.config.ts"
export default defineNuxtConfig({
  logto: {
    // highlight-next-line
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // API 리소스를 추가하세요
    // ...other configs
  },
});
```
