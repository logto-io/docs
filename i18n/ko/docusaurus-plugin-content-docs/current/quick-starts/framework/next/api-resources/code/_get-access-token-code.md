```ts title="pages/api/get-access-token.ts"
import { logtoClient } from '../../../libraries/logto';

export default logtoClient.withLogtoApiRoute(
  (request, response) => {
    if (!request.user.isAuthenticated) {
      response.status(401).json({ message: 'Unauthorized' });

      return;
    }

    // 여기서 액세스 토큰 (Access token)을 가져옵니다
    console.log(request.user.accessToken);
    response.json(request.user);
  },
  {
    // highlight-start
    getAccessToken: true,
    resource: 'https://shopping.your-app.com/api',
    // highlight-end
  }
);
```
