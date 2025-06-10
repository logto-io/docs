Manchmal musst du möglicherweise das Zugangstoken (Access token) oder das ID-Token (ID token) für API-Aufrufe abrufen. Du kannst die Methode `GetTokenAsync` verwenden, um die Tokens abzurufen:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

Du musst dir keine Sorgen um das Ablaufdatum des Tokens machen, die Authentifizierungsmiddleware aktualisiert die Tokens bei Bedarf automatisch.

:::caution
Obwohl die Authentifizierungsmiddleware die Tokens automatisch aktualisiert, werden die Ansprüche (Claims) im Benutzerobjekt aufgrund der Einschränkung des zugrunde liegenden OpenID Connect-Authentifizierungs-Handlers nicht aktualisiert.
Dies kann behoben werden, sobald wir unseren eigenen Authentifizierungs-Handler schreiben.
:::

Beachte, dass das oben genannte Zugangstoken (Access token) ein opaker Token (Opaque token) für den userinfo-Endpunkt in OpenID Connect ist, welches kein JWT ist. Wenn du die API-Ressource angegeben hast, musst du `LogtoParameters.Tokens.AccessTokenForResource` verwenden, um das Zugangstoken (Access token) für die API-Ressource abzurufen:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

Dieses Token wird ein JWT mit der API-Ressource als Zielgruppe (Audience) sein.
