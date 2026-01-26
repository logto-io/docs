ユーザーがサインインした後、Logto は Logto コンソールで設定したコールバック URL にユーザーをリダイレクトします。この例では、`/callback` をコールバック URL として使用します：

```python
@app.route("/callback")
async def callback():
    try:
        await client.handleSignInCallback(request.url) # 多くの処理を行います
        return redirect("/") # サインインが成功した後、ユーザーをホームページにリダイレクトします
    except Exception as e:
        # ここをエラーハンドリングロジックに変更してください
        return "Error: " + str(e)
```
