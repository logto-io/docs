```php title="routes/api.php"
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth.token')->group(function () {
    Route::get('/api/protected', function (Request $request) {
        // Accéder aux informations d'authentification à partir des attributs de la requête
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    });
});
```

**Ou en utilisant des contrôleurs :**

```php title="app/Http/Controllers/Api/ProtectedController.php"
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProtectedController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.token');
    }

    public function index(Request $request)
    {
        // Accéder aux informations d'authentification à partir des attributs de la requête
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    }

    public function show(Request $request)
    {
        // Votre logique de point de terminaison protégé
        $auth = $request->attributes->get('auth');
        return [
            'auth' => $auth->toArray(),
            'message' => 'Données protégées accessibles avec succès'
        ];
    }
}
```
