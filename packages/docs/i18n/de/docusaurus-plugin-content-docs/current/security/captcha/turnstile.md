---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile ist ein CAPTCHA-Dienst, der hilft, deine Website vor Spam und Missbrauch zu schützen. Diese Anleitung führt dich durch den Prozess der Einrichtung von Turnstile mit Logto.

## Voraussetzungen {#prerequisites}

- Ein Cloudflare-Konto

## Einrichtung {#setup}

1. Gehe zum [Cloudflare Dashboard](https://dash.cloudflare.com/login) und wähle dein Konto aus.
2. Navigiere zu **Turnstile** > **Widget hinzufügen**.
3. Fülle das Formular mit den folgenden Details aus:
   - **Widget-Name**: Ein beliebiger Name, den du dem Widget geben möchtest
   - **Hostname**: Logtos Endpunkt-Domain, z. B. https://[tenant-id].logto.app
   - **Widget-Modus**: Standardmäßig belassen

## Erhalte den Site Key und Secret Key {#get-the-site-key-and-secret-key}

1. Navigiere zu einem Widget, das du gerade erstellt hast, und klicke auf **Widget verwalten**.
2. Scrolle nach unten und kopiere den **Site Key** und den **Secret Key**.

## CAPTCHA aktivieren {#enable-captcha}

Denke daran, den CAPTCHA-Botschutz zu aktivieren, nachdem du den CAPTCHA-Anbieter eingerichtet hast.

Gehe zur Sicherheitsseite, finde den CAPTCHA-Tab und schalte den Schalter "CAPTCHA aktivieren" ein.
