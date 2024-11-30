import Availability from '@components/Availability';

```ts title="index.vue"
const token = await client.getOrganizationToken(organizationId);
```

#### Recursos de API de la organización

Para obtener un token de acceso para un recurso de API en una organización, puedes usar el método `getAccessToken` con ambos, el recurso de API y el ID de la organización como parámetros:

```ts title="index.vue"
const accessToken = await client.getAccessToken(
  'https://shopping.your-app.com/api',
  organizationId
);
```
