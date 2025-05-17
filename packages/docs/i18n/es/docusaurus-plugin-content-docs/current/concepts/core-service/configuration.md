# Configuración

## Variables de entorno {#environment-variables}

### Uso {#usage}

Logto maneja las variables de entorno en el siguiente orden:

- Variables de entorno del sistema
- El archivo `.env` en la raíz del proyecto, que cumple con el formato [dotenv](https://github.com/motdotla/dotenv#readme)

Por lo tanto, las variables de entorno del sistema sobrescribirán los valores en `.env`.

### Variables {#variables}

:::caution
Si ejecutas Logto a través de `npm start` en la raíz del proyecto, `NODE_ENV` siempre será `production`.
:::

En los valores predeterminados, `protocol` será `http` o `https` según tu configuración de HTTPS.

| Clave                   | Valor Predeterminado                 | Tipo                                                     | Descripción                                                                                                                                                                                                                                |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Qué tipo de entorno en el que se ejecuta Logto.                                                                                                                                                                                            |
| PORT                    | `3001`                               | `number`                                                 | El puerto local al que Logto escucha.                                                                                                                                                                                                      |
| ADMIN_PORT              | `3002`                               | `number`                                                 | El puerto local al que escucha Logto Admin Console.                                                                                                                                                                                        |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | Establécelo en `1` o `true` para deshabilitar el puerto para Admin Console. Con `ADMIN_ENDPOINT` sin establecer, deshabilitará completamente Admin Console.                                                                                |
| DB_URL                  | N/A                                  | `string`                                                 | El [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) para la base de datos de Logto.                                                                                                                    |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | Consulta [Habilitar HTTPS](#enabling-https) para más detalles.                                                                                                                                                                             |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | Ídem.                                                                                                                                                                                                                                      |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | Ídem.                                                                                                                                                                                                                                      |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | Puedes especificar una URL con tu dominio personalizado para pruebas en línea o producción. Esto también afectará el valor del [identificador del emisor de OIDC](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier). |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | Puedes especificar una URL con tu dominio personalizado para producción (Ej. `ADMIN_ENDPOINT=https://admin.domain.com`). Esto también afectará el valor de los URIs de redirección de Admin Console.                                       |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | Especifica si el nombre de usuario distingue entre mayúsculas y minúsculas. Ten cuidado al modificar este valor; los cambios no ajustarán automáticamente los datos existentes de la base de datos, requiriendo gestión manual.            |

### Habilitar HTTPS {#enabling-https}

#### Usando Node {#using-node}

Node admite HTTPS de forma nativa. Proporciona **AMBOS** `HTTPS_CERT_PATH` y `HTTPS_KEY_PATH` para habilitar HTTPS a través de Node.

`HTTPS_CERT_PATH` implica la ruta a tu certificado HTTPS, mientras que `HTTPS_KEY_PATH` implica la ruta a tu clave HTTPS.

#### Usando un proxy HTTPS {#using-a-https-proxy}

Otra práctica común es tener un proxy HTTPS frente a Node (Ej. Nginx).

En este caso, probablemente querrás establecer `TRUST_PROXY_HEADER` en `true`, lo que indica si los campos de encabezado del proxy deben ser confiables. Logto pasará el valor a [configuraciones de la aplicación Koa](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings).

Consulta [Confiar en proxies de descarga de TLS](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) para saber cuándo configurar este campo.

## Configuraciones de la base de datos {#database-configs}

Gestionar demasiadas variables de entorno no es eficiente ni flexible, por lo que la mayoría de nuestras configuraciones generales se almacenan en la tabla de la base de datos `logto_configs`.

La tabla es un almacenamiento simple de clave-valor, y la clave es enumerable de la siguiente manera:

| Clave            | Tipo                  | Descripción                                                                                                                                            |
| ---------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| oidc.cookieKeys  | <code>string[]</code> | El arreglo de cadenas de las [claves de firma de cookies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys).           |
| oidc.privateKeys | <code>string[]</code> | El arreglo de cadenas del contenido de la clave privada para la [firma de JWT de OIDC](https://openid.net/specs/openid-connect-core-1_0.html#Signing). |

### Tipos de clave privada compatibles {#supported-private-key-types}

- EC (curvas P-256, secp256k1, P-384 y P-521)
- RSA
- OKP (subtipos Ed25519, Ed448, X25519, X448)
