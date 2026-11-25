---
slug: /security/captcha/cap
sidebar_label: Cap
---

# Cap

[Cap](https://capjs.js.org) es una alternativa CAPTCHA de código abierto y autoalojada basada en proof-of-work, sin rompecabezas visuales ni dependencias de servicios de terceros, lo que la hace ideal para regiones donde los servicios CAPTCHA externos no son accesibles. Esta guía te guía a través de la configuración de Cap con Logto.

## Requisitos previos {#prerequisites}

- Una instancia de [Cap Standalone](https://capjs.js.org/guide/capd/index.html) públicamente accesible por HTTPS, ya que tanto la página de inicio de sesión del navegador como Logto necesitan acceso a ella.

## Crear una clave de sitio {#create-a-site-key}

1. Abre el panel de tu instancia de Cap Standalone e inicia sesión con tu clave de administrador.
2. Crea una nueva clave de sitio. Si restringes los orígenes CORS, añade el dominio del endpoint de Logto, como `https://[tenant-id].logto.app`.
3. Copia la **clave de sitio (Site key)** y la **clave secreta (Secret key)**. La clave secreta solo se muestra una vez.

## Configurar Logto {#configure-logto}

En **Consola > Seguridad > CAPTCHA**, elige **Cap** y completa los siguientes datos:

- **Endpoint de Cap**: La URL base de tu instancia de Cap Standalone, por ejemplo, `https://cap.example.com`
- **Clave de sitio (Site key)**: La clave de sitio que copiaste arriba
- **Clave secreta (Secret key)**: La clave secreta que copiaste arriba

Alternativamente, puedes configurar Cap a través del Management API con `PUT /api/captcha-provider`:

```json
{
  "config": {
    "type": "Cap",
    "endpoint": "https://cap.example.com",
    "siteKey": "<siteKey>",
    "secretKey": "<secretKey>"
  }
}
```

:::note
Usa HTTPS para tu endpoint de Cap en producción. Los navegadores bloquean solicitudes HTTP mixtas desde una página de inicio de sesión HTTPS, y HTTP envía la clave secreta sin cifrar.
:::

## Nota de seguridad {#security-note}

El desafío de instrumentación de Cap evalúa scripts en el navegador para detectar bots. Mientras Cap está habilitado, la página de inicio de sesión integrada de Logto permite el origen de Cap, blob workers, WebAssembly (`'wasm-unsafe-eval'`) y evaluación dinámica de JavaScript (`'unsafe-eval'`) en su Política de Seguridad de Contenidos (CSP).

## Trae tu propia interfaz {#bring-your-ui}

Si usas [Trae tu propia interfaz](/customization/bring-your-ui/), Logto no puede inyectar ni ejecutar Cap automáticamente en tu frontend personalizado. Después de habilitar CAPTCHA en Logto Console, tu interfaz personalizada debe cargar `@cap.js/widget`, renderizar el widget y enviar el token resuelto a la Experience API.

Carga `@cap.js/widget` en tu interfaz personalizada (o instálalo e inclúyelo en tu build de frontend):

```html
<script src="https://cdn.jsdelivr.net/npm/@cap.js/widget" async></script>
```

:::note
Si cargas `@cap.js/widget` desde un CDN en lugar de incluirlo en tu build, añade el origen del CDN (como `https://cdn.jsdelivr.net`) a `scriptSrc` y `connectSrc` en tus [fuentes CSP personalizadas](/customization/bring-your-ui/#configure-custom-csp-sources) para que el script del widget y su solucionador WebAssembly puedan cargarse.
:::

Agrega el elemento `<cap-widget>` apuntando a tu endpoint de Cap Standalone y clave de sitio:

```html
<cap-widget data-cap-api-endpoint="https://cap.example.com/<siteKey>/"></cap-widget>
```

Escucha el evento `solve` (`event.detail.token`), envía el token de un solo uso como `captchaToken` en `PUT /api/experience`, y reinicia el widget con `widget.reset()` después de consumirlo:

```js
await customElements.whenDefined('cap-widget');
const widget = document.querySelector('cap-widget');

const captchaToken =
  widget.token ??
  (await new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('solve', onSolve);
      widget.removeEventListener('error', onError);
    };

    const onSolve = (event) => {
      cleanup();
      resolve(event.detail.token);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail?.message ?? 'La verificación de Cap falló'));
    };

    widget.addEventListener('solve', onSolve);
    widget.addEventListener('error', onError);
    widget.solve().catch((error) => {
      cleanup();
      reject(error);
    });
  }));

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
  // Los tokens de Cap son de un solo uso; reinicia el widget después de consumir el token.
  widget.reset();
}
```

## Habilitar CAPTCHA {#enable-captcha}

Recuerda habilitar la protección contra bots CAPTCHA después de haber configurado el proveedor de CAPTCHA.

Ve a la página de Seguridad, busca la pestaña CAPTCHA y activa el botón de alternancia de "Habilitar CAPTCHA".
