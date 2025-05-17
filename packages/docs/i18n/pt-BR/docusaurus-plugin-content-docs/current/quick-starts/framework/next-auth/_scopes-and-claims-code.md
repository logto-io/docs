```ts
const handler = NextAuth({
  providers: [
    {
      id: 'logto',
      name: 'Logto',
      // ... outras opções
      authorization: { params: { scope: 'openid offline_access profile email' } },
      // ... outras opções
    },
  ],
});
```
