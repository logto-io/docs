ユーザーがサインインした後、Logto はユーザーを Logto コンソールで設定したコールバック URL にリダイレクトします。この例では、`/callback` をコールバック URL として使用します：

```php
Route::get('/callback', function () {
  try {
    $client->handleSignInCallback(); // 多くの処理を行います
  } catch (\Throwable $exception) {
    return $exception; // これをエラーハンドリングロジックに変更してください
  }
  return redirect('/'); // サインインが成功した後、ユーザーをホームページにリダイレクトします
});
```
