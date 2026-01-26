```php title="src/Controllers/ProtectedController.php"
<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ProtectedController
{
    public function index(Request $request, Response $response): Response
    {
        // リクエスト属性から認証 (Authentication) 情報へアクセス
        $auth = $request->getAttribute('auth');
        $response->getBody()->write(json_encode(['auth' => $auth->toArray()]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function detailed(Request $request, Response $response): Response
    {
        // 保護されたエンドポイントのロジック
        $auth = $request->getAttribute('auth');
        $data = [
            'auth' => $auth->toArray(),
            'message' => '保護されたデータへのアクセスに成功しました'
        ];
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
```
