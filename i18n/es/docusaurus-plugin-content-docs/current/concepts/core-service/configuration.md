# Configuración

## Variables de entorno {#environment-variables}

### Uso {#usage}

Logto gestiona las variables de entorno en el siguiente orden:

- Variables de entorno del sistema
- El archivo `.env` en la raíz del proyecto, que cumple con el formato [dotenv](https://github.com/motdotla/dotenv#readme)

Por lo tanto, las variables de entorno del sistema sobrescribirán los valores en `.env`.

### Variables {#variables}

:::caution
Si ejecutas Logto mediante `npm start` en la raíz del proyecto, `NODE_ENV` siempre será `production`.
:::

En los valores predeterminados, `protocol` será `http` o `https` según tu configuración de HTTPS.

| Key                     | Valor predeterminado                 | Tipo                                                     | Descripción                                                                                                                                                                                                                                                                                                                     |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Qué tipo de entorno ejecuta Logto.                                                                                                                                                                                                                                                                                              |
| PORT                    | `3001`                               | `number`                                                 | El puerto local en el que Logto escucha.                                                                                                                                                                                                                                                                                        |
| ADMIN_PORT              | `3002`                               | `number`                                                 | El puerto local en el que escucha la Consola de Administración de Logto.                                                                                                                                                                                                                                                        |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | Establécelo en `1` o `true` para deshabilitar el puerto de la Consola de Administración. Si `ADMIN_ENDPOINT` no está configurado, deshabilitará completamente la Consola de Administración.                                                                                                                                     |
| DB_URL                  | N/A                                  | `string`                                                 | El [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) para la base de datos de Logto.                                                                                                                                                                                                         |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | Consulta [Habilitar HTTPS](#enabling-https) para más detalles.                                                                                                                                                                                                                                                                  |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | Ídem.                                                                                                                                                                                                                                                                                                                           |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | Ídem.                                                                                                                                                                                                                                                                                                                           |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | Puedes especificar una URL con tu dominio personalizado para pruebas en línea o producción. Esto también afectará el valor del [identificador de emisor OIDC](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier).                                                                                          |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | Puedes especificar una URL con tu dominio personalizado para producción (Ej. `ADMIN_ENDPOINT=https://admin.domain.com`). Esto también afectará el valor de los URI de redirección de la Consola de Administración.                                                                                                              |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | Especifica si el nombre de usuario distingue entre mayúsculas y minúsculas. Ten cuidado al modificar este valor; los cambios no ajustarán automáticamente los datos existentes en la base de datos, requiriendo gestión manual.                                                                                                 |
| SECRET_VAULT_KEK        | `undefined`                          | `string`                                                 | La Clave de Cifrado de Claves (KEK) utilizada para cifrar las Claves de Cifrado de Datos (DEK) en el [Secret Vault](/secret-vault). Requerida para que el Secret Vault funcione correctamente. Debe ser una cadena codificada en base64. Se recomienda AES-256 (32 bytes). Ejemplo: `crypto.randomBytes(32).toString('base64')` |

### Habilitar HTTPS {#enabling-https}

#### Usando Node {#using-node}

Node admite HTTPS de forma nativa. Proporciona **AMBOS** `HTTPS_CERT_PATH` y `HTTPS_KEY_PATH` para habilitar HTTPS mediante Node.

`HTTPS_CERT_PATH` indica la ruta a tu certificado HTTPS, mientras que `HTTPS_KEY_PATH` indica la ruta a tu clave HTTPS.

#### Usando un proxy HTTPS {#using-a-https-proxy}

Otra práctica común es tener un proxy HTTPS delante de Node (Ej. Nginx).

En este caso, probablemente querrás establecer `TRUST_PROXY_HEADER` en `true`, lo que indica si se deben confiar los campos de cabecera del proxy. Logto pasará el valor a la [configuración de la app Koa](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings).

Consulta [Confiar en proxies de descarga TLS](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) para saber cuándo configurar este campo.

## Configuraciones de base de datos {#database-configs}

Gestionar demasiadas variables de entorno no es eficiente ni flexible, por lo que la mayoría de nuestras configuraciones generales se almacenan en la tabla de base de datos `logto_configs`.

La tabla es un almacenamiento simple de clave-valor, y la clave es enumerable como sigue:

| Key              | Tipo                  | Descripción                                                                                                                                       |
| ---------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | El array de cadenas de las [claves de firma de cookies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys).        |
| oidc.privateKeys | <code>string[]</code> | El array de cadenas del contenido de la clave privada para la [firma JWT de OIDC](https://openid.net/specs/openid-connect-core-1_0.html#Signing). |

### Tipos de clave privada admitidos {#supported-private-key-types}

- EC (curvas P-256, secp256k1, P-384 y P-521)
- RSA
- OKP (subtipos Ed25519, Ed448, X25519, X448)
