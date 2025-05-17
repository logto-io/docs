import Availability from '@components/Availability';

```ts title="index.vue"
const token = await client.getOrganizationToken(organizationId);
```

#### Organization API resources {#organization-api-resources}

To fetch an access token for an API resource in an organization, you can use the `getAccessToken` method with both the API resource and organization ID as parameters:

```ts title="index.vue"
const accessToken = await client.getAccessToken(
  'https://shopping.your-app.com/api',
  organizationId
);
```
