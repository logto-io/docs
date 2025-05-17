在 Logto SDK 中，我們可以使用 `client.isAuthenticated()` 來檢查驗證 (Authentication) 狀態，如果使用者已登入，值將為 true，否則值將為 false。

這裡我們也實作了一個簡單的首頁作為示範：

- 如果使用者未登入，顯示登入按鈕；
- 如果使用者已登入，顯示登出按鈕。

```python
@app.route("/")
async def home():
    if client.isAuthenticated() is False:
        return "未驗證 <a href='/sign-in'>登入</a>"
    return "已驗證 <a href='/sign-out'>登出</a>"
```
