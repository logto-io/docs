Logto SDK では、`client.isAuthenticated()` を使用して認証 (Authentication) 状態を確認できます。ユーザーがサインインしている場合、この値は true になり、そうでない場合は false になります。

ここでは、デモ用にシンプルなホームページを実装します：

- ユーザーがサインインしていない場合、サインインボタンを表示します。
- ユーザーがサインインしている場合、サインアウトボタンを表示します。

```python
@app.route("/")
async def home():
    if client.isAuthenticated() is False:
        return "認証されていません <a href='/sign-in'>サインイン</a>"
    return "認証されています <a href='/sign-out'>サインアウト</a>"
```
