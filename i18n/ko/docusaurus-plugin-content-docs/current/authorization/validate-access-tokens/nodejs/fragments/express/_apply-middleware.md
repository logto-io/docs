```ts title="app.ts"
import { verifyAccessToken } from './auth-middleware.js';

app.get('/api/protected', verifyAccessToken, (req, res) => {
  // req.auth에서 인증 (Authentication) 정보를 직접 접근
  res.json({ auth: req.auth });
});

app.get('/api/protected/detailed', verifyAccessToken, (req, res) => {
  // 보호된 엔드포인트 로직
  res.json({
    auth: req.auth,
    message: '보호된 데이터에 성공적으로 접근했습니다',
  });
});
```
