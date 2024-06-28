```ts title="app.ts"
app.get(
  '/fetch-organization-token',
  withLogto({
    ...config,
    getOrganizationToken: true,
  }),
  (request, response) => {
    response.json(request.user);
  }
);
```
