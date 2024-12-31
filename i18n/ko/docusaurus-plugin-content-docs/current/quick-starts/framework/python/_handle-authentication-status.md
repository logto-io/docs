Logto SDK에서는 `client.isAuthenticated()`를 사용하여 인증 상태를 확인할 수 있습니다. 사용자가 로그인되어 있으면 값은 true가 되고, 그렇지 않으면 값은 false가 됩니다.

여기서는 데모를 위해 간단한 홈 페이지를 구현합니다:

- 사용자가 로그인되어 있지 않으면, 로그인 버튼을 표시합니다.
- 사용자가 로그인되어 있으면, 로그아웃 버튼을 표시합니다.

```python
@app.route("/")
async def home():
    if client.isAuthenticated() is False:
        return "인증되지 않음 <a href='/sign-in'>로그인</a>"
    return "인증됨 <a href='/sign-out'>로그아웃</a>"
```
