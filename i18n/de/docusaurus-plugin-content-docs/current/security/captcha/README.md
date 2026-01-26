---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA-Botschutz

Der CAPTCHA-Botschutz hilft, deine Benutzerflüsse zu sichern, indem er überprüft, dass Benutzer menschlich sind, und reduziert so Bot-Angriffe erheblich. Logto unterstützt führende Anbieter wie Google reCAPTCHA Enterprise und Cloudflare Turnstile.

## Aktivierung des CAPTCHA-Botschutzes {#enabling-captcha-bot-protection}

Folge diesen Schritten, um CAPTCHA für deine Benutzerflüsse (Anmeldung, Registrierung und Passwortwiederherstellung) zu aktivieren:

1. **Zu den Einstellungen navigieren**: Gehe zu **Konsole > Sicherheit > Botschutz**.
2. **Anbieter auswählen**: Wähle deinen bevorzugten CAPTCHA-Anbieter (z. B. Google reCAPTCHA Enterprise oder Cloudflare Turnstile).
3. **Konfiguration**: Folge den Anweisungen auf der linken Seite der Seite, um den ausgewählten CAPTCHA-Anbieter zu konfigurieren.
4. **Speichern**: Klicke auf **Speichern und fertig**, um deine Einstellungen anzuwenden.
5. **(Optional) CAPTCHA aktivieren**: CAPTCHA wird automatisch auf der Sicherheitsseite aktiviert, sobald ein Anbieter konfiguriert ist. Du kannst jedoch die Einstellungen manuell überprüfen oder anpassen, falls erforderlich.

## Vorschau der CAPTCHA-Integration {#previewing-captcha-integration}

Du hast zwei Möglichkeiten, die CAPTCHA-Integration vorzuschauen und zu testen:

1. **Verwende deine Anwendung**: Navigiere zu den Anmelde-, Registrierungs- oder Passwortwiederherstellungsseiten deiner Anwendung und führe die jeweiligen Benutzeraktionen aus.
2. **Demo-App**: Gehe zu **Erste Schritte** und verwende die bereitgestellte Demo-Anwendung, um die CAPTCHA-Funktionalität zu testen.

Stelle sicher, dass die CAPTCHA-Herausforderung in beiden Optionen wie erwartet erscheint.

## Unterstützte Anbieter {#supported-providers}

Derzeit unterstützen wir:

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
