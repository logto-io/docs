En el fondo, una aplicación de terceros es un cliente estándar de OAuth 2.0 / OIDC. Esto significa que tú (o el desarrollador de terceros) puedes usar cualquier biblioteca o framework de OAuth 2.0 / OIDC para integrarte con Logto.

Algunas cosas a tener en cuenta:

1. Al crear una aplicación de terceros, selecciona el tipo de aplicación adecuado según la arquitectura de la app:
   - **Web tradicional**: Utiliza un secreto de cliente para la autenticación.
   - **Aplicación de una sola página / Nativa**: Utiliza PKCE para una autorización segura sin un secreto de cliente.
2. La mayoría de nuestras guías de inicio rápido están escritas para aplicaciones de primera parte, pero aún puedes usarlas como referencia para la integración de aplicaciones de terceros.
3. La principal diferencia es que las aplicaciones de terceros mostrarán una pantalla de consentimiento (Consent screen), solicitando a los usuarios permiso explícito para acceder a sus datos.

Consulta [Aplicaciones de terceros](/integrate-logto/third-party-applications) para la guía completa de integración.
