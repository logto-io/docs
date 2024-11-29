---
sidebar_position: 2
---

# Authenticator-App OTP

## Konzepte

Die Authenticator-App, auch als Software-Token bezeichnet, ist eine der am weitesten verbreiteten MFA-Methoden. Sie generiert temporäre Einmalpasswörter (OTP), um die Sicherheit der Authentifizierung bei Online-Diensten zu erhöhen. Im Gegensatz zu physischen Hardware-Token sind Software-Token in der Regel Anwendungen oder Plugins, die Benutzer auf ihren Geräten installieren, sei es ein Smartphone oder ein Computerbrowser. Software-Token können lokal auf einem einzigen Gerät betrieben werden oder sich je nach den Fähigkeiten des Authenticators und den individuellen Benutzereinstellungen über verschiedene Geräte synchronisieren.

Beliebte Beispiele für Software-Token sind Google Authenticator, Microsoft Authenticator, Duo, 1Password, Authy und mehr.

## Authentifizierungsabläufe

**Einrichtungsabläufe**

1. **QR-Code oder geheimer Schlüssel**: Benutzer erhalten einen QR-Code oder einen geheimen Schlüssel von deinem Dienst.
2. **Konto hinzufügen**: Mit ihrer Authenticator-App scannen Benutzer den QR-Code oder geben den geheimen Schlüssel manuell ein, um ihr Konto hinzuzufügen.
3. **Dynamisches Einmalpasswort**: Die Authenticator-App zeigt einen sechsstelligen Code an, der sich alle 1-2 Minuten für das hinzugefügte Konto aktualisiert.
4. **MFA-Einrichtung abschließen**: Benutzer geben diesen Code innerhalb seiner Gültigkeit auf der MFA-Einrichtungsseite ein und schließen damit die Einrichtung des Authenticator-App OTP für MFA ab.

![OTP-Einrichtungsablauf](./assets/otp-set-up-flow.png)

**Verifizierungsabläufe**

1. **Anmeldeversuch**: Während der Anmeldung werden Benutzer zur MFA aufgefordert.
2. **OTP abrufen**: Öffne ihre Authenticator-App, um das OTP für das jeweilige Konto abzurufen.
3. **OTP eingeben**: Benutzer geben das in der App angezeigte OTP innerhalb seiner Gültigkeit auf der Seite zur 2-Schritt-Verifizierung ein.
4. **Authentifizierung**: Das System überprüft das OTP und gewährt bei erfolgreicher Validierung den Zugriff.

![OTP-Verifizierungsablauf](./assets/otp-verification-flow.png)
