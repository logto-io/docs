```tsx title="pages/Home/index.tsx"
import { useLogto } from '@logto/react';

const Home = () => {
  const { isAuthenticated, getAccessToken } = useLogto();
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const token = await getAccessToken('https://shopping.your-app.com/api');
        setAccessToken(token);
      }
    })();
  }, [isAuthenticated, getAccessToken]);

  return <p>{{ accessToken }}</p>;
};
```
