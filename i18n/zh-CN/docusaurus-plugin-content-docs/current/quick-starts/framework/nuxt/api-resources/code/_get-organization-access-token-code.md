import Availability from '@components/Availability';

```ts title="index.vue"
const token = await client.getOrganizationToken(organizationId);
```

#### 组织 API 资源

要获取组织中 API 资源的访问令牌 (Access token)，你可以使用 `getAccessToken` 方法，并将 API 资源和组织 ID 作为参数：

```ts title="index.vue"
const accessToken = await client.getAccessToken(
  'https://shopping.your-app.com/api',
  organizationId
);
```
