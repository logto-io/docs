```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideAuth({
      config: buildAngularAuthConfig({
        // ...other config
        resource: 'https://your-api-resource.com',
      }),
    }),
    // ...other providers
  ],
};
```
