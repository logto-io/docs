Du benötigst die folgenden Werte, um von Logto ausgestellte Tokens zu validieren:

- JSON Web Key Set (JWKS) URI: Die URL zu den öffentlichen Schlüsseln von Logto, die zur Überprüfung von JWT-Signaturen verwendet wird.
- Aussteller (Issuer): Der erwartete Ausstellerwert (die OIDC-URL von Logto).

Zuerst finde den Endpunkt deines Logto-Tenants. Du findest ihn an verschiedenen Stellen:

- In der Logto-Konsole unter **Einstellungen** → **Domains**.
- In den Anwendungseinstellungen, die du in Logto konfiguriert hast, unter **Einstellungen** → **Endpoints & Credentials**.

### Abrufen vom OpenID Connect Discovery-Endpunkt \{#fetch-from-openid-connect-discovery-endpoint}

Diese Werte können vom OpenID Connect Discovery-Endpunkt von Logto abgerufen werden:

```
https://<your-logto-endpoint>/oidc/.well-known/openid-configuration
```

Hier ist ein Beispiel für eine Antwort (andere Felder wurden zur Übersichtlichkeit weggelassen):

```json
{
  "jwks_uri": "https://your-tenant.logto.app/oidc/jwks",
  "issuer": "https://your-tenant.logto.app/oidc"
}
```

### Im Code fest hinterlegen (nicht empfohlen) \{#hardcode-in-your-code-not-recommended}

Da Logto keine Anpassung der JWKS-URI oder des Ausstellers (Issuer) erlaubt, kannst du diese Werte fest in deinem Code hinterlegen. Dies wird jedoch für Produktionsanwendungen nicht empfohlen, da dies den Wartungsaufwand erhöhen kann, falls sich zukünftig Konfigurationen ändern.

- JWKS URI: `https://<your-logto-endpoint>/oidc/jwks`
- Aussteller (Issuer): `https://<your-logto-endpoint>/oidc`
