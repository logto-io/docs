---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise es un servicio de Google que protege los sitios web contra fraudes y abusos utilizando detección avanzada de bots sin interrumpir la experiencia del usuario. Esta guía te llevará paso a paso por el proceso de configuración de reCAPTCHA Enterprise con Logto.

## Requisitos previos {#prerequisites}

- Un proyecto de Google Cloud

## Configura una clave de reCAPTCHA {#setup-a-recaptcha-key}

1. Ve a la [página de reCAPTCHA en Google Cloud Console](https://console.cloud.google.com/security/recaptcha).
2. Haz clic en el botón **Crear clave** cerca de "Claves de reCAPTCHA".
3. Completa el formulario con los siguientes detalles:
   - **Nombre para mostrar**: Cualquier nombre que desees darle a la clave
   - **Tipo de aplicación**: Sitio web
   - **Lista de dominios**: Añade el dominio del endpoint de Logto
   - **Tipo de verificación**: Elige entre **Basado en puntuación (invisible)** o **Desafío de casilla de verificación**. Esto determina cómo se mostrará reCAPTCHA a los usuarios. Consulta [Modo de verificación](#verification-mode) para más detalles.
4. Después de crear la clave, serás redirigido a la página de detalles de la clave, copia el **ID**.

## Configura una clave de API {#setup-an-api-key}

1. Ve a la [página de Credenciales en Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Haz clic en el botón **Crear credenciales** y selecciona **Clave de API**.
3. Copia la clave de API.
4. Opcionalmente, puedes restringir la clave de API a **reCAPTCHA Enterprise API** para hacerla más segura.
5. Recuerda dejar "Restricciones de aplicación" en **Ninguna** si no entiendes para qué sirve.

## Obtén el ID del proyecto {#get-project-id}

1. Copia el **ID del proyecto** desde la [página principal de Google Cloud Console](https://console.cloud.google.com/welcome).

## Modo de verificación {#verification-mode}

reCAPTCHA Enterprise admite dos modos de verificación:

- **Invisible**: Verificación basada en puntuación que se ejecuta automáticamente en segundo plano sin interacción del usuario. Este es el modo predeterminado.
- **Casilla de verificación**: Muestra el clásico widget de casilla "No soy un robot" que requiere interacción del usuario.

:::note
El modo de verificación que selecciones en Logto debe coincidir con el tipo de clave que creaste en Google Cloud Console. Si creaste una clave basada en puntuación, selecciona **Invisible**. Si creaste una clave de desafío de casilla de verificación, selecciona **Casilla de verificación**.
:::

## Trae tu propia interfaz {#bring-your-ui}

Si utilizas [Trae tu propia interfaz](/customization/bring-your-ui/), Logto no puede inyectar ni ejecutar reCAPTCHA automáticamente en tu frontend personalizado. Después de habilitar CAPTCHA en Logto Console, tu interfaz personalizada debe cargar el script de reCAPTCHA Enterprise, obtener un token de CAPTCHA y enviarlo a la Experience API.

Para el modo **Invisible**, carga el script con tu clave de sitio:

```html
<script src="https://www.google.com/recaptcha/enterprise.js?render=<siteKey>" async defer></script>
```

Si configuraste un dominio personalizado en Logto, reemplaza `www.google.com` por ese dominio, por ejemplo `recaptcha.net`.

Antes de iniciar la interacción, ejecuta reCAPTCHA con la acción fija `interaction` y pasa el token devuelto como `captchaToken` en `PUT /api/experience`:

```js
const captchaToken = await grecaptcha.enterprise.execute('<siteKey>', {
  action: 'interaction',
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

Para el modo **Casilla de verificación**, carga el script con `render=explicit`, muestra el widget en tu página y utiliza el token de callback como `captchaToken` al llamar a `PUT /api/experience`.

## Dominio personalizado {#custom-domain}

Por defecto, Logto carga el script de reCAPTCHA desde `www.google.com`. Sin embargo, en algunas regiones donde el dominio estándar de Google no es accesible, puedes configurar un dominio alternativo.

Dominios compatibles:

- `www.google.com` (predeterminado)
- `recaptcha.net`

Para configurar un dominio personalizado, ingresa el dominio en el campo **Dominio** al configurar reCAPTCHA Enterprise en Logto Console.

## Habilita CAPTCHA {#enable-captcha}

Recuerda habilitar la protección contra bots CAPTCHA después de haber configurado el proveedor de CAPTCHA.

Ve a la página de Seguridad, busca la pestaña CAPTCHA y activa el botón de alternancia de "Habilitar CAPTCHA".
