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

      console.log('ID 權杖 (ID token) 宣告 (claims)', claims);
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
                  console.log('原始權杖 (raw token)', await getOrganizationToken(organizationId));
                }}
              >
                取得權杖 (fetch token)（查看主控台）
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
