---
slug: /security/blocklist
sidebar_label: Blockliste
sidebar_position: 3
---

# Blockliste

## E-Mail-Blockliste {#email-blocklist}

Die E-Mail-Blocklistenrichtlinie ermöglicht die Anpassung der E-Mail-Blocklisteneinstellungen, um Missbrauch bei der Kontoanmeldung zu verhindern. Sie überwacht E-Mail-Adressen, die für die Anmeldung und Kontoeinstellungen verwendet werden. Wenn ein Benutzer versucht, sich anzumelden oder eine E-Mail-Adresse zu verknüpfen, die gegen eine Blocklistenregel verstößt, wird die Anfrage vom System abgelehnt, was hilft, Spam-Konten zu reduzieren und die allgemeine Kontosicherheit zu verbessern.

Besuche die <CloudLink to="/security/blocklist"> Konsole > Sicherheit > Blockliste</CloudLink>, um die E-Mail-Blocklisteneinstellungen zu konfigurieren.

### Blockiere E-Mail-Subaddressierung {#block-email-subaddressing}

Die E-Mail-Subaddressierung ermöglicht es Benutzern, Variationen ihrer E-Mail-Adressen zu erstellen, indem sie ein Pluszeichen (+) gefolgt von zusätzlichen Zeichen hinzufügen (z. B. user+tag@example.com). Diese Funktion kann von böswilligen Benutzern ausgenutzt werden, um Blocklistenbeschränkungen zu umgehen. Durch Aktivieren der Funktion zum Blockieren der E-Mail-Subaddressierung wird das System alle Anmelde- oder Konto-Verknüpfungsversuche ablehnen, die subadressierte E-Mail-Formate verwenden.

### Benutzerdefinierte E-Mail-Blockliste {#custom-email-blocklist}

Du kannst eine benutzerdefinierte E-Mail-Blockliste erstellen, indem du eine Liste von E-Mail-Adressen oder Domains angibst, die blockiert werden sollen. Das System wird alle Anmelde- oder Konto-Verknüpfungsversuche ablehnen, die mit diesen Einträgen übereinstimmen. Die Blockliste unterstützt sowohl die vollständige E-Mail-Adresse als auch die Domain-Übereinstimmung.

Zum Beispiel wird durch das Hinzufügen von `@example.com` zur Blockliste alle E-Mail-Adressen mit dieser Domain blockiert. Ebenso wird durch das Hinzufügen von `foo@example.com` speziell diese E-Mail-Adresse blockiert.

### Blockiere Wegwerf-E-Mail-Adressen {#block-disposable-email-addresses}

Dies ist eine **nur-Cloud**-Funktion. Sobald sie aktiviert ist, validiert das System automatisch die Domain der angegebenen E-Mail-Adresse gegen eine Liste bekannter Wegwerf-E-Mail-Domains. Wenn die Domain in der Liste gefunden wird, wird die Anfrage abgelehnt. Die Liste der Wegwerf-E-Mail-Domains wird regelmäßig aktualisiert, um ihre Wirksamkeit sicherzustellen.
