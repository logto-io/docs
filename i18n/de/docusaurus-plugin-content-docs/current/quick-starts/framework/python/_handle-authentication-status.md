Im Logto SDK können wir `client.isAuthenticated()` verwenden, um den Authentifizierungsstatus zu überprüfen. Wenn der Benutzer angemeldet ist, wird der Wert true sein, andernfalls wird der Wert false sein.

Hier implementieren wir auch eine einfache Startseite zur Demonstration:

- Wenn der Benutzer nicht angemeldet ist, wird eine Anmeldeschaltfläche angezeigt;
- Wenn der Benutzer angemeldet ist, wird eine Abmeldeschaltfläche angezeigt.

```python
@app.route("/")
async def home():
    if client.isAuthenticated() is False:
        return "Nicht authentifiziert <a href='/sign-in'>Anmelden</a>"
    return "Authentifiziert <a href='/sign-out'>Abmelden</a>"
```
