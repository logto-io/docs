Unter der Haube ist eine Drittanbieter-App ein standardmäßiger OAuth 2.0 / OIDC-Client. Das bedeutet, dass du (oder der Drittanbieter-Entwickler) jede OAuth 2.0 / OIDC-Bibliothek oder jedes Framework verwenden kannst, um die Integration mit Logto durchzuführen.

Einige Dinge, die du beachten solltest:

1. Beim Erstellen einer Drittanbieter-App wähle den passenden Anwendungstyp basierend auf der Architektur der App:
   - **Traditionelles Web**: Verwendet ein Client-Geheimnis zur Authentifizierung.
   - **Single Page App / Native**: Verwendet PKCE für eine sichere Autorisierung ohne Client-Geheimnis.
2. Die meisten unserer Schnellstart-Anleitungen sind für First-Party-Apps geschrieben, du kannst sie jedoch trotzdem als Referenz für die Integration von Drittanbieter-Apps verwenden.
3. Der Hauptunterschied besteht darin, dass Drittanbieter-Apps einen Zustimmungsbildschirm (Consent screen) anzeigen, der die Benutzer um ausdrückliche Erlaubnis zum Zugriff auf ihre Daten bittet.

Siehe [Drittanbieter-Anwendungen](/integrate-logto/third-party-applications) für die vollständige Integrationsanleitung.
