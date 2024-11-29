# Konfiguration

## Umgebungsvariablen

### Verwendung

Logto verarbeitet Umgebungsvariablen in folgender Reihenfolge:

- Systemumgebungsvariablen
- Die `.env`-Datei im Projektstamm, die dem [dotenv](https://github.com/motdotla/dotenv#readme)-Format entspricht

Daher werden die Systemumgebungsvariablen die Werte in `.env` überschreiben.

### Variablen

:::caution
Wenn du Logto über `npm start` im Projektstamm ausführst, wird `NODE_ENV` immer `production` sein.
:::

In den Standardwerten wird `protocol` entweder `http` oder `https` entsprechend deiner HTTPS-Konfiguration sein.

| Schlüssel               | Standardwert                         | Typ                                                      | Beschreibung                                                                                                                                                                                                                                         |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Welche Art von Umgebung, in der Logto läuft.                                                                                                                                                                                                         |
| PORT                    | `3001`                               | `number`                                                 | Der lokale Port, den Logto abhört.                                                                                                                                                                                                                   |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Der lokale Port, den die Logto Admin-Konsole abhört.                                                                                                                                                                                                 |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | Setze es auf `1` oder `true`, um den Port für die Admin-Konsole zu deaktivieren. Wenn `ADMIN_ENDPOINT` nicht gesetzt ist, wird die Admin-Konsole vollständig deaktiviert.                                                                            |
| DB_URL                  | N/A                                  | `string`                                                 | Der [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) für die Logto-Datenbank.                                                                                                                                    |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | Siehe [Aktivierung von HTTPS](#enabling-https) für Details.                                                                                                                                                                                          |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | Ebenso.                                                                                                                                                                                                                                              |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | Ebenso.                                                                                                                                                                                                                                              |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | Du kannst eine URL mit deiner benutzerdefinierten Domain für Online-Tests oder Produktion angeben. Dies wird auch den Wert des [OIDC-Ausstelleridentifikators](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) beeinflussen. |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | Du kannst eine URL mit deiner benutzerdefinierten Domain für die Produktion angeben (z. B. `ADMIN_ENDPOINT=https://admin.domain.com`). Dies wird auch den Wert der Admin-Konsole-Umleitungs-URIs beeinflussen.                                       |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | Gibt an, ob der Benutzername groß-/kleinsensitiv ist. Sei vorsichtig beim Ändern dieses Wertes; Änderungen werden vorhandene Datenbanken nicht automatisch anpassen, was eine manuelle Verwaltung erfordert.                                         |

### Aktivierung von HTTPS

#### Verwendung von Node

Node unterstützt HTTPS nativ. Gib **SOWOHL** `HTTPS_CERT_PATH` als auch `HTTPS_KEY_PATH` an, um HTTPS über Node zu aktivieren.

`HTTPS_CERT_PATH` gibt den Pfad zu deinem HTTPS-Zertifikat an, während `HTTPS_KEY_PATH` den Pfad zu deinem HTTPS-Schlüssel angibt.

#### Verwendung eines HTTPS-Proxys

Eine weitere gängige Praxis ist es, einen HTTPS-Proxy vor Node zu haben (z. B. Nginx).

In diesem Fall möchtest du wahrscheinlich `TRUST_PROXY_HEADER` auf `true` setzen, was angibt, ob Proxy-Header-Felder vertrauenswürdig sein sollen. Logto wird den Wert an die [Koa-App-Einstellungen](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings) weitergeben.

Siehe [Vertrauen in TLS-Offloading-Proxys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) für Informationen, wann dieses Feld konfiguriert werden sollte.

## Datenbankkonfigurationen

Das Verwalten zu vieler Umgebungsvariablen ist nicht effizient und flexibel, daher werden die meisten unserer allgemeinen Konfigurationen in der Datenbanktabelle `logto_configs` gespeichert.

Die Tabelle ist ein einfacher Schlüssel-Wert-Speicher, und der Schlüssel ist wie folgt aufzählbar:

| Schlüssel        | Typ                   | Beschreibung                                                                                                                             |
| ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | Das String-Array der [Signatur-Cookie-Schlüssel](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys).      |
| oidc.privateKeys | <code>string[]</code> | Das String-Array des privaten Schlüsselinhalts für [OIDC JWT-Signierung](https://openid.net/specs/openid-connect-core-1_0.html#Signing). |

### Unterstützte private Schlüsseltypen

- EC (P-256, secp256k1, P-384 und P-521 Kurven)
- RSA
- OKP (Ed25519, Ed448, X25519, X448 Subtypen)
