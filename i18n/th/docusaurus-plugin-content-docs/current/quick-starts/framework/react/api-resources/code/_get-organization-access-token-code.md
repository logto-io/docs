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

      // แสดงข้อมูลการอ้างสิทธิ์ของโทเค็น ID
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
                  // ดึงโทเค็น (ดูที่คอนโซล)
                  console.log('raw token', await getOrganizationToken(organizationId));
                }}
              >
                ดึงโทเค็น (ดูที่คอนโซล)
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
