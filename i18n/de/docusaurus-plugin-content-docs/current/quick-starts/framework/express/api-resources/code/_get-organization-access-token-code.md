```ts title="app.ts"
app.get(
  '/fetch-organization-token',
  withLogto({
    ...config,
    // highlight-next-line
    getOrganizationToken: true,
  }),
  (request, response) => {
    // highlight-next-line
    response.json(request.user.organizationTokens);
  }
);
```
