In Logto SDK, we can use `client.isAuthenticated()` to check the authentication status, if the user is signed in, the value will be true, otherwise, the value will be false.

Here we also implement a simple home page for demonstration:

- If the user is not signed in, show a sign-in button;
- If the user is signed in, show a sign-out button.

```python
@app.route("/")
async def home():
    if client.isAuthenticated() is False:
        return "Not authenticated <a href='/sign-in'>Sign in</a>"
    return "Authenticated <a href='/sign-out'>Sign out</a>"
```
