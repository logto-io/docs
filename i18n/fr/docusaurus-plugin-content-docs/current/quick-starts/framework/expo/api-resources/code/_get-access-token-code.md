```tsx title="AccessToken.tsx"
import { useLogto } from '@logto/rn';

const AccessToken = () => {
  const { isAuthenticated, getAccessToken } = useLogto();
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        // highlight-start
        const token = await getAccessToken('https://shopping.your-app.com/api');
        // highlight-end
        setAccessToken(token);
      }
    })();
  }, [isAuthenticated, getAccessToken]);

  return <p>{{ accessToken }}</p>;
};
```
