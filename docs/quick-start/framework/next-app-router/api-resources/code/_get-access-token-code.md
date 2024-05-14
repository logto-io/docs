```tsx
import { getLogtoContext } from '@logto/next/server-actions';
import { logtoConfig } from './logto';

export default async function Home() {
  const { isAuthenticated, claims, accessToken } = await getLogtoContext(logtoConfig, {
    getAccessToken: true,
  });
  // ...
}
```
