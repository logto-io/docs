```php title="src/Controllers/ProtectedController.php"
<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ProtectedController
{
    public function index(Request $request, Response $response): Response
    {
        // 从请求属性中获取认证 (Authentication) 信息
        $auth = $request->getAttribute('auth');
        $response->getBody()->write(json_encode(['auth' => $auth->toArray()]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function detailed(Request $request, Response $response): Response
    {
        // 你的受保护端点逻辑
        $auth = $request->getAttribute('auth');
        $data = [
            'auth' => $auth->toArray(),
            'message' => '受保护数据访问成功'
        ];
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
```
