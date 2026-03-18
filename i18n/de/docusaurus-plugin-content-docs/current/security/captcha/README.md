---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA-Bot-Schutz

Der CAPTCHA-Bot-Schutz hilft dabei, deine Benutzerflüsse zu sichern, indem überprüft wird, ob Benutzer menschlich sind, und reduziert so Bot-Angriffe erheblich. Logto unterstützt führende Anbieter wie Google reCAPTCHA Enterprise und Cloudflare Turnstile.

:::note
CAPTCHA gilt für Aktionen wie Identifikator, Passwort, Verifizierungscode, Registrierung und Passwort-Wiederherstellung. Es gilt nicht für [Magic Link](/end-user-flows/one-time-token) oder [Passkey-Anmeldung](/end-user-flows/sign-up-and-sign-in/passkey-sign-in), sodass Benutzer, die sich mit einem Magic Link oder Passkey anmelden, keine zusätzliche CAPTCHA-Herausforderung lösen müssen.
:::

## Aktivierung des CAPTCHA-Bot-Schutzes {#enabling-captcha-bot-protection}

Folge diesen Schritten, um CAPTCHA für deine Benutzerflüsse (Identifikator-Anmeldung, Passwort-Anmeldung, Registrierung und Passwort-Wiederherstellung) zu aktivieren:

1. **Zu den Einstellungen navigieren**: Gehe zu **Konsole > Sicherheit > Bot-Schutz**.
2. **Anbieter auswählen**: Wähle deinen bevorzugten CAPTCHA-Anbieter (z. B. Google reCAPTCHA Enterprise oder Cloudflare Turnstile).
3. **Konfiguration**: Folge den Anweisungen auf der linken Seite der Seite, um den ausgewählten CAPTCHA-Anbieter zu konfigurieren.
4. **Speichern**: Klicke auf **Speichern und fertig**, um deine Einstellungen zu übernehmen.
5. **(Optional) CAPTCHA aktivieren**: CAPTCHA wird automatisch auf der Sicherheitsseite aktiviert, sobald ein Anbieter konfiguriert ist. Du kannst die Einstellungen jedoch bei Bedarf manuell überprüfen oder anpassen.

## Vorschau der CAPTCHA-Integration {#previewing-captcha-integration}

Du hast zwei Möglichkeiten, die CAPTCHA-Integration in der Vorschau anzuzeigen und zu testen:

1. **Eigene Anwendung verwenden**: Navigiere zu den Anmelde-, Registrierungs- oder Passwort-Wiederherstellungsseiten deiner Anwendung und führe die jeweiligen Benutzeraktionen durch.
2. **Demo-App**: Gehe zu **Erste Schritte** und verwende die bereitgestellte Demo-Anwendung, um die CAPTCHA-Funktionalität zu testen.

Stelle sicher, dass die CAPTCHA-Herausforderung in beiden Optionen wie erwartet erscheint.

## Unterstützte Anbieter {#supported-providers}

Derzeit unterstützen wir:

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
