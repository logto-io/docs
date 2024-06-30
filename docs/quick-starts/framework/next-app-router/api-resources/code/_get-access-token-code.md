```tsx title="app/page.ts"
import { getLogtoContext } from '@logto/next/server-actions';
import { logtoConfig } from './logto';

export default async function Home() {
  const { isAuthenticated, claims, accessToken } = await getLogtoContext(logtoConfig, {
    // highlight-next-line
    getAccessToken: true,
  });
  // ...
}
```
