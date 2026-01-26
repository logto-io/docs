Führe im Projekt-Stammverzeichnis aus:

```bash
# Installiere das Core-Paket, um auf vordefinierte Werte und Typen zuzugreifen
go get github.com/logto-io/go/v2/core

# Installiere das Client-Paket, um mit Logto zu interagieren
go get github.com/logto-io/go/v2/client
```

Füge die Pakete `github.com/logto-io/go/v2/core` und `github.com/logto-io/go/v2/client` zu deinem Anwendungscode hinzu:

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// Abhängigkeit hinzufügen
	"github.com/logto-io/go/v2/core"
	"github.com/logto-io/go/v2/client"
)

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.String(200, "Hallo Logto!")
	})
	router.Run(":3000")
}
```
