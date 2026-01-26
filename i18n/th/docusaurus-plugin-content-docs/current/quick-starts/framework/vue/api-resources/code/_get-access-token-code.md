```ts title="views/HomeView.vue"
import { useLogto, type UserInfoResponse } from '@logto/vue';

const { isAuthenticated, getAccessToken } = useLogto();

if (isAuthenticated.value) {
  (async () => {
    const accessToken = await getAccessToken('https://shopping.your-app.com/api');
    // แสดง accessToken ในคอนโซล
    console.log(accessToken);
  })();
}
```
