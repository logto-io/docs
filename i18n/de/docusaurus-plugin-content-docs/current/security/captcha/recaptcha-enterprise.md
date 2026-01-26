---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise ist ein Google-Dienst, der Websites mithilfe fortschrittlicher Bot-Erkennung vor Betrug und Missbrauch schützt, ohne das Benutzererlebnis zu beeinträchtigen. Diese Anleitung führt dich durch den Prozess der Einrichtung von reCAPTCHA Enterprise mit Logto.

## Voraussetzungen {#prerequisites}

- Ein Google Cloud-Projekt

## reCAPTCHA-Schlüssel einrichten {#setup-a-recaptcha-key}

1. Gehe zur [reCAPTCHA-Seite der Google Cloud Console](https://console.cloud.google.com/security/recaptcha).
2. Klicke auf die Schaltfläche **Schlüssel erstellen** neben "reCAPTCHA-Schlüssel".
3. Fülle das Formular mit folgenden Angaben aus:
   - **Anzeigename**: Beliebiger Name, den du dem Schlüssel geben möchtest
   - **Anwendungstyp**: Website
   - **Domainliste**: Füge die Endpunkt-Domain von Logto hinzu
   - **Verifizierungstyp**: Wähle zwischen **Punktbasiert (unsichtbar)** oder **Checkbox-Herausforderung**. Dies bestimmt, wie reCAPTCHA den Benutzern angezeigt wird. Siehe [Verifizierungsmodus](#verification-mode) für weitere Details.
4. Nach dem Erstellen des Schlüssels wirst du zur Schlüsseldetailseite weitergeleitet, kopiere die **ID**.

## API-Schlüssel einrichten {#setup-an-api-key}

1. Gehe zur [Anmeldedaten-Seite der Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Klicke auf die Schaltfläche **Anmeldedaten erstellen** und wähle **API-Schlüssel** aus.
3. Kopiere den API-Schlüssel.
4. Optional kannst du den API-Schlüssel auf die **reCAPTCHA Enterprise API** beschränken, um ihn sicherer zu machen.
5. Denke daran, "Anwendungsbeschränkungen" auf **Keine** zu belassen, wenn du nicht weißt, was das ist.

## Projekt-ID erhalten {#get-project-id}

1. Kopiere die **Projekt-ID** von der [Startseite der Google Cloud Console](https://console.cloud.google.com/welcome).

## Verifizierungsmodus {#verification-mode}

reCAPTCHA Enterprise unterstützt zwei Verifizierungsmodi:

- **Unsichtbar**: Punktbasierte Verifizierung, die automatisch im Hintergrund ohne Benutzerinteraktion abläuft. Dies ist der Standardmodus.
- **Checkbox**: Zeigt das klassische "Ich bin kein Roboter"-Checkbox-Widget an, das eine Benutzerinteraktion erfordert.

:::note
Der in Logto ausgewählte Verifizierungsmodus muss mit dem in der Google Cloud Console erstellten Schlüsseltyp übereinstimmen. Wenn du einen punktbasierten Schlüssel erstellt hast, wähle **Unsichtbar**. Wenn du einen Checkbox-Herausforderungsschlüssel erstellt hast, wähle **Checkbox**.
:::

## Benutzerdefinierte Domain {#custom-domain}

Standardmäßig lädt Logto das reCAPTCHA-Skript von `www.google.com`. In einigen Regionen, in denen die Standarddomain von Google nicht erreichbar ist, kannst du jedoch eine alternative Domain konfigurieren.

Unterstützte Domains:

- `www.google.com` (Standard)
- `recaptcha.net`

Um eine benutzerdefinierte Domain zu konfigurieren, gib die Domain im Feld **Domain** ein, wenn du reCAPTCHA Enterprise in der Logto Console einrichtest.

## CAPTCHA aktivieren {#enable-captcha}

Denke daran, den CAPTCHA-Botschutz zu aktivieren, nachdem du den CAPTCHA-Anbieter eingerichtet hast.

Gehe zur Sicherheitsseite, finde den CAPTCHA-Tab und aktiviere den Schalter "CAPTCHA aktivieren".
