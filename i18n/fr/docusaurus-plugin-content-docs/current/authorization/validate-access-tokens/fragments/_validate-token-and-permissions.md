Après avoir extrait le jeton et récupéré la configuration OIDC, validez les éléments suivants :

- **Signature :** Le JWT doit être valide et signé par Logto (via JWKS).
- **Émetteur (Issuer) :** Doit correspondre à l’émetteur de votre tenant Logto.
- **Audience (Audience) :** Doit correspondre à l’indicateur de ressource de l’API enregistré dans Logto, ou au contexte d’organisation si applicable.
- **Expiration :** Le jeton ne doit pas être expiré.
- **Permissions (Portées / scopes) :** Le jeton doit inclure les portées requises pour votre API / action. Les portées sont des chaînes séparées par des espaces dans la revendication `scope`.
- **Contexte d’organisation :** Si vous protégez des ressources API au niveau organisation, validez la revendication `organization_id`.

Consultez [JSON Web Token](https://auth.wiki/jwt) pour en savoir plus sur la structure et les revendications des JWT.

### À vérifier selon chaque modèle de permission \{#what-to-check-for-each-permission-model}

Les revendications et règles de validation diffèrent selon le modèle de permission :

| Modèle de permission                  | Revendication Audience (`aud`)                                            | Revendication Organisation (`organization_id`)        | Portées (permissions) à vérifier (`scope`) |
| ------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------ |
| Ressources API globales               | Indicateur de ressource API                                               | _Non présent_                                         | Permissions de ressource API               |
| Permissions d’organisation (hors API) | `urn:logto:organization:<id>` (le contexte d’organisation est dans `aud`) | _Non présent_                                         | Permissions d’organisation                 |
| Ressources API au niveau organisation | Indicateur de ressource API                                               | ID de l’organisation (doit correspondre à la requête) | Permissions de ressource API               |

<small>
  Pour les permissions d’organisation hors API, le contexte d’organisation est représenté par la revendication `aud`
  (par exemple, `urn:logto:organization:abc123`). La revendication `organization_id` n’est présente que pour
  les jetons de ressource API au niveau organisation.
</small>

:::tip
Validez toujours à la fois les permissions (portées / scopes) et le contexte (audience, organisation) pour sécuriser les API multi-tenant.
:::
