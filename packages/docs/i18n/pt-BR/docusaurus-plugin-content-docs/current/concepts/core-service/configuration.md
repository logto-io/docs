# Configuração

## Variáveis de ambiente {#environment-variables}

### Uso {#usage}

Logto lida com variáveis de ambiente na seguinte ordem:

- Variáveis de ambiente do sistema
- O arquivo `.env` na raiz do projeto, que está em conformidade com o formato [dotenv](https://github.com/motdotla/dotenv#readme)

Assim, as variáveis de ambiente do sistema irão sobrescrever os valores em `.env`.

### Variáveis {#variables}

:::caution
Se você executar o Logto via `npm start` na raiz do projeto, `NODE_ENV` será sempre `production`.
:::

Nos valores padrão, `protocol` será `http` ou `https` de acordo com sua configuração de HTTPS.

| Key                     | Valor Padrão                         | Tipo                                                     | Descrição                                                                                                                                                                                                                           |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Em que tipo de ambiente o Logto está sendo executado.                                                                                                                                                                               |
| PORT                    | `3001`                               | `number`                                                 | A porta local que o Logto escuta.                                                                                                                                                                                                   |
| ADMIN_PORT              | `3002`                               | `number`                                                 | A porta local que o Logto Admin Console escuta.                                                                                                                                                                                     |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | Defina como `1` ou `true` para desabilitar a porta para o Admin Console. Com `ADMIN_ENDPOINT` não definido, ele desativará completamente o Admin Console.                                                                           |
| DB_URL                  | N/A                                  | `string`                                                 | O [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) para o banco de dados Logto.                                                                                                                 |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | Veja [Habilitando HTTPS](#enabling-https) para detalhes.                                                                                                                                                                            |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | Idem.                                                                                                                                                                                                                               |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | Idem.                                                                                                                                                                                                                               |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | Você pode especificar uma URL com seu domínio personalizado para testes online ou produção. Isso também afetará o valor do [identificador do emissor OIDC](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier). |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | Você pode especificar uma URL com seu domínio personalizado para produção (Ex.: `ADMIN_ENDPOINT=https://admin.domain.com`). Isso também afetará o valor dos URIs de redirecionamento do Admin Console.                              |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | Especifica se o nome de usuário é sensível a maiúsculas e minúsculas. Tenha cuidado ao modificar este valor; mudanças não ajustarão automaticamente os dados existentes no banco de dados, exigindo gerenciamento manual.           |

### Habilitando HTTPS {#enabling-https}

#### Usando Node {#using-node}

Node suporta HTTPS nativamente. Forneça **AMBOS** `HTTPS_CERT_PATH` e `HTTPS_KEY_PATH` para habilitar HTTPS via Node.

`HTTPS_CERT_PATH` implica o caminho para o seu certificado HTTPS, enquanto `HTTPS_KEY_PATH` implica o caminho para a sua chave HTTPS.

#### Usando um proxy HTTPS {#using-a-https-proxy}

Outra prática comum é ter um proxy HTTPS na frente do Node (Ex.: Nginx).

Nesse caso, você provavelmente desejará definir `TRUST_PROXY_HEADER` como `true`, o que indica se os campos de cabeçalho do proxy devem ser confiáveis. Logto passará o valor para as [configurações do aplicativo Koa](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings).

Veja [Confiando em proxies de descarregamento TLS](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) para saber quando configurar este campo.

## Configurações do banco de dados {#database-configs}

Gerenciar muitas variáveis de ambiente não é eficiente e flexível, então a maioria de nossas configurações gerais são armazenadas na tabela do banco de dados `logto_configs`.

A tabela é um armazenamento simples de chave-valor, e a chave é enumerável como segue:

| Key              | Tipo                  | Descrição                                                                                                                                     |
| ---------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | O array de strings das [chaves de assinatura de cookies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys).   |
| oidc.privateKeys | <code>string[]</code> | O array de strings do conteúdo da chave privada para [assinatura de JWT OIDC](https://openid.net/specs/openid-connect-core-1_0.html#Signing). |

### Tipos de chave privada suportados {#supported-private-key-types}

- EC (curvas P-256, secp256k1, P-384 e P-521)
- RSA
- OKP (subtipos Ed25519, Ed448, X25519, X448)
