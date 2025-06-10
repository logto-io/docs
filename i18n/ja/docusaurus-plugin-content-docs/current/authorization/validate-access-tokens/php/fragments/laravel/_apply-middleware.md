```php title="routes/api.php"
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth.token')->group(function () {
    Route::get('/api/protected', function (Request $request) {
        // リクエスト属性から認証情報へアクセス
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    });
});
```

**またはコントローラーを使用する場合：**

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
        // リクエスト属性から認証情報へアクセス
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    }

    public function show(Request $request)
    {
        // 保護されたエンドポイントのロジック
        $auth = $request->attributes->get('auth');
        return [
            'auth' => $auth->toArray(),
            'message' => '保護されたデータへのアクセスに成功しました'
        ];
    }
}
```
