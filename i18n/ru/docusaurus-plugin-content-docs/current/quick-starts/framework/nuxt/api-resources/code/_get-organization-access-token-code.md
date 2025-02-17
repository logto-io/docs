import Availability from '@components/Availability';

```ts title="index.vue"
const token = await client.getOrganizationToken(organizationId);
```

#### Ресурсы API организации {#organization-api-resources}

Чтобы получить токен доступа для ресурса API в организации, вы можете использовать метод `getAccessToken` с ресурсом API и ID организации в качестве параметров:

```ts title="index.vue"
const accessToken = await client.getAccessToken(
  'https://shopping.your-app.com/api',
  organizationId
);
```
