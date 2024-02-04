```ts
// libraries/logto.ts
// ...
export const getOrganizationTokens = async () => {
  const { isAuthenticated } = await getLogtoContext();

  if (!isAuthenticated) {
    return [];
  }

  const { nodeClient } = await logtoClient.createNodeClientFromHeaders(getCookie());

  const { organizations = [] } = await nodeClient.getIdTokenClaims();

  return await Promise.all(
    organizations.map(async (organizationId) => ({
      id: organizationId,
      token: await nodeClient.getOrganizationToken(organizationId),
    }))
  );
};
```

```tsx
import { getLogtoContext, getOrganizationTokens } from '../libraries/logto';

export default async function Home() {
  // ...
  const organizations = await getOrganizationTokens();

  return (
    <main>
      /* ... */
      {organizations.length > 0 ? (
        <div>
          <h2>Organizations</h2>
          <ul>
            {organizations.map((organization) => (
              <li key={organization.id}>{organization.id}</li>
            ))}
          </ul>
        </div>
      ) : null}
      /* ... */
    </main>
  );
}
```
