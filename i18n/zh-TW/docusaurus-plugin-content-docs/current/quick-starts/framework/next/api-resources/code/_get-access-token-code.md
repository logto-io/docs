```ts title="pages/api/get-access-token.ts"
import { logtoClient } from '../../../libraries/logto';

export default logtoClient.withLogtoApiRoute(
  (request, response) => {
    if (!request.user.isAuthenticated) {
      response.status(401).json({ message: 'Unauthorized' });

      return;
    }

    // 在此取得存取權杖 (Access token)
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
