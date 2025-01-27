---
description: Utiliza las Management APIs para acceder a los servicios de backend de Logto, escalando tu sistema CIAM con gestión de usuarios, configuraciones de cuenta, verificación de identidad y arquitectura multi-tenant.
sidebar_position: 4
---

import logtoManagementApiResourceSrc from './assets/logto-management-api-resource.webp';
import logtoManagementApiDetailsSrc from './assets/logto-management-api-details.webp';

import BasicsAboutAccessTokenRequest from '../../quick-starts/generic/machine-to-machine/fragments/\_basics-about-access-token-request.mdx';
import FetchAccessTokenForLogtoManagementApi from '../../quick-starts/generic/machine-to-machine/fragments/\_fetch-access-token-for-logto-management-api.mdx';
import AccessTokenUsage from '../../quick-starts/generic/machine-to-machine/fragments/\_access-token-usage.mdx';
import AccessLogtoManagementApiUsingAccessToken from '../../quick-starts/generic/machine-to-machine/fragments/\_access-logto-management-api-using-access-token.mdx';
import M2mAccessTokenNote from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-access-token-sub-note.mdx';
import M2mRoleAssignment from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-role-assignment.mdx';

# Interactúa con Management API

## ¿Qué es Logto Management API? {#what-is-logto-management-api}

La Logto Management API es un conjunto completo de APIs que brinda a los desarrolladores control total sobre su implementación para adaptarse a las necesidades de su producto y stack tecnológico. Está preconstruida, listada en el <CloudLink to="/api-resources">Console > API resources > Logto Management API</CloudLink>, y no se puede eliminar ni modificar.

Su identificador sigue el patrón de `https://[tenant-id].logto.app/api`

<img alt="Recurso de Logto Management API" src={logtoManagementApiResourceSrc} />

<img alt="Detalles de Logto Management API" src={logtoManagementApiDetailsSrc} />

Con la Logto Management API, puedes acceder a los robustos servicios de backend de Logto, que son altamente escalables y pueden ser utilizados en una multitud de escenarios. Va más allá de lo que es posible con las capacidades de bajo código de la Admin Console.

Algunas APIs frecuentemente utilizadas se enumeran a continuación:

