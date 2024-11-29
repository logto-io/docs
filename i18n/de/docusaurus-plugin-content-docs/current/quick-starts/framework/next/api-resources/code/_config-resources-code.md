```ts title="libraries/logto.ts"
export const logtoClient = new LogtoClient({
  // ...other configs
  // highlight-next-line
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // API-Ressourcen hinzufügen
});
```
