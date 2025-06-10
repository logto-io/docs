```php title="src/Controllers/ProtectedController.php"
<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ProtectedController
{
    public function index(Request $request, Response $response): Response
    {
        // Zugriff auf Authentifizierungsinformationen aus den Request-Attributen
        $auth = $request->getAttribute('auth');
        $response->getBody()->write(json_encode(['auth' => $auth->toArray()]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function detailed(Request $request, Response $response): Response
    {
        // Deine Logik für den geschützten Endpunkt
        $auth = $request->getAttribute('auth');
        $data = [
            'auth' => $auth->toArray(),
            'message' => 'Geschützte Daten wurden erfolgreich abgerufen'
        ];
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
```
