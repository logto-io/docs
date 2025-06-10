```ts title="app.ts"
import Router from '@koa/router';
import { koaVerifyAccessToken } from './auth-middleware.js';

const router = new Router();

router.get('/api/protected', koaVerifyAccessToken, (ctx) => {
  // ctx.state.auth에서 인증 (Authentication) 정보를 직접 접근합니다
  ctx.body = { auth: ctx.state.auth };
});

router.get('/api/protected/detailed', koaVerifyAccessToken, (ctx) => {
  // 보호된 엔드포인트 로직
  ctx.body = {
    auth: ctx.state.auth,
    message: '보호된 데이터에 성공적으로 접근했습니다',
  };
});

app.use(router.routes());
```
