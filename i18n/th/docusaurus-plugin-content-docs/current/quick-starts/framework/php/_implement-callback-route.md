หลังจากผู้ใช้ลงชื่อเข้าใช้แล้ว Logto จะเปลี่ยนเส้นทางผู้ใช้ไปยัง callback URL ที่คุณตั้งค่าไว้ใน Logto Console ในตัวอย่างนี้ เราใช้ `/callback` เป็น callback URL:

```php
Route::get('/callback', function () {
  try {
    $client->handleSignInCallback(); // จัดการกระบวนการต่าง ๆ ที่เกี่ยวข้อง
  } catch (\Throwable $exception) {
    return $exception; // เปลี่ยนส่วนนี้เป็นตรรกะจัดการข้อผิดพลาดของคุณ
  }
  return redirect('/'); // เปลี่ยนเส้นทางผู้ใช้ไปยังหน้าแรกหลังลงชื่อเข้าใช้สำเร็จ
});
```
