---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile es un servicio CAPTCHA que ayuda a proteger tu sitio web contra el spam y el abuso. Esta guía te guiará a través del proceso de configuración de Turnstile con Logto.

## Requisitos previos {#prerequisites}

- Una cuenta de Cloudflare

## Configuración {#setup}

1. Ve al [Panel de Cloudflare](https://dash.cloudflare.com/login) y selecciona tu cuenta.
2. Navega a **Turnstile** > **Add widget**.
3. Completa el formulario con los siguientes detalles:
   - **Nombre del widget**: Cualquier nombre que desees darle al widget
   - **Hostname**: El dominio del endpoint de Logto, por ejemplo, https://[tenant-id].logto.app
   - **Modo del widget**: Déjalo como predeterminado

## Obtén la clave del sitio y la clave secreta {#get-the-site-key-and-secret-key}

1. Navega hasta un widget que acabas de crear y haz clic en **Manage widget**.
2. Desplázate hacia abajo y copia la **Site key** y la **Secret key**.

## Bring your UI {#bring-your-ui}

Si usas [Bring your UI](/customization/bring-your-ui/), Logto no puede inyectar ni ejecutar Turnstile automáticamente en tu frontend personalizado. Después de habilitar CAPTCHA en Logto Console, tu UI personalizada debe cargar el script de Turnstile, renderizar el widget y enviar el token devuelto a la Experience API.

Carga el script de Turnstile en tu UI personalizada:

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

Agrega un contenedor para el widget:

```html
<div id="turnstile-container"></div>
```

Antes de iniciar la interacción, renderiza Turnstile con tu clave del sitio y pasa el token de callback como `captchaToken` en `PUT /api/experience`:

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.turnstile.render('#turnstile-container', {
    sitekey: '<siteKey>',
    callback: resolve,
    'error-callback': reject,
    size: 'flexible',
  });
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

Ve a la página de Seguridad, busca la pestaña CAPTCHA y activa el botón de alternancia de "Enable CAPTCHA".
