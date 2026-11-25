---
slug: /security/captcha/geetest
sidebar_label: GeeTest
---

# GeeTest

[GeeTest](https://www.geetest.com) CAPTCHA v4 est un service CAPTCHA adaptatif avec des défis localisés, largement utilisé en Chine continentale où les fournisseurs mondiaux tels que Google reCAPTCHA peuvent être difficiles d'accès. Ce guide vous accompagnera dans le processus de configuration de GeeTest CAPTCHA v4 avec Logto.

## Prérequis {#prerequisites}

- Un compte GeeTest avec CAPTCHA v4 activé.

## Obtenir l’ID et la clé CAPTCHA {#get-the-captcha-id-and-key}

1. Connectez-vous au [tableau de bord GeeTest](https://auth.geetest.com/login).
2. Créez une application et un événement **CAPTCHA v4**.
3. Copiez l’**ID CAPTCHA** et la **clé CAPTCHA** depuis le tableau de bord.

## Configurer Logto {#configure-logto}

1. Allez dans **Console > Sécurité > CAPTCHA**.
2. Choisissez **GeeTest** comme fournisseur CAPTCHA.
3. Saisissez l’**ID CAPTCHA** et la **clé CAPTCHA** que vous avez copiés depuis le tableau de bord GeeTest, puis enregistrez vos modifications.

Vous pouvez également configurer GeeTest via la Management API (`PUT /api/captcha-provider`) avec `type` défini sur `"Geetest"`, `siteKey` sur votre ID CAPTCHA, et `secretKey` sur votre clé CAPTCHA :

```json
{
  "config": {
    "type": "Geetest",
    "siteKey": "<captchaId>",
    "secretKey": "<captchaKey>"
  }
}
```

:::note
L’expérience de connexion intégrée de Logto initialise GeeTest v4 en mode `bind`, adapte automatiquement la langue de l’interface utilisateur et met à jour les en-têtes Content Security Policy pour autoriser les origines SDK, API et statiques de GeeTest tant que GeeTest est activé.
:::

## Apportez votre interface utilisateur {#bring-your-ui}

Si vous utilisez [Apportez votre interface utilisateur](/customization/bring-your-ui/), Logto ne peut pas injecter ou exécuter GeeTest automatiquement dans votre frontend personnalisé. Après avoir activé CAPTCHA dans la Console Logto, votre interface personnalisée doit charger le script GeeTest v4, lancer le défi et envoyer le résultat de validation sérialisé sous forme de `captchaToken` à l’Experience API.

Chargez le script GeeTest v4 dans votre interface personnalisée :

```html
<script src="https://static.geetest.com/v4/gt4.js" async defer></script>
```

Avant de commencer l’interaction, initialisez GeeTest v4 en mode `bind` avec `window.initGeetest4`, appelez `captcha.showCaptcha()`, puis lisez le résultat de validation depuis `captcha.getValidate()` dans `onSuccess`. Comme `captcha.getValidate()` retourne quatre champs (`lot_number`, `captcha_output`, `pass_token` et `gen_time`), sérialisez l’objet avec `JSON.stringify(validate)` et transmettez-le comme `captchaToken` dans `PUT /api/experience` :

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.initGeetest4(
    {
      captchaId: '<captchaId>',
      product: 'bind',
      onError: reject,
    },
    (captcha) => {
      captcha
        .onReady(() => {
          captcha.showCaptcha();
        })
        .onSuccess(() => {
          const validate = captcha.getValidate();

          if (!validate) {
            reject(new Error('Résultat de validation GeeTest manquant'));
            return;
          }

          // `validate` contient : lot_number, captcha_output, pass_token, gen_time
          resolve(JSON.stringify(validate));
        })
        .onError(reject)
        .onClose(() => {
          reject(new Error('Le CAPTCHA GeeTest a été fermé'));
        });
    }
  );
});

await fetch('/api/experience', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    interactionEvent: 'SignIn',
    captchaToken,
  }),
});
```

## Activer CAPTCHA {#enable-captcha}

N'oubliez pas d’activer la protection anti-bot CAPTCHA après avoir configuré le fournisseur CAPTCHA.

Rendez-vous sur la page Sécurité, trouvez l’onglet CAPTCHA et activez le bouton à bascule "Activer CAPTCHA".
