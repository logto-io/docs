```php title="routes/api.php"
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth.token')->group(function () {
    Route::get('/api/protected', function (Request $request) {
        // Zugriff auf Authentifizierungsinformationen aus den Request-Attributen
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    });
});
```

**Oder mit Controllern:**

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
        // Zugriff auf Authentifizierungsinformationen aus den Request-Attributen
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    }

    public function show(Request $request)
    {
        // Deine Logik für den geschützten Endpunkt
        $auth = $request->attributes->get('auth');
        return [
            'auth' => $auth->toArray(),
            'message' => 'Geschützte Daten wurden erfolgreich abgerufen'
        ];
    }
}
```
