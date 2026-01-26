Vous aurez besoin des valeurs suivantes pour valider les jetons émis par Logto :

- URI JSON Web Key Set (JWKS) : L’URL vers les clés publiques de Logto, utilisée pour vérifier les signatures JWT.
- Émetteur (Issuer) : La valeur attendue de l’émetteur (l’URL OIDC de Logto).

Commencez par trouver l’endpoint de votre tenant Logto. Vous pouvez le trouver à différents endroits :

- Dans la Console Logto, sous **Paramètres** → **Domaines**.
- Dans les paramètres de toute application que vous avez configurée dans Logto, **Paramètres** → **Endpoints & Credentials**.

### Récupérer depuis l’endpoint de découverte OpenID Connect \{#fetch-from-openid-connect-discovery-endpoint}

Ces valeurs peuvent être récupérées depuis l’endpoint de découverte OpenID Connect de Logto :

```
https://<your-logto-endpoint>/oidc/.well-known/openid-configuration
```

Voici un exemple de réponse (autres champs omis pour plus de clarté) :

```json
{
  "jwks_uri": "https://your-tenant.logto.app/oidc/jwks",
  "issuer": "https://your-tenant.logto.app/oidc"
}
```

### Codage en dur dans votre code (non recommandé) \{#hardcode-in-your-code-not-recommended}

Puisque Logto ne permet pas de personnaliser l’URI JWKS ou l’émetteur (Issuer), vous pouvez coder ces valeurs en dur dans votre code. Cependant, cela n’est pas recommandé pour les applications en production, car cela peut augmenter la charge de maintenance si une configuration change à l’avenir.

- URI JWKS : `https://<your-logto-endpoint>/oidc/jwks`
- Émetteur (Issuer) : `https://<your-logto-endpoint>/oidc`
