```tsx
import { getLogtoContext } from '../libraries/logto';

export default async function Home() {
  const { isAuthenticated, claims, accessToken } = await getLogtoContext({ getAccessToken: true });
  // ...
}
```
