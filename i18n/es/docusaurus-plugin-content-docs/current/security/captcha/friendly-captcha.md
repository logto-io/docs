---
slug: /security/captcha/friendly-captcha
sidebar_label: Friendly Captcha
---

# Friendly Captcha

[Friendly Captcha](https://friendlycaptcha.com) v2 es un servicio CAPTCHA centrado en la privacidad y compatible con GDPR, basado en prueba de trabajo sin rompecabezas visuales. Esta guía te guía a través de la configuración de Friendly Captcha con Logto.

## Requisitos previos {#prerequisites}

- Una cuenta de Friendly Captcha

## Obtén el sitekey y la API key {#get-the-sitekey-and-api-key}

1. Inicia sesión en el [panel de Friendly Captcha](https://app.friendlycaptcha.com) y ve a **Applications**.
2. Haz clic en **+ New Application** y selecciona **v2**.
3. Si restringes los orígenes permitidos en la aplicación, añade el dominio de tu endpoint de Logto (por ejemplo, `https://[tenant-id].logto.app`).
4. Mantén habilitado el endpoint global (`global.frcapi.com`) a menos que restrinjas el sitekey al [endpoint de la UE](https://developer.friendlycaptcha.com/docs/v2/guides/eu-endpoint) (`eu.frcapi.com`, disponible en los planes Advanced y Enterprise), y copia el **Sitekey** (comienza con `FC`).
5. Abre **API Keys** en el panel, crea una nueva **API key** y cópiala.

## Configura Logto {#configure-logto}

1. Ve a **Console > Security > CAPTCHA**, selecciona **Friendly Captcha** e ingresa el **Site key** y la **API key**. Mantén **API endpoint** como **Global**, o elige **EU** si tu sitekey está restringido al endpoint de la UE.
2. Alternativamente, configúralo mediante la Management API (`PUT /api/captcha-provider`). `apiEndpoint` es opcional y acepta `"global"` (por defecto) o `"eu"`:

```json
{
  "config": {
    "type": "FriendlyCaptcha",
    "siteKey": "<siteKey>",
    "secretKey": "<apiKey>",
    "apiEndpoint": "global"
  }
}
```

## Trae tu propia UI {#bring-your-ui}

Si usas [Trae tu propia UI](/customization/bring-your-ui/), Logto no puede inyectar ni ejecutar Friendly Captcha automáticamente en tu frontend personalizado. Después de habilitar CAPTCHA en Logto Console, tu UI personalizada debe cargar `@friendlycaptcha/sdk`, montar el widget, esperar el token de finalización y enviarlo a la Experience API.

Instala el SDK de Friendly Captcha v2 en tu proyecto de UI personalizado:

```bash
npm install @friendlycaptcha/sdk
```

Agrega un contenedor para el widget:

```html
<div id="friendly-captcha-container"></div>
```

Monta el widget con `FriendlyCaptchaSDK`, espera a `frc:widget.complete` para leer `event.detail.response`, pasa ese token de un solo uso como `captchaToken` en `PUT /api/experience`, y reinicia con `widget.reset()` después de consumir el token para que los reintentos obtengan un token nuevo:

```js
import { FriendlyCaptchaSDK } from '@friendlycaptcha/sdk';

// Comentario: Inicializa el SDK y el widget de Friendly Captcha
const sdk = new FriendlyCaptchaSDK();
const element = document.querySelector('#friendly-captcha-container');

const widget = sdk.createWidget({
  element,
  sitekey: '<siteKey>',
  // Establece en 'eu' si elegiste el endpoint de la UE en Logto.
  apiEndpoint: 'global',
});

const getCaptchaToken = () => {
  if (widget.getState() === 'completed') {
    return Promise.resolve(widget.getResponse());
  }

  return new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('frc:widget.complete', onComplete);
      widget.removeEventListener('frc:widget.error', onError);
    };

    const onComplete = (event) => {
      cleanup();
      resolve(event.detail.response);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail.error.detail || event.detail.error.code));
    };

    widget.addEventListener('frc:widget.complete', onComplete);
    widget.addEventListener('frc:widget.error', onError);

    if (['init', 'reset', 'unactivated'].includes(widget.getState())) {
      widget.start();
    }
  });
};

// Antes de iniciar la interacción, obtén el token de un solo uso:
const captchaToken = await getCaptchaToken();

try {
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
} finally {
  // Los tokens son de un solo uso; reinicia el widget para que los reintentos obtengan un token nuevo.
  widget.reset();
}
```

## Habilita CAPTCHA {#enable-captcha}

Recuerda habilitar la protección contra bots CAPTCHA después de haber configurado el proveedor de CAPTCHA.

Ve a la página de Seguridad, busca la pestaña CAPTCHA y activa el botón de alternancia de "Enable CAPTCHA".
