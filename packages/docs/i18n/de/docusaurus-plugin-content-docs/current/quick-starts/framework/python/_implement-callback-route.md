Nachdem sich der Benutzer angemeldet hat, leitet Logto den Benutzer zur Callback-URL weiter, die du in der Logto-Konsole festgelegt hast. In diesem Beispiel verwenden wir `/callback` als Callback-URL:

```python
@app.route("/callback")
async def callback():
    try:
        await client.handleSignInCallback(request.url) # Eine Menge Dinge handhaben
        return redirect("/") # Den Benutzer nach einer erfolgreichen Anmeldung zur Startseite weiterleiten
    except Exception as e:
        # Ändere dies zu deiner Fehlerbehandlungslogik
        return "Fehler: " + str(e)
```
