# Configuration

## Variables d'environnement {#environment-variables}

### Utilisation {#usage}

Logto gère les variables d'environnement dans l'ordre suivant :

- Variables d'environnement système
- Le fichier `.env` à la racine du projet, qui est conforme au format [dotenv](https://github.com/motdotla/dotenv#readme)

Ainsi, les variables d'environnement système remplaceront les valeurs dans `.env`.

### Variables {#variables}

:::caution
Si vous exécutez Logto via `npm start` à la racine du projet, `NODE_ENV` sera toujours `production`.
:::

Dans les valeurs par défaut, `protocol` sera soit `http` soit `https` selon votre configuration HTTPS.

| Key                     | Valeur par défaut                    | Type                                                     | Description                                                                                                                                                                                                                                                      |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Quel type d'environnement dans lequel Logto fonctionne.                                                                                                                                                                                                          |
| PORT                    | `3001`                               | `number`                                                 | Le port local auquel Logto écoute.                                                                                                                                                                                                                               |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Le port local auquel la console d'administration de Logto écoute.                                                                                                                                                                                                |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | Définissez-le sur `1` ou `true` pour désactiver le port pour la console d'administration. Avec `ADMIN_ENDPOINT` non défini, cela désactivera complètement la console d'administration.                                                                           |
| DB_URL                  | N/A                                  | `string`                                                 | Le [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) pour la base de données Logto.                                                                                                                                           |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | Voir [Activation de HTTPS](#enabling-https) pour plus de détails.                                                                                                                                                                                                |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | Idem.                                                                                                                                                                                                                                                            |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | Idem.                                                                                                                                                                                                                                                            |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | Vous pouvez spécifier une URL avec votre domaine personnalisé pour les tests en ligne ou la production. Cela affectera également la valeur de l' identifiant de l' Émetteur (OIDC) .                                                                             |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | Vous pouvez spécifier une URL avec votre domaine personnalisé pour la production (par exemple `ADMIN_ENDPOINT=https://admin.domain.com`). Cela affectera également la valeur des URI de redirection de la console d'administration.                              |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | Spécifie si le nom d'utilisateur est sensible à la casse. Faites preuve de prudence lors de la modification de cette valeur ; les modifications n'ajusteront pas automatiquement les données existantes de la base de données, nécessitant une gestion manuelle. |

### Activation de HTTPS {#enabling-https}

#### Utilisation de Node {#using-node}

Node prend en charge nativement HTTPS. Fournissez **BOTH** `HTTPS_CERT_PATH` et `HTTPS_KEY_PATH` pour activer HTTPS via Node.

`HTTPS_CERT_PATH` implique le chemin vers votre certificat HTTPS, tandis que `HTTPS_KEY_PATH` implique le chemin vers votre clé HTTPS.

#### Utilisation d'un proxy HTTPS {#using-a-https-proxy}

Une autre pratique courante consiste à avoir un proxy HTTPS devant Node (par exemple Nginx).

Dans ce cas, vous voudrez probablement définir `TRUST_PROXY_HEADER` sur `true`, ce qui indique si les champs d'en-tête de proxy doivent être approuvés. Logto passera la valeur aux paramètres de l'application [Koa](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings).

Voir [Trusting TLS offloading proxies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) pour savoir quand configurer ce champ.

## Configurations de la base de données {#database-configs}

Gérer trop de variables d'environnement n'est pas efficace et flexible, donc la plupart de nos configurations générales sont stockées dans la table de base de données `logto_configs`.

La table est un simple stockage clé-valeur, et la clé est énumérable comme suit :

| Key              | Type                  | Description                                                                                                                                |
| ---------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| oidc.cookieKeys  | <code>string[]</code> | Le tableau de chaînes des [clés de signature de cookie](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys). |
| oidc.privateKeys | <code>string[]</code> | Le tableau de chaînes du contenu de la clé privée pour la signature de Jeton d’identifiant (OIDC) .                                        |

### Types de clés privées pris en charge {#supported-private-key-types}

- EC (courbes P-256, secp256k1, P-384 et P-521)
- RSA
- OKP (sous-types Ed25519, Ed448, X25519, X448)
