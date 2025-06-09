Después de extraer el token y obtener la configuración OIDC, valida lo siguiente:

- **Firma:** El JWT debe ser válido y estar firmado por Logto (a través de JWKS).
- **Emisor (Issuer):** Debe coincidir con el emisor de tu tenant de Logto.
- **Audiencia (Audience):** Debe coincidir con el indicador de recurso de la API registrado en Logto, o el contexto de la organización si corresponde.
- **Expiración:** El token no debe estar expirado.
- **Permisos (Alcances / scopes):** El token debe incluir los alcances requeridos para tu API / acción. Los alcances son cadenas separadas por espacios en el reclamo `scope`.
- **Contexto de organización:** Si proteges recursos de API a nivel de organización, valida el reclamo `organization_id`.

Consulta [JSON Web Token](https://auth.wiki/jwt) para aprender más sobre la estructura y los reclamos de JWT.

### Qué verificar para cada modelo de permisos \{#what-to-check-for-each-permission-model}

Los reclamos y reglas de validación varían según el modelo de permisos:

| Modelo de permisos                      | Reclamo de audiencia (`aud`)                                              | Reclamo de organización (`organization_id`)             | Alcances (permisos) a verificar (`scope`) |
| --------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------- |
| Recursos de API globales                | Indicador de recurso de API                                               | _No presente_                                           | Permisos de recurso de API                |
| Permisos de organización (no API)       | `urn:logto:organization:<id>` (el contexto de organización está en `aud`) | _No presente_                                           | Permisos de organización                  |
| Recursos de API a nivel de organización | Indicador de recurso de API                                               | ID de la organización (debe coincidir con la solicitud) | Permisos de recurso de API                |

<small>
  Para los permisos de organización que no son de API, el contexto de la organización está representado por el reclamo `aud`
  (por ejemplo, `urn:logto:organization:abc123`). El reclamo `organization_id` solo está presente para
  tokens de recursos de API a nivel de organización.
</small>

:::tip
Valida siempre tanto los permisos (alcances) como el contexto (audiencia, organización) para APIs multi-tenant seguras.
:::