- [User](https://openapi.logto.io/operation/operation-getuser)
- [Application](https://openapi.logto.io/operation/operation-listapplications)
- [Audit logs](https://openapi.logto.io/operation/operation-listlogs)
- [Roles](https://openapi.logto.io/operation/operation-listroles)
- [Resources](https://openapi.logto.io/operation/operation-listresources)
- [Connectors](https://openapi.logto.io/operation/operation-listconnectors)
- [Organizations](https://openapi.logto.io/operation/operation-listorganizations)

Para obtener más información sobre las APIs disponibles, visita https://openapi.logto.io/.

## Cómo acceder a Logto Management API {#how-to-access-logto-management-api}

### Crear una aplicación M2M {#create-an-m2m-app}

:::note
Si no estás familiarizado con el flujo de autenticación M2M (Máquina a Máquina), te recomendamos leer primero [Comprender el flujo de autenticación](/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow) para entender los conceptos básicos.
:::

Ve a <CloudLink to="/applications">Console > Applications</CloudLink>, selecciona el tipo de aplicación "Machine-to-machine" y comienza el proceso de creación.

<M2mRoleAssignment />

En el módulo de asignación de roles, puedes ver que todos los roles M2M están incluidos, y los roles indicados por un icono de Logto significan que estos roles incluyen permisos de Logto Management API.

Ahora asigna roles M2M que incluyan permisos de Logto Management API para tu aplicación M2M.

### Obtener un token de acceso {#fetch-an-access-token}

#### Conceptos básicos sobre la solicitud de token de acceso {#basics-about-access-token-request}

<BasicsAboutAccessTokenRequest />

#### Obtener token de acceso para Logto Management API {#fetch-access-token-for-logto-management-api}

<FetchAccessTokenForLogtoManagementApi />

#### Respuesta del token de acceso {#access-token-response}

Un cuerpo de respuesta de acceso exitoso sería como:

```json
{
  "access_token": "eyJhbG...2g", // Usa este token para acceder a la Logto Management API
  "expires_in": 3600, // Expiración del token en segundos
  "token_type": "Bearer", // Tipo de autenticación para tu solicitud al usar el token de acceso
  "scope": "all" // alcance `all` para Logto Management API
}
```

<M2mAccessTokenNote />

### Acceder a Logto Management API usando el token de acceso {#access-logto-management-api-using-access-token}

<AccessTokenUsage />

<AccessLogtoManagementApiUsingAccessToken />

## Escenarios típicos para usar Logto Management API {#typical-scenarios-for-using-logto-management-api}

Nuestros desarrolladores han implementado muchas características adicionales usando Logto Management API. Creemos que nuestra API es altamente escalable y puede soportar una amplia gama de tus necesidades. Aquí hay algunos ejemplos de escenarios que no son posibles con la Logto Admin Console pero que se pueden lograr a través de la Logto Management API.

### Implementar el perfil de usuario por tu cuenta {#implement-user-profile-on-your-own}

Logto actualmente no proporciona una solución de interfaz de usuario preconstruida para perfiles de usuario. Reconocemos que los perfiles de usuario están estrechamente ligados a los atributos de negocio y producto. Mientras trabajamos en determinar el mejor enfoque, sugerimos usar nuestras APIs para crear tu propia solución. Por ejemplo, puedes utilizar nuestra API de interacción, API de perfil y API de código de verificación para desarrollar una solución personalizada que satisfaga tus necesidades.

### Búsqueda avanzada de usuarios {#advanced-user-search}

La Logto Admin Console admite funciones básicas de búsqueda y filtrado. Para opciones de búsqueda avanzada como búsqueda difusa, coincidencia exacta y sensibilidad a mayúsculas, consulta nuestros tutoriales y guías de [Búsqueda Avanzada de Usuarios](/user-management/advanced-user-search).

### Implementar la gestión de organizaciones por tu cuenta {#implement-organization-management-on-your-own}

Si estás utilizando la función de [organizaciones](/organizations) para construir tu aplicación multi-tenant, podrías necesitar la Logto Management API para tareas como invitaciones a organizaciones y gestión de miembros. Para tu producto SaaS, donde tienes tanto administradores como miembros en el tenant, la Logto Management API puede ayudarte a crear un portal de administración personalizado adaptado a las necesidades de tu negocio. Consulta [esto](/end-user-flows/organization-experience/) para más detalles.

## Consejos para usar Logto Management API {#tips-for-using-logto-management-api}

### Gestionar respuestas de API paginadas {#managing-paginated-api-responses}

Algunas de las respuestas de la API pueden incluir muchos resultados, los resultados serán paginados. Logto proporciona 2 tipos de información de paginación.

#### Usando encabezados de enlace {#using-link-headers}

Un encabezado de respuesta paginada será como:

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

El encabezado de enlace proporciona la URL para la página anterior, siguiente, primera y última de resultados:

- La URL para la página anterior está seguida de rel="prev".
- La URL para la página siguiente está seguida de rel="next".
- La URL para la última página está seguida de rel="last".
- La URL para la primera página está seguida de rel="first".

#### Usando el encabezado de número total {#using-total-number-header}

Además de los encabezados de enlace estándar, Logto también añadirá un encabezado `Total-Number`:

```
Total-Number: 216
```

Eso sería muy conveniente y útil para mostrar números de página.

#### Cambiar el número de página y el tamaño de página {#changing-page-number-and-page-size}

Hay 2 parámetros de consulta opcionales:

- `page`: indica el número de página, comienza desde 1, el valor predeterminado es 1.
- `page_size`: indica el número de elementos por página, el valor predeterminado es 20.

### Límite de tasa {#rate-limit}

:::note
Esto es solo para Logto Cloud.
:::

Para garantizar la fiabilidad y seguridad de nuestros servicios para todos los usuarios, empleamos un firewall general que monitorea y gestiona el tráfico a nuestro sitio web. Aunque no imponemos un límite de tasa estricto, recomendamos que los usuarios limiten su actividad a aproximadamente 200 solicitudes cada 10 segundos para evitar activar nuestras medidas de protección.

## Recursos relacionados {#related-resources}

<Url href="https://blog.logto.io/management-api">
  Usa Logto Management API: Una guía paso a paso
</Url>

<Url href="https://blog.logto.io/use-postman-to-obtain-m2m-access-token">Obtén tokens de acceso M2M en minutos con Postman</Url>
