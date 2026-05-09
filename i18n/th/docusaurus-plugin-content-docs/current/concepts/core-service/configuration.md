# การกำหนดค่า

## ตัวแปรสภาพแวดล้อม {#environment-variables}

### การใช้งาน {#usage}

Logto จัดการตัวแปรสภาพแวดล้อมตามลำดับดังนี้:

- ตัวแปรสภาพแวดล้อมของระบบ
- ไฟล์ `.env` ที่อยู่ใน root ของโปรเจกต์ ซึ่งเป็นไปตามรูปแบบ [dotenv](https://github.com/motdotla/dotenv#readme)

ดังนั้น ตัวแปรสภาพแวดล้อมของระบบจะมีสิทธิ์แทนที่ค่าที่อยู่ใน `.env`

### ตัวแปร {#variables}

:::caution
หากคุณรัน Logto ด้วย `npm start` ที่ root ของโปรเจกต์ `NODE_ENV` จะเป็น `production` เสมอ
:::

ในค่าเริ่มต้น `protocol` จะเป็น `http` หรือ `https` ตามการตั้งค่า HTTPS ของคุณ

| Key                               | ค่าเริ่มต้น                          | ประเภท                                                   | คำอธิบาย                                                                                                                                                                                                                                                         |
| --------------------------------- | ------------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                          | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | ประเภทของสภาพแวดล้อมที่ Logto ทำงานอยู่                                                                                                                                                                                                                          |
| PORT                              | `3001`                               | `number`                                                 | พอร์ตภายในเครื่องที่ Logto รับฟัง                                                                                                                                                                                                                                |
| ADMIN_PORT                        | `3002`                               | `number`                                                 | พอร์ตภายในเครื่องที่ Logto Admin Console รับฟัง                                                                                                                                                                                                                  |
| ADMIN_DISABLE_LOCALHOST           | N/A                                  | <code>string &#124; boolean &#124; number</code>         | ตั้งค่าเป็น `1` หรือ `true` เพื่อปิดพอร์ตสำหรับ Admin Console หาก `ADMIN_ENDPOINT` ไม่ถูกตั้งค่า จะปิด Admin Console ทั้งหมด                                                                                                                                     |
| DB_URL                            | N/A                                  | `string`                                                 | [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) สำหรับฐานข้อมูล Logto                                                                                                                                                       |
| DATABASE_STATEMENT_TIMEOUT        | N/A                                  | `string`                                                 | (v1.36.0+) PostgreSQL `statement_timeout` หน่วยเป็นมิลลิวินาที ใช้ string ตัวเลข (เช่น `5000`) เพื่อกำหนด หรือ `DISABLE_TIMEOUT` เพื่อไม่ใช้ startup parameter (แนะนำสำหรับ PgBouncer/RDS Proxy) หากไม่ตั้งค่าหรือไม่ถูกต้อง ค่าเริ่มต้นของ client คือ 60000 ms  |
| HTTPS_CERT_PATH                   | `undefined`                          | <code>string &#124; undefined</code>                     | ดูรายละเอียดที่ [การเปิดใช้งาน HTTPS](#enabling-https)                                                                                                                                                                                                           |
| HTTPS_KEY_PATH                    | `undefined`                          | <code>string &#124; undefined</code>                     | เช่นเดียวกัน                                                                                                                                                                                                                                                     |
| TRUST_PROXY_HEADER                | `false`                              | `boolean`                                                | เช่นเดียวกัน                                                                                                                                                                                                                                                     |
| ENDPOINT                          | `'protocol://localhost:$PORT'`       | `string`                                                 | คุณสามารถระบุ URL ที่มีโดเมนของคุณเองสำหรับการทดสอบออนไลน์หรือ production ได้ ค่านี้จะมีผลต่อ [OIDC issuer identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) ด้วย                                                              |
| ADMIN_ENDPOINT                    | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | คุณสามารถระบุ URL ที่มีโดเมนของคุณเองสำหรับ production (เช่น `ADMIN_ENDPOINT=https://admin.domain.com`) ค่านี้จะมีผลต่อค่า Admin Console Redirect URIs ด้วย                                                                                                      |
| CASE_SENSITIVE_USERNAME           | `true`                               | `boolean`                                                | ระบุว่าชื่อผู้ใช้ต้องตรงตามตัวพิมพ์เล็ก/ใหญ่หรือไม่ โปรดระวังเมื่อเปลี่ยนค่านี้; การเปลี่ยนแปลงจะไม่ปรับข้อมูลในฐานข้อมูลที่มีอยู่โดยอัตโนมัติ ต้องจัดการเอง                                                                                                     |
| SECRET_VAULT_KEK                  | `undefined`                          | `string`                                                 | Key Encryption Key (KEK) ที่ใช้เข้ารหัส Data Encryption Keys (DEK) ใน [Secret Vault](/secret-vault) จำเป็นสำหรับการทำงานของ Secret Vault ต้องเป็น string ที่เข้ารหัส base64 แนะนำให้ใช้ AES-256 (32 bytes) ตัวอย่าง: `crypto.randomBytes(32).toString('base64')` |
| PRIVATE_KEY_ROTATION_GRACE_PERIOD | `0`                                  | `number`                                                 | ระยะเวลาผ่อนผัน (วินาที) สำหรับการหมุนคีย์ส่วนตัว OIDC แบบ staged เมื่อกำหนดค่ามากกว่า 0 คีย์ใหม่จะถูกสร้างเป็น `Next` ก่อนและจะมีผลหลังจากหมดระยะเวลาผ่อนผัน                                                                                                    |

### การเปิดใช้งาน HTTPS {#enabling-https}

#### ใช้งานกับ Node {#using-node}

Node รองรับ HTTPS โดยตรง เพียงระบุ **ทั้ง** `HTTPS_CERT_PATH` และ `HTTPS_KEY_PATH` เพื่อเปิดใช้งาน HTTPS ผ่าน Node

`HTTPS_CERT_PATH` คือ path ไปยังใบรับรอง HTTPS ของคุณ ส่วน `HTTPS_KEY_PATH` คือ path ไปยังคีย์ HTTPS ของคุณ

#### ใช้งานกับ HTTPS proxy {#using-a-https-proxy}

อีกแนวทางที่นิยมคือการมี HTTPS proxy อยู่หน้า Node (เช่น Nginx)

ในกรณีนี้ คุณอาจต้องตั้งค่า `TRUST_PROXY_HEADER` เป็น `true` เพื่อระบุว่าควรเชื่อ header จาก proxy หรือไม่ Logto จะส่งค่าดังกล่าวไปยัง [Koa app settings](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings)

ดู [Trusting TLS offloading proxies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) เพื่อดูว่าเมื่อใดควรตั้งค่านี้

## การตั้งค่าฐานข้อมูล {#database-configs}

การจัดการตัวแปรสภาพแวดล้อมจำนวนมากไม่สะดวกและยืดหยุ่น ดังนั้นการตั้งค่าทั่วไปส่วนใหญ่ของเราจะถูกเก็บไว้ในตารางฐานข้อมูล `logto_configs`

ตารางนี้เป็น key-value storage แบบง่าย ๆ โดย key ที่ใช้ได้มีดังนี้:

| Key              | ประเภท                | คำอธิบาย                                                                                                                      |
| ---------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | อาร์เรย์ string ของ [signing cookie keys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys)   |
| oidc.privateKeys | <code>string[]</code> | อาร์เรย์ string ของเนื้อหาคีย์ส่วนตัวสำหรับ [OIDC JWT signing](https://openid.net/specs/openid-connect-core-1_0.html#Signing) |

### ประเภทคีย์ส่วนตัวที่รองรับ {#supported-private-key-types}

- EC (P-256, secp256k1, P-384, และ P-521 curves)
- RSA
- OKP (Ed25519, Ed448, X25519, X448 sub types)
