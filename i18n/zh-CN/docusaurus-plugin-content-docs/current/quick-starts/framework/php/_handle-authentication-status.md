在 Logto SDK 中，我们可以使用 `$client->isAuthenticated()` 来检查认证 (Authentication) 状态，如果用户已登录，值将为 true，否则，值将为 false。

我们还需要实现一个主页用于演示：

- 如果用户未登录，显示一个登录按钮；
- 如果用户已登录，显示一个登出按钮。

```php
Route::get('/', function () {
  if ($client->isAuthenticated() === false) {
    return "未认证 <a href='/sign-in'>登录</a>";
  }

  return "<a href='/sign-out'>登出</a>";
});
```