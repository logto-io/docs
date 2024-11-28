```ts title="hooks.server.ts"
export const handle = handleLogto(
  {
    // ...other configs
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // 添加 API 资源 (API resources)
  }
  // ...other configs
);
```
