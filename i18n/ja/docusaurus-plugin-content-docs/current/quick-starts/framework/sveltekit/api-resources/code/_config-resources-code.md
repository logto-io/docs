```ts title="hooks.server.ts"
export const handle = handleLogto(
  {
    // ...other configs
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // API リソースを追加
  }
  // ...other configs
);
```
