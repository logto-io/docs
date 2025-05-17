---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise ist ein Google-Dienst, der Websites vor Betrug und Missbrauch schützt, indem er fortschrittliche Bot-Erkennung verwendet, ohne die Benutzererfahrung zu stören. Diese Anleitung führt dich durch den Prozess der Einrichtung von reCAPTCHA Enterprise mit Logto.

## Voraussetzungen {#prerequisites}

- Ein Google Cloud-Projekt

## Einrichten eines reCAPTCHA-Schlüssels {#setup-a-recaptcha-key}

1. Gehe zur [reCAPTCHA-Seite der Google Cloud Console](https://console.cloud.google.com/security/recaptcha).
2. Klicke auf die Schaltfläche **Schlüssel erstellen** in der Nähe von "reCAPTCHA-Schlüsseln".
3. Fülle das Formular mit den folgenden Details aus:
   - **Anzeigename**: Ein beliebiger Name, den du dem Schlüssel geben möchtest
   - **Anwendungstyp**: Website
   - **Domainliste**: Füge die Endpunkt-Domain von Logto hinzu
4. Nach der Erstellung des Schlüssels wirst du zur Schlüsseldetailseite weitergeleitet, kopiere die **ID**.

## Einrichten eines API-Schlüssels {#setup-an-api-key}

1. Gehe zur [Anmeldedaten-Seite der Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Klicke auf die Schaltfläche **Anmeldedaten erstellen** und wähle **API-Schlüssel**.
3. Kopiere den API-Schlüssel.
4. Optional kannst du den API-Schlüssel auf die **reCAPTCHA Enterprise API** beschränken, um ihn sicherer zu machen.
5. Denke daran, "Anwendungsbeschränkungen" auf **Keine** zu belassen, wenn du nicht verstehst, was es ist.

## Projekt-ID abrufen {#get-project-id}

1. Kopiere die **Projekt-ID** von der [Startseite der Google Cloud Console](https://console.cloud.google.com/welcome).

## CAPTCHA aktivieren {#enable-captcha}

Denke daran, den CAPTCHA-Botschutz zu aktivieren, nachdem du den CAPTCHA-Anbieter eingerichtet hast.

Gehe zur Sicherheitsseite, finde den CAPTCHA-Tab und schalte den Kippschalter "CAPTCHA aktivieren" ein.
