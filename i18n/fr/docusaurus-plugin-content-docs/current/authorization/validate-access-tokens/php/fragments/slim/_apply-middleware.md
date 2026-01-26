```php title="src/Controllers/ProtectedController.php"
<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ProtectedController
{
    public function index(Request $request, Response $response): Response
    {
        // Accéder aux informations d'authentification à partir des attributs de la requête
        $auth = $request->getAttribute('auth');
        $response->getBody()->write(json_encode(['auth' => $auth->toArray()]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function detailed(Request $request, Response $response): Response
    {
        // Votre logique de point de terminaison protégé
        $auth = $request->getAttribute('auth');
        $data = [
            'auth' => $auth->toArray(),
            'message' => 'Données protégées accessibles avec succès'
        ];
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
```
