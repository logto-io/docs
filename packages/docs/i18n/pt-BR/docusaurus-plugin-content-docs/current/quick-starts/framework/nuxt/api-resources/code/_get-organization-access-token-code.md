import Availability from '@components/Availability';

```ts title="index.vue"
const token = await client.getOrganizationToken(organizationId);
```

#### Recursos de API da organização (Organization API resources) {#organization-api-resources}

Para obter um token de acesso para um recurso de API em uma organização, você pode usar o método `getAccessToken` com ambos o recurso de API e o ID da organização como parâmetros:

```ts title="index.vue"
const accessToken = await client.getAccessToken(
  'https://shopping.your-app.com/api',
  organizationId
);
```
