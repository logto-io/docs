Logto SDK では、`$client->isAuthenticated()` を使用して認証 (Authentication) ステータスを確認できます。ユーザーがサインインしている場合、この値は true になります。そうでない場合、この値は false になります。

デモ用にホームページを実装する必要があります：

- ユーザーがサインインしていない場合、サインインボタンを表示します。
- ユーザーがサインインしている場合、サインアウトボタンを表示します。

```php
Route::get('/', function () {
  if ($client->isAuthenticated() === false) {
    return "Not authenticated <a href='/sign-in'>Sign in</a>";
  }

  return "<a href='/sign-out'>Sign out</a>";
});
```
