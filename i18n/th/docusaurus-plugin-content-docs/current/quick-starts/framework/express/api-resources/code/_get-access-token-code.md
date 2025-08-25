```ts title="app.ts"
app.get(
  '/fetch-access-token',
  withLogto({
    ...config,
    // highlight-start
    getAccessToken: true,
    resource: 'https://shopping.your-app.com/api',
    // highlight-end
  }),
  (request, response) => {
    // highlight-next-line
    // แสดง accessToken ของผู้ใช้ในคอนโซล
    console.log(request.user.accessToken);
    response.json(request.user);
  }
);
```
