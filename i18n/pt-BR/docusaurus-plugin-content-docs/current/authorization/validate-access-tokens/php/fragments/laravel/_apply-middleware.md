```php title="routes/api.php"
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth.token')->group(function () {
    Route::get('/api/protected', function (Request $request) {
        // Acesse as informações de autenticação a partir dos atributos da requisição
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    });
});
```

**Ou usando controllers:**

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
        // Acesse as informações de autenticação a partir dos atributos da requisição
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    }

    public function show(Request $request)
    {
        // Sua lógica de endpoint protegido
        $auth = $request->attributes->get('auth');
        return [
            'auth' => $auth->toArray(),
            'message' => 'Dados protegidos acessados com sucesso'
        ];
    }
}
```
