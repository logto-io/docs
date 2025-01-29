---
description: Nutze Management APIs, um auf die Backend-Dienste von Logto zuzugreifen und dein CIAM-System mit Benutzerverwaltung, Kontoeinstellungen, Identitätsüberprüfung und Multi-Tenant-Architektur zu skalieren.
sidebar_position: 5
---

import logtoManagementApiResourceSrc from './assets/logto-management-api-resource.webp';
import logtoManagementApiDetailsSrc from './assets/logto-management-api-details.webp';

import BasicsAboutAccessTokenRequest from '../../quick-starts/generic/machine-to-machine/fragments/\_basics-about-access-token-request.mdx';
import FetchAccessTokenForLogtoManagementApi from '../../quick-starts/generic/machine-to-machine/fragments/\_fetch-access-token-for-logto-management-api.mdx';
import AccessTokenUsage from '../../quick-starts/generic/machine-to-machine/fragments/\_access-token-usage.mdx';
import AccessLogtoManagementApiUsingAccessToken from '../../quick-starts/generic/machine-to-machine/fragments/\_access-logto-management-api-using-access-token.mdx';
import M2mAccessTokenNote from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-access-token-sub-note.mdx';
import M2mRoleAssignment from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-role-assignment.mdx';

# Interaktion mit der Management API

## Was ist die Logto Management API? {#what-is-logto-management-api}

Die Logto Management API ist eine umfassende Sammlung von APIs, die Entwicklern die volle Kontrolle über ihre Implementierung gibt, um ihre Produktanforderungen und ihren Technologie-Stack zu erfüllen. Sie ist vorgefertigt, im <CloudLink to="/api-resources">Konsole > API-Ressourcen > Logto Management API</CloudLink> aufgelistet und kann nicht gelöscht oder modifiziert werden.

Ihr Bezeichner hat das Muster `https://[tenant-id].logto.app/api`

<img alt="Logto Management API Resource" src={logtoManagementApiResourceSrc} />

<img alt="Logto Management API Details" src={logtoManagementApiDetailsSrc} />

Mit der Logto Management API kannst du auf die robusten Backend-Dienste von Logto zugreifen, die hoch skalierbar sind und in einer Vielzahl von Szenarien genutzt werden können. Sie geht über das hinaus, was mit den Low-Code-Fähigkeiten der Admin-Konsole möglich ist.

Einige häufig verwendete APIs sind unten aufgeführt:

