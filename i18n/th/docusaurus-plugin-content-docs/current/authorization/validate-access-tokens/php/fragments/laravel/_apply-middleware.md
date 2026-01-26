```php title="routes/api.php"
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth.token')->group(function () {
    Route::get('/api/protected', function (Request $request) {
        // เข้าถึงข้อมูลการยืนยันตัวตนจาก attributes ของ request
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    });
});
```

**หรือใช้ controller:**

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
        // เข้าถึงข้อมูลการยืนยันตัวตนจาก attributes ของ request
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    }

    public function show(Request $request)
    {
        // ตรรกะสำหรับ endpoint ที่ได้รับการป้องกันของคุณ
        $auth = $request->attributes->get('auth');
        return [
            'auth' => $auth->toArray(),
            'message' => 'เข้าถึงข้อมูลที่ได้รับการป้องกันสำเร็จ'
        ];
    }
}
```
