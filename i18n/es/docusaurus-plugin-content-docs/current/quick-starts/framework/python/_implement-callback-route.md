Después de que el usuario inicie sesión, Logto redirigirá al usuario a la URL de callback que configuraste en la Logto Console. En este ejemplo, usamos `/callback` como la URL de callback:

```python
@app.route("/callback")
async def callback():
    try:
        await client.handleSignInCallback(request.url) # Maneja muchas cosas
        return redirect("/") # Redirige al usuario a la página de inicio después de un inicio de sesión exitoso
    except Exception as e:
        # Cambia esto a tu lógica de manejo de errores
        return "Error: " + str(e)
```
