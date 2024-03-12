```tsx
import { getOrganizationTokens } from '@logto/next/server-actions';
import { logtoConfig } from './logto';

export default async function Home() {
  // ...
  const organizations = await getOrganizationTokens(logtoConfig);

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
