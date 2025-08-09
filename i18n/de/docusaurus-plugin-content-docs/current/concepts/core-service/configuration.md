# Konfiguration

## Umgebungsvariablen {#environment-variables}

### Verwendung {#usage}

Logto verarbeitet Umgebungsvariablen in folgender Reihenfolge:

- System-Umgebungsvariablen
- Die `.env`-Datei im Projektstamm, die dem [dotenv](https://github.com/motdotla/dotenv#readme)-Format entspricht

Somit überschreiben die System-Umgebungsvariablen die Werte in `.env`.

### Variablen {#variables}

:::caution
Wenn du Logto über `npm start` im Projektstamm ausführst, ist `NODE_ENV` immer `production`.
:::

Bei Standardwerten ist `protocol` entweder `http` oder `https` entsprechend deiner HTTPS-Konfiguration.

| Key                     | Standardwert                         | Typ                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                           |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | In welcher Art von Umgebung Logto ausgeführt wird.                                                                                                                                                                                                                                                                                     |
| PORT                    | `3001`                               | `number`                                                 | Der lokale Port, auf dem Logto lauscht.                                                                                                                                                                                                                                                                                                |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Der lokale Port, auf dem die Logto Admin Console lauscht.                                                                                                                                                                                                                                                                              |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | Setze diesen Wert auf `1` oder `true`, um den Port für die Admin Console zu deaktivieren. Wenn `ADMIN_ENDPOINT` nicht gesetzt ist, wird die Admin Console vollständig deaktiviert.                                                                                                                                                     |
| DB_URL                  | N/A                                  | `string`                                                 | Die [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) für die Logto-Datenbank.                                                                                                                                                                                                                      |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | Siehe [HTTPS aktivieren](#enabling-https) für Details.                                                                                                                                                                                                                                                                                 |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | Siehe oben.                                                                                                                                                                                                                                                                                                                            |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | Siehe oben.                                                                                                                                                                                                                                                                                                                            |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | Du kannst eine URL mit deiner eigenen Domain für Online-Tests oder Produktion angeben. Dies beeinflusst auch den Wert des [OIDC Aussteller-Identifiers](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier).                                                                                                       |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | Du kannst eine URL mit deiner eigenen Domain für die Produktion angeben (z. B. `ADMIN_ENDPOINT=https://admin.domain.com`). Dies beeinflusst auch die Redirect-URIs der Admin Console.                                                                                                                                                  |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | Gibt an, ob der Benutzername Groß- / Kleinschreibung beachtet. Sei vorsichtig beim Ändern dieses Wertes; Änderungen passen bestehende Daten in der Datenbank nicht automatisch an und erfordern manuelle Verwaltung.                                                                                                                   |
| SECRET_VAULT_KEK        | `undefined`                          | `string`                                                 | Der Key Encryption Key (KEK), der zur Verschlüsselung der Data Encryption Keys (DEK) im [Secret Vault](/secret-vault) verwendet wird. Erforderlich, damit der Secret Vault ordnungsgemäß funktioniert. Muss ein base64-codierter String sein. AES-256 (32 Bytes) wird empfohlen. Beispiel: `crypto.randomBytes(32).toString('base64')` |

### HTTPS aktivieren {#enabling-https}

#### Verwendung von Node {#using-node}

Node unterstützt HTTPS nativ. Gib **SOWOHL** `HTTPS_CERT_PATH` als auch `HTTPS_KEY_PATH` an, um HTTPS über Node zu aktivieren.

`HTTPS_CERT_PATH` gibt den Pfad zu deinem HTTPS-Zertifikat an, während `HTTPS_KEY_PATH` den Pfad zu deinem HTTPS-Schlüssel angibt.

#### Verwendung eines HTTPS-Proxys {#using-a-https-proxy}

Eine weitere gängige Praxis ist es, einen HTTPS-Proxy vor Node zu schalten (z. B. Nginx).

In diesem Fall möchtest du wahrscheinlich `TRUST_PROXY_HEADER` auf `true` setzen, was angibt, ob Proxy-Header-Felder vertraut werden sollen. Logto gibt den Wert an die [Koa-App-Einstellungen](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings) weiter.

Siehe [Trusting TLS offloading proxies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies), um zu erfahren, wann dieses Feld konfiguriert werden sollte.

## Datenbank-Konfigurationen {#database-configs}

Zu viele Umgebungsvariablen zu verwalten ist weder effizient noch flexibel, daher werden die meisten allgemeinen Konfigurationen in der Datenbanktabelle `logto_configs` gespeichert.

Die Tabelle ist eine einfache Key-Value-Speicherung, und der Schlüssel ist wie folgt aufzählbar:

| Key              | Typ                   | Beschreibung                                                                                                                              |
| ---------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | Das String-Array der [Signatur-Cookie-Keys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys).            |
| oidc.privateKeys | <code>string[]</code> | Das String-Array des privaten Schlüssel-Inhalts für [OIDC JWT-Signierung](https://openid.net/specs/openid-connect-core-1_0.html#Signing). |

### Unterstützte private Schlüsseltypen {#supported-private-key-types}

- EC (P-256, secp256k1, P-384 und P-521 Kurven)
- RSA
- OKP (Ed25519, Ed448, X25519, X448 Subtypen)
