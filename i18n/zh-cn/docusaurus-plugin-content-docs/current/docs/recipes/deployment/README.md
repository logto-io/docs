---
sidebar_position: 8
---

# ð é¨ç½²

## ç¯å¢åé

æä»¬å¨æ¼ç¤ºä¸­ï¼`docker-compose.yml`ï¼ä½¿ç¨äºä¸ç»èªå¨çæçç¯å¢åéï¼ä½ åºè¯¥æ¿æ¢æèªå·±çï¼å¹¶ç»´æ¤å¤ä¸ª Logto å®ä¾ä¹é´çåéç»ä¸æ§ã

ä½ å¯ä»¥ç´æ¥è®¾ç½®ç¯å¢åéï¼æèå¨ Logto é¡¹ç®æ ¹ç®å½ä¸­æ¾ç½®ä¸ä¸ª `.env` æä»¶ãå¦æä½ å¨ç¨ Docker è¿è¡æµè¯ï¼å¯ä»¥å» `/etc/logto` éççèªå¨çæç `.env`ã

### åºç¡

- `DB_URL` Logto æ°æ®åºç [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)ã
- `PORT` Logto çå¬çæ¬å°ç«¯å£ãé»è®¤ `3001`ã
- `ENDPOINT` ä½ å¯ä»¥æå®ä¸ä¸ªå¸¦æèªå®ä¹ååçæå Logto ç URLï¼ç¨äºå¨çº¿æµè¯æçäº§ç¯å¢ï¼ä¾å¦ `ENDPOINT=https://logto.domain.com`ï¼ãè¿ä¹ä¼å½±åå° [OIDC issuer identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) åãç®¡çæ§å¶å°ãRedirect URIs çå¼ã
- `OIDC_COOKIE_KEYS` [Signing cookie keys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys) çå­ç¬¦ä¸²æ°ç»ãå®æè½®æ¢ä»¥ç¡®ä¿å®å¨ã
- `OIDC_PRIVATE_KEY` [OIDC JWT ç­¾å](https://openid.net/specs/openid-connect-core-1_0.html#Signing) ç private key åå®¹ãå¦æä½ æ³å¨ `.env` ä¸­è®¾ç½®ï¼ä½ å¯ä»¥éè¿ [å¤è¡å¼](https://github.com/motdotla/dotenv#multiline-values) æ¥å®ç°ã

**ææ³ä½¿ç¨ `.pem` æä»¶ç¨ä½ OIDC private keyãæè¯¥æä¹åï¼**

å° `OIDC_PRIVATE_KEY` ç½®ç©ºï¼å¹¶å° `OIDC_PRIVATE_KEY_PATH` è®¾ç½®ä¸º `.pem` æä»¶çè·¯å¾ãå®çé»è®¤å¼æ¯ `'./oidc-private-key.pem'`ã

æå³ç¯å¢åéçè¯¦æï¼è¯·åè§ [éç½®](../../references/core/configuration.md)ã

### HTTPS

ä½ å¯ä»¥ç´æ¥ä½¿ç¨ Node.js æ¥ç´æ¥æä¾ HTTPSï¼æèå¨ Node.js åè®¾ç½®ä¸ä¸ª HTTPS ä»£ç/è´è½½åè¡¡ãè¯¦æåè§ [å¯ç¨ HTTPS](../../references/core/configuration.md#å¯ç¨-https)ã

## å¦ä½å®å¨å°åçº§ Logtoï¼

é¤éæä»¬å¨ changelog éç¹ææåºï¼ä½ é½æ éåæ´ä»£ç åæ°æ®åºå³å¯è½»æ¾åçº§ Logtoãæä»¬ç API éµå¾ª [semver](https://semver.org/) æ åã

å¦ææ°æ®åºåæ´æ æ³é¿åï¼æä»¬å°æä¾ä¸ä¸ªé¡ºæ»çæ°æ®åºè¿ç§»è¿ç¨ï¼å¹¶å¨ changelog ä¸­è¯¦ç»æè¿°ãä½ å°è½è½»æ¾å®æå®ã
