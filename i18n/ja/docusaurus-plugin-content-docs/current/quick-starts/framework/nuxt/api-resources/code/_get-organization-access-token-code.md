import Availability from '@components/Availability';

```ts title="index.vue"
const token = await client.getOrganizationToken(organizationId);
```

#### 組織 API リソース {#organization-api-resources}

組織内の API リソースのアクセス トークンを取得するには、`getAccessToken` メソッドを使用し、API リソースと組織 ID の両方をパラメーターとして渡します：

```ts title="index.vue"
const accessToken = await client.getAccessToken(
  'https://shopping.your-app.com/api',
  organizationId
);
```
