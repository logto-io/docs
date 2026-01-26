```tsx title="Organizations.tsx"
import { useLogto } from '@logto/rn';
import { useEffect, useState } from 'react';

const Organizations = () => {
  const { isAuthenticated, getOrganizationToken, getIdTokenClaims } = useLogto();
  const [organizationIds, setOrganizationIds] = useState<string[]>();

  useEffect(() => {
    (async () => {
      if (!isAuthenticated) {
        return;
      }
      const claims = await getIdTokenClaims();

      console.log('ID token claims', claims);
      setOrganizationIds(claims?.organizations);
    })();
  }, [isAuthenticated, getIdTokenClaims]);

  return (
    <section>
      <ul>
        {organizationIds?.map((organizationId) => {
          return (
            <li key={organizationId}>
              <span>{organizationId}</span>
              <button
                type="button"
                onClick={async () => {
                  // highlight-start
                  console.log('raw token', await getOrganizationToken(organizationId));
                  // highlight-end
                }}
              >
                fetch token (see console)
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Organizations;
```