- [User](https://openapi.logto.io/operation/operation-getuser)
- [Application](https://openapi.logto.io/operation/operation-listapplications)
- [Audit logs](https://openapi.logto.io/operation/operation-listlogs)
- [Roles](https://openapi.logto.io/operation/operation-listroles)
- [Resources](https://openapi.logto.io/operation/operation-listresources)
- [Connectors](https://openapi.logto.io/operation/operation-listconnectors)
- [Organizations](https://openapi.logto.io/operation/operation-listorganizations)

Um mehr über die verfügbaren APIs zu erfahren, besuche bitte https://openapi.logto.io/.

## Wie greift man auf die Logto Management API zu? {#how-to-access-logto-management-api}

### Erstelle eine M2M-App {#create-an-m2m-app}

:::note
Wenn du mit dem M2M (Machine-to-Machine) Authentifizierungsfluss nicht vertraut bist, empfehlen wir, zuerst [Verständnis des Authentifizierungsflusses](/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow) zu lesen, um die grundlegenden Konzepte zu verstehen.
:::

Gehe zu <CloudLink to="/applications">Konsole > Anwendungen</CloudLink>, wähle den Anwendungstyp "Maschine-zu-Maschine" und starte den Erstellungsprozess.

<M2mRoleAssignment />

Im Rollenzuweisungsmodul kannst du sehen, dass alle M2M-Rollen enthalten sind, und Rollen, die durch ein Logto-Symbol angezeigt werden, bedeuten, dass diese Rollen Logto Management API-Berechtigungen enthalten.

Weise nun M2M-Rollen zu, die Logto Management API-Berechtigungen für deine M2M-App enthalten.

### Ein Zugangstoken abrufen {#fetch-an-access-token}

#### Grundlagen zur Zugangstoken-Anfrage {#basics-about-access-token-request}

<BasicsAboutAccessTokenRequest />

#### Zugangstoken für die Logto Management API abrufen {#fetch-access-token-for-logto-management-api}

<FetchAccessTokenForLogtoManagementApi />

#### Zugangstoken-Antwort {#access-token-response}

Eine erfolgreiche Zugangstoken-Antwort sieht folgendermaßen aus:

```json
{
  "access_token": "eyJhbG...2g", // Verwende dieses Token, um auf die Logto Management API zuzugreifen
  "expires_in": 3600, // Token-Ablauf in Sekunden
  "token_type": "Bearer", // Authentifizierungstyp für deine Anfrage bei Verwendung des Zugangstokens
  "scope": "all" // Berechtigung `all` für die Logto Management API
}
```

<M2mAccessTokenNote />

### Zugriff auf die Logto Management API mit Zugangstoken {#access-logto-management-api-using-access-token}

<AccessTokenUsage />

<AccessLogtoManagementApiUsingAccessToken />

## Typische Szenarien für die Nutzung der Logto Management API {#typical-scenarios-for-using-logto-management-api}

Unsere Entwickler haben viele zusätzliche Funktionen mit der Logto Management API implementiert. Wir glauben, dass unsere API hoch skalierbar ist und eine breite Palette deiner Bedürfnisse unterstützen kann. Hier sind einige Beispiele für Szenarien, die mit der Logto Admin-Konsole nicht möglich sind, aber durch die Logto Management API erreicht werden können.

### Benutzerprofil selbst implementieren {#implement-user-profile-on-your-own}

Logto bietet derzeit keine vorgefertigte UI-Lösung für Benutzerprofile. Wir erkennen an, dass Benutzerprofile eng mit Geschäfts- und Produktattributen verbunden sind. Während wir daran arbeiten, den besten Ansatz zu bestimmen, schlagen wir vor, unsere APIs zu nutzen, um deine eigene Lösung zu erstellen. Beispielsweise kannst du unsere Interaktions-API, Profil-API und Verifizierungscode-API verwenden, um eine benutzerdefinierte Lösung zu entwickeln, die deinen Anforderungen entspricht.

### Erweiterte Benutzersuche {#advanced-user-search}

Die Logto Admin-Konsole unterstützt grundlegende Such- und Filterfunktionen. Für erweiterte Suchoptionen wie unscharfe Suche, exakte Übereinstimmung und Groß-/Kleinschreibung, schaue dir unsere [Erweiterte Benutzersuche](/user-management/advanced-user-search) Tutorials und Anleitungen an.

### Organisationsverwaltung selbst implementieren {#implement-organization-management-on-your-own}

Wenn du die [Organisationen](/organizations) Funktion nutzt, um deine Multi-Tenant-App zu erstellen, benötigst du möglicherweise die Logto Management API für Aufgaben wie Organisationseinladungen und Mitgliederverwaltung. Für dein SaaS-Produkt, bei dem du sowohl Administratoren als auch Mitglieder im Tenant hast, kann die Logto Management API dir helfen, ein benutzerdefiniertes Admin-Portal zu erstellen, das auf deine Geschäftsanforderungen zugeschnitten ist. Schaue dir [dies](/end-user-flows/organization-experience/) für mehr Details an.

## Tipps zur Nutzung der Logto Management API {#tips-for-using-logto-management-api}

### Verwaltung paginierter API-Antworten {#managing-paginated-api-responses}

Einige der API-Antworten können viele Ergebnisse enthalten, die Ergebnisse werden paginiert. Logto bietet 2 Arten von Paginierungsinformationen.

#### Verwendung von Link-Headern {#using-link-headers}

Ein paginierter Antwort-Header sieht folgendermaßen aus:

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

Der Link-Header bietet die URL für die vorherige, nächste, erste und letzte Seite der Ergebnisse:

- Die URL für die vorherige Seite folgt auf rel="prev".
- Die URL für die nächste Seite folgt auf rel="next".
- Die URL für die letzte Seite folgt auf rel="last".
- Die URL für die erste Seite folgt auf rel="first".

#### Verwendung des Total-Number-Headers {#using-total-number-header}

Zusätzlich zu den Standard-Link-Headern fügt Logto auch einen `Total-Number`-Header hinzu:

```
Total-Number: 216
```

Das wäre sehr praktisch und nützlich, um Seitenzahlen anzuzeigen.

#### Ändern der Seitennummer und der Seitengröße {#changing-page-number-and-page-size}

Es gibt 2 optionale Abfrageparameter:

- `page`: gibt die Seitennummer an, beginnt bei 1, der Standardwert ist 1.
- `page_size`: gibt die Anzahl der Elemente pro Seite an, der Standardwert ist 20.

### Ratenbegrenzung {#rate-limit}

:::note
Dies gilt nur für Logto Cloud.
:::

Um die Zuverlässigkeit und Sicherheit unserer Dienste für alle Benutzer zu gewährleisten, setzen wir eine allgemeine Firewall ein, die den Datenverkehr zu unserer Website überwacht und verwaltet. Obwohl wir keine strikte Ratenbegrenzung durchsetzen, empfehlen wir den Benutzern, ihre Aktivität auf etwa 200 Anfragen alle 10 Sekunden zu beschränken, um unsere Schutzmaßnahmen nicht auszulösen.

## Verwandte Ressourcen {#related-resources}

<Url href="https://blog.logto.io/management-api">
  Verwendung der Logto Management API: Eine Schritt-für-Schritt-Anleitung
</Url>

<Url href="https://blog.logto.io/use-postman-to-obtain-m2m-access-token">M2M-Zugangstokens in Minuten mit Postman erhalten</Url>
