---
slug: /security/blocklist
sidebar_label: Blocklist
sidebar_position: 3
---

# Blocklist

## E-Mail-Blocklist {#email-blocklist}

Die E-Mail-Blocklist-Richtlinie ermöglicht die Anpassung der E-Mail-Blocklist-Einstellungen, um Missbrauch bei der Kontoerstellung zu verhindern. Sie überwacht E-Mail-Adressen, die für die Registrierung und Kontoeinstellungen verwendet werden. Wenn ein Benutzer versucht, sich zu registrieren oder eine E-Mail-Adresse zu verknüpfen, die gegen eine Blocklist-Regel verstößt, wird die Anfrage vom System abgelehnt. Dies hilft, Spam-Konten zu reduzieren und die allgemeine Kontosicherheit zu erhöhen.

Besuche <CloudLink to="/security/blocklist">Konsole > Sicherheit > Blocklist</CloudLink>, um die Einstellungen der E-Mail-Blocklist zu konfigurieren.

### Wegwerf-E-Mail-Adressen blockieren {#block-disposable-email-addresses}

Dies ist eine **nur-Cloud**-Funktion. Sobald sie aktiviert ist, überprüft das System automatisch die Domain der angegebenen E-Mail-Adresse anhand einer Liste bekannter Wegwerf-E-Mail-Domains. Wenn die Domain in der Liste gefunden wird, wird die Anfrage abgelehnt. Die Liste der Wegwerf-E-Mail-Domains wird regelmäßig aktualisiert, um ihre Wirksamkeit sicherzustellen.

### E-Mail-Subaddressing blockieren {#block-email-subaddressing}

E-Mail-Subaddressing ermöglicht es Benutzern, Varianten ihrer E-Mail-Adressen zu erstellen, indem sie ein Pluszeichen (+) gefolgt von zusätzlichen Zeichen hinzufügen (z. B. user+tag@example.com). Diese Funktion kann von böswilligen Benutzern ausgenutzt werden, um Blocklist-Beschränkungen zu umgehen. Durch das Aktivieren der Funktion zum Blockieren von E-Mail-Subaddressing lehnt das System alle Registrierungs- oder Kontoverknüpfungsversuche ab, die Subaddressing-Formate verwenden.

### Benutzerdefinierte E-Mail-Blocklist {#custom-email-blocklist}

Du kannst eine benutzerdefinierte E-Mail-Blocklist erstellen, indem du eine Liste von E-Mail-Adressen oder Domains angibst, die blockiert werden sollen. Das System lehnt alle Registrierungs- oder Kontoverknüpfungsversuche ab, die mit diesen Einträgen übereinstimmen. Die Blocklist unterstützt sowohl vollständige E-Mail-Adressen als auch Domain-Übereinstimmungen.

Wenn du beispielsweise `@example.com` zur Blocklist hinzufügst, werden alle E-Mail-Adressen mit dieser Domain blockiert. Ebenso wird durch das Hinzufügen von `foo@example.com` genau diese E-Mail-Adresse blockiert.

:::note

Wegwerf-E-Mails, Subaddressing und benutzerdefinierte E-Mails sind während der Registrierung und Kontoverknüpfung eingeschränkt. Bestehende Benutzer mit diesen E-Mail-Adressen können sich weiterhin anmelden.

- Admins können "Beschränkungen umgehen", indem sie Benutzer manuell in <CloudLink to="/users">Konsole > Benutzerverwaltung</CloudLink> hinzufügen oder über die [Management API](https://openapi.logto.io/operation/operation-createuser). Zum Beispiel: Erstelle einen Benutzer mit einer Subaddress-E-Mail, wenn Subaddressing blockiert ist.
- Bestehende Konten blockieren, indem du sie in <CloudLink to="/users">Konsole > Benutzerverwaltung</CloudLink> löschst oder sperrst.

:::

## Verwandte Ressourcen

<Url href="https://blog.logto.io/disposable-email">Was ist eine Wegwerf-E-Mail? Wie gehst du in deiner App damit um?</Url>
