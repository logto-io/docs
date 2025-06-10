Nach dem Extrahieren des Tokens und dem Abrufen der OIDC-Konfiguration überprüfe Folgendes:

- **Signatur:** JWT muss gültig und von Logto (über JWKS) signiert sein.
- **Aussteller (Issuer):** Muss mit dem Aussteller deines Logto-Tenants übereinstimmen.
- **Zielgruppe (Audience):** Muss mit dem in Logto registrierten Ressourcenindikator der API oder dem Organisationskontext (falls zutreffend) übereinstimmen.
- **Ablauf (Expiration):** Token darf nicht abgelaufen sein.
- **Berechtigungen (Scopes):** Token muss die erforderlichen Berechtigungen für deine API / Aktion enthalten. Berechtigungen sind durch Leerzeichen getrennte Zeichenfolgen im `scope`-Anspruch.
- **Organisationskontext:** Wenn du API-Ressourcen auf Organisationsebene schützt, überprüfe den `organization_id`-Anspruch.

Siehe [JSON Web Token](https://auth.wiki/jwt), um mehr über die Struktur und Ansprüche von JWT zu erfahren.

### Was bei jedem Berechtigungsmodell zu prüfen ist \{#what-to-check-for-each-permission-model}

Die Ansprüche und Validierungsregeln unterscheiden sich je nach Berechtigungsmodell:

| Berechtigungsmodell                     | Audience-Anspruch (`aud`)                                                  | Organisations-Anspruch (`organization_id`)         | Zu prüfende Berechtigungen (`scope`) |
| --------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------ |
| Globale API-Ressourcen                  | API-Ressourcenindikator                                                    | _Nicht vorhanden_                                  | API-Ressourcen-Berechtigungen        |
| Organisation (nicht-API) Berechtigungen | `urn:logto:organization:<id>` (Organisationskontext ist im `aud`-Anspruch) | _Nicht vorhanden_                                  | Organisationsberechtigungen          |
| API-Ressourcen auf Organisationsebene   | API-Ressourcenindikator                                                    | Organisations-ID (muss mit Anfrage übereinstimmen) | API-Ressourcen-Berechtigungen        |

<small>
  Für nicht-API-Organisationsberechtigungen wird der Organisationskontext durch den `aud`-Anspruch dargestellt
  (z. B. `urn:logto:organization:abc123`). Der `organization_id`-Anspruch ist nur für Tokens von API-Ressourcen auf Organisationsebene vorhanden.
</small>

:::tip
Validiere immer sowohl Berechtigungen (Scopes) als auch Kontext (Audience, Organisation) für sichere Multi-Tenant-APIs.
:::
