Manchmal musst du das Zugangstoken oder ID-Token für API-Aufrufe abrufen. Du kannst die Methode `GetTokenAsync` verwenden, um die Tokens abzurufen:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

Du musst dir keine Sorgen über das Ablaufen der Tokens machen, die Authentifizierungsmiddleware wird die Tokens bei Bedarf automatisch auffrischen.

:::caution
Obwohl die Authentifizierungsmiddleware die Tokens automatisch auffrischt, werden die Ansprüche im Benutzerobjekt aufgrund der Einschränkungen des zugrunde liegenden OpenID Connect-Authentifizierungs-Handlers nicht aktualisiert.
Dies kann behoben werden, sobald wir unseren eigenen Authentifizierungs-Handler schreiben.
:::

Beachte, dass das oben genannte Zugangstoken ein opakes Token für den Userinfo-Endpunkt in OpenID Connect ist, welches kein JWT-Token ist. Wenn du die API-Ressource angegeben hast, musst du `LogtoParameters.Tokens.AccessTokenForResource` verwenden, um das Zugangstoken für die API-Ressource abzurufen:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

Dieses Token wird ein JWT-Token mit der API-Ressource als Zielgruppe sein.
