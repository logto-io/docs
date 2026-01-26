在 Logto SDK 中，我們可以使用 `$client->isAuthenticated()` 來檢查驗證 (Authentication) 狀態。如果使用者已登入，該值將為 true，否則為 false。

我們還需要實作一個首頁來進行示範：

- 如果使用者未登入，顯示一個登入按鈕；
- 如果使用者已登入，顯示一個登出按鈕。

```php
Route::get('/', function () {
  if ($client->isAuthenticated() === false) {
    return "未驗證 <a href='/sign-in'>登入</a>";
  }

  return "<a href='/sign-out'>登出</a>";
});
```
