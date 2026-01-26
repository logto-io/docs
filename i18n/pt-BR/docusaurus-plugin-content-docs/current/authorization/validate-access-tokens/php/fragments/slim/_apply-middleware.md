```php title="src/Controllers/ProtectedController.php"
<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ProtectedController
{
    public function index(Request $request, Response $response): Response
    {
        // Acesse as informações de autenticação a partir dos atributos da requisição
        $auth = $request->getAttribute('auth');
        $response->getBody()->write(json_encode(['auth' => $auth->toArray()]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function detailed(Request $request, Response $response): Response
    {
        // Sua lógica de endpoint protegido
        $auth = $request->getAttribute('auth');
        $data = [
            'auth' => $auth->toArray(),
            'message' => 'Dados protegidos acessados com sucesso'
        ];
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
```
