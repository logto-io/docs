```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideAuth({
      config: buildAngularAuthConfig({
        // ...other config
        resource: 'https://your-api-resource.com',
        scopes: ['openid', 'profile', 'offline_access', 'read', 'write'],
      }),
    }),
    // ...other providers
  ],
};
```
