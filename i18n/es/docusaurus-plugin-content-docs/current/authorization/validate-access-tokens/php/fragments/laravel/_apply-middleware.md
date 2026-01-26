```php title="routes/api.php"
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth.token')->group(function () {
    Route::get('/api/protected', function (Request $request) {
        // Accede a la información de autenticación desde los atributos de la solicitud
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    });
});
```

**O usando controladores:**

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
        // Accede a la información de autenticación desde los atributos de la solicitud
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    }

    public function show(Request $request)
    {
        // Tu lógica del endpoint protegido
        $auth = $request->attributes->get('auth');
        return [
            'auth' => $auth->toArray(),
            'message' => 'Datos protegidos accedidos correctamente'
        ];
    }
}
```
