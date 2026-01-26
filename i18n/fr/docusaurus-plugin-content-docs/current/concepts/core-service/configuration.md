# Configuration (Configuration)

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

| Clé                     | Valeur par défaut                    | Type                                                     | Description                                                                                                                                                                                                                                                                                                                          |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Le type d'environnement dans lequel Logto s'exécute.                                                                                                                                                                                                                                                                                 |
| PORT                    | `3001`                               | `number`                                                 | Le port local sur lequel Logto écoute.                                                                                                                                                                                                                                                                                               |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Le port local sur lequel la Console d'administration Logto écoute.                                                                                                                                                                                                                                                                   |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | Définissez-le à `1` ou `true` pour désactiver le port pour la Console d'administration. Si `ADMIN_ENDPOINT` n'est pas défini, cela désactivera complètement la Console d'administration.                                                                                                                                             |
| DB_URL                  | N/A                                  | `string`                                                 | Le [DSN Postgres](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) pour la base de données Logto.                                                                                                                                                                                                               |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | Voir [Activation de HTTPS](#enabling-https) pour plus de détails.                                                                                                                                                                                                                                                                    |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | Idem.                                                                                                                                                                                                                                                                                                                                |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | Idem.                                                                                                                                                                                                                                                                                                                                |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | Vous pouvez spécifier une URL avec votre domaine personnalisé pour les tests en ligne ou la production. Cela affectera également la valeur de l'[identifiant d’émetteur OIDC](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier).                                                                               |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | Vous pouvez spécifier une URL avec votre domaine personnalisé pour la production (ex : `ADMIN_ENDPOINT=https://admin.domain.com`). Cela affectera également la valeur des URI de redirection de la Console d'administration.                                                                                                         |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | Spécifie si le nom d'utilisateur est sensible à la casse. Faites attention lors de la modification de cette valeur ; les changements n'ajusteront pas automatiquement les données existantes de la base de données, nécessitant une gestion manuelle.                                                                                |
| SECRET_VAULT_KEK        | `undefined`                          | `string`                                                 | La clé de chiffrement principale (KEK) utilisée pour chiffrer les clés de chiffrement des données (DEK) dans le [Secret Vault](/secret-vault). Requise pour le bon fonctionnement du Secret Vault. Doit être une chaîne encodée en base64. AES-256 (32 octets) est recommandé. Exemple : `crypto.randomBytes(32).toString('base64')` |

### Activation de HTTPS {#enabling-https}

#### Utilisation de Node {#using-node}

Node prend en charge HTTPS nativement. Fournissez **LES DEUX** `HTTPS_CERT_PATH` et `HTTPS_KEY_PATH` pour activer HTTPS via Node.

`HTTPS_CERT_PATH` indique le chemin vers votre certificat HTTPS, tandis que `HTTPS_KEY_PATH` indique le chemin vers votre clé HTTPS.

#### Utilisation d'un proxy HTTPS {#using-a-https-proxy}

Une autre pratique courante consiste à placer un proxy HTTPS devant Node (ex : Nginx).

Dans ce cas, vous souhaiterez probablement définir `TRUST_PROXY_HEADER` à `true`, ce qui indique si les champs d'en-tête du proxy doivent être approuvés. Logto transmettra la valeur aux [paramètres de l'application Koa](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings).

Voir [Trusting TLS offloading proxies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) pour savoir quand configurer ce champ.

## Configurations de base de données {#database-configs}

Gérer trop de variables d'environnement n'est ni efficace ni flexible, c'est pourquoi la plupart de nos configurations générales sont stockées dans la table de base de données `logto_configs`.

La table est un simple stockage clé-valeur, et la clé est énumérable comme suit :

| Clé              | Type                  | Description                                                                                                                                    |
| ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | Le tableau de chaînes des [clés de signature de cookie](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys).     |
| oidc.privateKeys | <code>string[]</code> | Le tableau de chaînes du contenu de la clé privée pour la [signature JWT OIDC](https://openid.net/specs/openid-connect-core-1_0.html#Signing). |

### Types de clés privées pris en charge {#supported-private-key-types}

- EC (courbes P-256, secp256k1, P-384 et P-521)
- RSA
- OKP (sous-types Ed25519, Ed448, X25519, X448)
