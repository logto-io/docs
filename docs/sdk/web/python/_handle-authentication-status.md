In Logto SDK, we can use `client.isAuthenticated()` to check the authentication status, if the user is signed in, the value will be true, otherwise, the value will be false.

Here we also implement a simple home page for demonstration:

- If the user is not signed in, show a sign-in button;
- If the user is signed in, show some basic information about the user.

```python
@app.route("/")
async def home():
    if client.isAuthenticated() is False:
        return "Not authenticated <a href='/sign-in'>Sign in</a>"

    return (
        # Get local ID token claims
        client.getIdTokenClaims().model_dump_json(exclude_unset=True)
        + "<br>"
        # Fetch user info from Logto userinfo endpoint
        (await client.fetchUserInfo()).model_dump_json(exclude_unset=True)
        + "<br><a href='/sign-out'>Sign out</a>"
    )
```

Our data models are based on [pydantic](https://docs.pydantic.dev/), so you can use `model_dump_json` to dump the data model to JSON.

Adding `exclude_unset=True` will exclude unset fields from the JSON output, which makes the output more precise.

For example, if we didn't request the `email` scope when signing in, and the `email` field will be excluded from the JSON output. However, if we requested the `email` scope, but the user doesn't have an email address, the `email` field will be included in the JSON output with a `null` value.

To learn more about scopes and claims, see [Get user information](#get-user-information).
