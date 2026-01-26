Necesitarás los siguientes valores para validar los tokens emitidos por Logto:

- URI de JSON Web Key Set (JWKS): La URL a las claves públicas de Logto, utilizada para verificar las firmas de JWT.
- Emisor (Issuer): El valor esperado del emisor (la URL OIDC de Logto).

Primero, encuentra el endpoint de tu tenant de Logto. Puedes encontrarlo en varios lugares:

- En la Consola de Logto, en **Configuración** → **Dominios**.
- En cualquier configuración de aplicación que hayas configurado en Logto, **Configuración** → **Endpoints y Credenciales**.

### Obtener desde el endpoint de descubrimiento de OpenID Connect \{#fetch-from-openid-connect-discovery-endpoint}

Estos valores pueden obtenerse desde el endpoint de descubrimiento de OpenID Connect de Logto:

```
https://<your-logto-endpoint>/oidc/.well-known/openid-configuration
```

Aquí tienes un ejemplo de respuesta (otros campos omitidos por brevedad):

```json
{
  "jwks_uri": "https://your-tenant.logto.app/oidc/jwks",
  "issuer": "https://your-tenant.logto.app/oidc"
}
```

### Codificar directamente en tu código (no recomendado) \{#hardcode-in-your-code-not-recommended}

Dado que Logto no permite personalizar la URI de JWKS ni el emisor, puedes codificar estos valores directamente en tu código. Sin embargo, esto no se recomienda para aplicaciones en producción, ya que puede aumentar la carga de mantenimiento si alguna configuración cambia en el futuro.

- URI de JWKS: `https://<your-logto-endpoint>/oidc/jwks`
- Emisor: `https://<your-logto-endpoint>/oidc`
