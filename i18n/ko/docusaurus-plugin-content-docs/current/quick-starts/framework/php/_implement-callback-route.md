사용자가 로그인한 후, Logto는 사용자를 Logto Console에서 설정한 콜백 URL로 리디렉션합니다. 이 예제에서는 `/callback`을 콜백 URL로 사용합니다:

```php
Route::get('/callback', function () {
  try {
    $client->handleSignInCallback(); // 많은 작업을 처리합니다
  } catch (\Throwable $exception) {
    return $exception; // 이 부분을 오류 처리 로직으로 변경하세요
  }
  return redirect('/'); // 로그인에 성공한 후 사용자를 홈 페이지로 리디렉션합니다
});
```
