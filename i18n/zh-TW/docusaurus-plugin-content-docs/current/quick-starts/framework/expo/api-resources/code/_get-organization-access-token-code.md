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
                  // highlight-start
                  console.log('原始權杖 (raw token)', await getOrganizationToken(organizationId));
                  // highlight-end
                }}
              >
                取得權杖 (fetch token)（查看控制台）
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
