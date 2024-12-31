사용자가 로그인한 후, Logto는 Logto Console에 설정한 콜백 URL로 사용자를 리디렉션합니다. 이 예제에서는 `/callback`을 콜백 URL로 사용합니다:

```python
@app.route("/callback")
async def callback():
    try:
        await client.handleSignInCallback(request.url) # 많은 작업을 처리합니다
        return redirect("/") # 로그인에 성공한 후 사용자를 홈 페이지로 리디렉션합니다
    except Exception as e:
        # 오류 처리 로직으로 변경하세요
        return "Error: " + str(e)
```
