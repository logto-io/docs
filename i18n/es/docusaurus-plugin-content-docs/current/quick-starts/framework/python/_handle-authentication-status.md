En Logto SDK, podemos usar `client.isAuthenticated()` para verificar el estado de autenticación. Si el usuario ha iniciado sesión, el valor será verdadero; de lo contrario, el valor será falso.

Aquí también implementamos una página de inicio simple para demostración:

- Si el usuario no ha iniciado sesión, muestra un botón de inicio de sesión;
- Si el usuario ha iniciado sesión, muestra un botón de cierre de sesión.

```python
@app.route("/")
async def home():
    if client.isAuthenticated() is False:
        return "No autenticado <a href='/sign-in'>Iniciar sesión</a>"
    return "Autenticado <a href='/sign-out'>Cerrar sesión</a>"
```
