---
slug: /security/captcha/geetest
sidebar_label: GeeTest
---

# GeeTest

[GeeTest](https://www.geetest.com) CAPTCHA v4 es un servicio de CAPTCHA adaptativo con desafíos localizados, ampliamente utilizado en China continental donde los proveedores globales como Google reCAPTCHA pueden ser difíciles de alcanzar. Esta guía te guiará a través del proceso de configuración de GeeTest CAPTCHA v4 con Logto.

## Requisitos previos {#prerequisites}

- Una cuenta de GeeTest con CAPTCHA v4 habilitado.

## Obtén el CAPTCHA ID y la clave {#get-the-captcha-id-and-key}

1. Inicia sesión en el [panel de GeeTest](https://auth.geetest.com/login).
2. Crea una aplicación y un evento de **CAPTCHA v4**.
3. Copia el **CAPTCHA ID** y la **clave CAPTCHA** desde el panel.

## Configura Logto {#configure-logto}

1. Ve a **Consola > Seguridad > CAPTCHA**.
2. Elige **GeeTest** como el proveedor de CAPTCHA.
3. Ingresa el **CAPTCHA ID** y la **clave CAPTCHA** que copiaste del panel de GeeTest, y guarda los cambios.

Alternativamente, puedes configurar GeeTest a través de la Management API (`PUT /api/captcha-provider`) con `type` establecido en `"Geetest"`, `siteKey` establecido en tu CAPTCHA ID, y `secretKey` establecido en tu clave CAPTCHA:

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
La experiencia de inicio de sesión incorporada de Logto inicializa GeeTest v4 en modo `bind`, asigna automáticamente el idioma de la interfaz de usuario y actualiza los encabezados de Content Security Policy para permitir los orígenes de SDK, API y estáticos de GeeTest mientras GeeTest está habilitado.
:::

## Trae tu propia interfaz {#bring-your-ui}

Si usas [Trae tu propia interfaz](/customization/bring-your-ui/), Logto no puede inyectar ni ejecutar GeeTest en tu frontend personalizado automáticamente. Después de habilitar CAPTCHA en la Consola de Logto, tu interfaz personalizada debe cargar el script de GeeTest v4, ejecutar el desafío y enviar el resultado de validación serializado como `captchaToken` a la Experience API.

Carga el script de GeeTest v4 en tu interfaz personalizada:

```html
<script src="https://static.geetest.com/v4/gt4.js" async defer></script>
```

Antes de iniciar la interacción, inicializa GeeTest v4 en modo `bind` con `window.initGeetest4`, llama a `captcha.showCaptcha()`, y lee el resultado de validación desde `captcha.getValidate()` dentro de `onSuccess`. Debido a que `captcha.getValidate()` devuelve cuatro campos (`lot_number`, `captcha_output`, `pass_token` y `gen_time`), serializa el objeto con `JSON.stringify(validate)` y pásalo como `captchaToken` en `PUT /api/experience`:

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
            reject(new Error('Falta el resultado de validación de GeeTest'));
            return;
          }

          // `validate` contiene: lot_number, captcha_output, pass_token, gen_time
          resolve(JSON.stringify(validate));
        })
        .onError(reject)
        .onClose(() => {
          reject(new Error('El CAPTCHA de GeeTest fue cerrado'));
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

## Habilita CAPTCHA {#enable-captcha}

Recuerda habilitar la protección contra bots CAPTCHA después de haber configurado el proveedor de CAPTCHA.

Ve a la página de Seguridad, encuentra la pestaña CAPTCHA y activa el botón de alternancia de "Habilitar CAPTCHA".
