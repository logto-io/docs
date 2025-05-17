使用者登入後，Logto 會將使用者重定向到你在 Logto Console 中設定的回呼 URL。在此範例中，我們使用 `/callback` 作為回呼 URL：

```python
@app.route("/callback")
async def callback():
    try:
        await client.handleSignInCallback(request.url) # 處理許多事情
        return redirect("/") # 成功登入後將使用者重定向到首頁
    except Exception as e:
        # 將此處更改為你的錯誤處理邏輯
        return "Error: " + str(e)
```
