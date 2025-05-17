After the user signs in, Logto will redirect the user to the callback URL you set in the Logto Console. In this example, we use `/callback` as the callback URL:

```python
@app.route("/callback")
async def callback():
    try:
        await client.handleSignInCallback(request.url) # Handle a lot of stuff
        return redirect("/") # Redirect the user to the home page after a successful sign-in
    except Exception as e:
        # Change this to your error handling logic
        return "Error: " + str(e)
```
