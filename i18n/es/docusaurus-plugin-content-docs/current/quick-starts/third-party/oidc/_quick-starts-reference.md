En el fondo, una aplicación de terceros es simplemente un cliente estándar de OAuth 2.0 / OIDC. Esto significa que tú (o el desarrollador de terceros) puedes usar cualquier biblioteca o framework de OAuth 2.0 / OIDC para integrarte con Logto.

Si no estás familiarizado con OAuth 2.0 o OIDC, puedes comenzar siguiendo una de nuestras guías rápidas de “Web tradicional”.

Algunas cosas a tener en cuenta:

1. Logto actualmente requiere que las aplicaciones de terceros sean aplicaciones de “Web tradicional”. En otras palabras, la aplicación necesita un servidor backend (o backend-for-frontend) para almacenar de forma segura el secreto del cliente.
2. La mayoría de nuestras guías rápidas están escritas para aplicaciones de primera parte, pero aún puedes usarlas como referencia para la integración de aplicaciones de terceros.
3. La principal diferencia es que las aplicaciones de terceros mostrarán una pantalla de consentimiento (Consent screen), solicitando a los usuarios permiso explícito para acceder a sus datos.

Puedes encontrar más información en nuestras [guías rápidas](/quick-starts).
