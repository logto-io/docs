# Конфигурация

## Переменные окружения \{#environment-variables}

### Использование \{#usage}

Logto обрабатывает переменные окружения в следующем порядке:

- Системные переменные окружения
- Файл `.env` в корне проекта, который соответствует формату [dotenv](https://github.com/motdotla/dotenv#readme)

Таким образом, системные переменные окружения будут переопределять значения в `.env`.

### Переменные \{#variables}

:::caution
Если вы запускаете Logto через `npm start` в корне проекта, `NODE_ENV` всегда будет `production`.
:::

В значениях по умолчанию `protocol` будет либо `http`, либо `https` в зависимости от вашей конфигурации HTTPS.

| Ключ                    | Значение по умолчанию                | Тип                                                      | Описание                                                                                                                                                                                                                                |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | В каком окружении работает Logto.                                                                                                                                                                                                       |
| PORT                    | `3001`                               | `number`                                                 | Локальный порт, который слушает Logto.                                                                                                                                                                                                  |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Локальный порт, который слушает Logto Admin Console.                                                                                                                                                                                    |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | Установите значение `1` или `true`, чтобы отключить порт для Admin Console. Если `ADMIN_ENDPOINT` не установлен, это полностью отключит Admin Console.                                                                                  |
| DB_URL                  | N/A                                  | `string`                                                 | [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) для базы данных Logto.                                                                                                                             |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | См. [Включение HTTPS](#enabling-https) для подробностей.                                                                                                                                                                                |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | То же самое.                                                                                                                                                                                                                            |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | То же самое.                                                                                                                                                                                                                            |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | Вы можете указать URL с вашим пользовательским доменом для онлайн-тестирования или производства. Это также повлияет на значение [идентификатора эмитента OIDC](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier). |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | Вы можете указать URL с вашим пользовательским доменом для производства (например, `ADMIN_ENDPOINT=https://admin.domain.com`). Это также повлияет на значение перенаправления URI Admin Console.                                        |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | Указывает, чувствительно ли имя пользователя к регистру. Будьте осторожны при изменении этого значения; изменения не будут автоматически корректировать существующие данные базы данных, требуя ручного управления.                     |

### Включение HTTPS \{#enabling-https}

#### Использование Node \{#using-node}

Node нативно поддерживает HTTPS. Предоставьте **ОБЕ** `HTTPS_CERT_PATH` и `HTTPS_KEY_PATH`, чтобы включить HTTPS через Node.

`HTTPS_CERT_PATH` указывает путь к вашему HTTPS-сертификату, а `HTTPS_KEY_PATH` указывает путь к вашему HTTPS-ключу.

#### Использование HTTPS-прокси \{#using-a-https-proxy}

Другой распространенной практикой является использование HTTPS-прокси перед Node (например, Nginx).

В этом случае вы, вероятно, захотите установить `TRUST_PROXY_HEADER` в `true`, что указывает, следует ли доверять полям заголовка прокси. Logto передаст значение в [настройки приложения Koa](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings).

См. [Доверие прокси с TLS-выгрузкой](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) для случаев, когда нужно настроить это поле.

## Конфигурации базы данных \{#database-configs}

Управление слишком большим количеством переменных окружения неэффективно и негибко, поэтому большинство наших общих конфигураций хранится в таблице базы данных `logto_configs`.

Таблица представляет собой простое хранилище ключ-значение, и ключ перечисляется следующим образом:

| Ключ             | Тип                   | Описание                                                                                                                                      |
| ---------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | Массив строк ключей подписи cookie ([signing cookie keys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys)). |
| oidc.privateKeys | <code>string[]</code> | Массив строк содержимого закрытого ключа для [подписи OIDC JWT](https://openid.net/specs/openid-connect-core-1_0.html#Signing).               |

### Поддерживаемые типы закрытых ключей \{#supported-private-key-types}

- EC (кривые P-256, secp256k1, P-384 и P-521)
- RSA
- OKP (подтипы Ed25519, Ed448, X25519, X448)
