```ts
import { logtoClient } from '../../../libraries/logto';

export default logtoClient.withLogtoApiRoute(
  (request, response) => {
    if (!request.user.isAuthenticated) {
      response.status(401).json({ message: 'Unauthorized' });

      return;
    }

    // Get access token here
    console.log(request.user.accessToken);
    response.json(request.user);
  },
  {
    getAccessToken: true,
    resource: 'https://shopping.your-app.com/api',
  }
);
```
