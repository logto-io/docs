用户登录后，日志 (Logto) 会将用户重定向到你在日志 (Logto) 控制台中设置的回调 URL。在此示例中，我们使用 `/callback` 作为回调 URL：

```php
Route::get('/callback', function () {
  try {
    $client->handleSignInCallback(); // 处理很多事情
  } catch (\Throwable $exception) {
    return $exception; // 将此更改为你的错误处理逻辑
  }
  return redirect('/'); // 成功登录后将用户重定向到主页
});
```
