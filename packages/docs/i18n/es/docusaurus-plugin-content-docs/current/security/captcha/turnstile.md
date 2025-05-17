---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile es un servicio CAPTCHA que ayuda a proteger tu sitio web del spam y el abuso. Esta guía te llevará a través del proceso de configuración de Turnstile con Logto.

## Requisitos previos {#prerequisites}

- Una cuenta de Cloudflare

## Configuración {#setup}

1. Ve al [Panel de Cloudflare](https://dash.cloudflare.com/login) y selecciona tu cuenta.
2. Navega a **Turnstile** > **Add widget**.
3. Completa el formulario con los siguientes detalles:
   - **Widget name**: Cualquier nombre que desees darle al widget
   - **Hostname**: El dominio del endpoint de Logto, por ejemplo, https://[tenant-id].logto.app
   - **Widget Mode**: Déjalo como predeterminado

## Obtén la clave del sitio y la clave secreta {#get-the-site-key-and-secret-key}

1. Navega a un widget que acabas de crear y haz clic en **Manage widget**.
2. Desplázate hacia abajo hasta el final y copia la **Site key** y la **Secret key**.

## Habilitar CAPTCHA {#enable-captcha}

Recuerda habilitar la protección contra bots CAPTCHA después de haber configurado el proveedor de CAPTCHA.

Ve a la página de Seguridad, encuentra la pestaña CAPTCHA y activa el botón de alternancia de "Enable CAPTCHA".
