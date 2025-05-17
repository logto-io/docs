用户登录后，Logto 会将用户重定向到你在 Logto Console 中设置的回调 URL。在这个例子中，我们使用 `/callback` 作为回调 URL：

```python
@app.route("/callback")
async def callback():
    try:
        await client.handleSignInCallback(request.url) # 处理很多事情
        return redirect("/") # 登录成功后将用户重定向到主页
    except Exception as e:
        # 将此更改为你的错误处理逻辑
        return "Error: " + str(e)
```
