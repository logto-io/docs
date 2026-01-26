Exécutez à la racine du projet :

```bash
# Installez le package core pour accéder aux valeurs et types prédéfinis
go get github.com/logto-io/go/v2/core

# Installez le package client pour interagir avec Logto
go get github.com/logto-io/go/v2/client
```

Ajoutez les packages `github.com/logto-io/go/v2/core` et `github.com/logto-io/go/v2/client` à votre code d'application :

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// Ajoutez la dépendance
	"github.com/logto-io/go/v2/core"
	"github.com/logto-io/go/v2/client"
)

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```
