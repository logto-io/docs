После входа пользователя, Logto перенаправит его на URL обратного вызова, который вы установили в Logto Console. В этом примере мы используем `/callback` в качестве URL обратного вызова:

```python
@app.route("/callback")
async def callback():
    try:
        await client.handleSignInCallback(request.url) # Обработка множества вещей
        return redirect("/") # Перенаправление пользователя на главную страницу после успешного входа
    except Exception as e:
        # Измените это на вашу логику обработки ошибок
        return "Ошибка: " + str(e)
```
