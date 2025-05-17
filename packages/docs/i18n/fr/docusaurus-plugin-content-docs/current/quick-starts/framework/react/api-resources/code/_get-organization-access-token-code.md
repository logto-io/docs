```tsx title="pages/Organizations/index.tsx"
import { useLogto } from '@logto/react';
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

      console.log('Revendications du jeton d’identifiant', claims);
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
                  console.log('jeton brut', await getOrganizationToken(organizationId));
                }}
              >
                récupérer le jeton (voir la console)
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
