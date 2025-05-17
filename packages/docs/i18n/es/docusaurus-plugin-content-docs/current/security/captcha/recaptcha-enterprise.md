---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise es un servicio de Google que protege sitios web contra fraudes y abusos utilizando detección avanzada de bots sin interrumpir la experiencia del usuario. Esta guía te guiará a través del proceso de configuración de reCAPTCHA Enterprise con Logto.

## Prerrequisitos {#prerequisites}

- Un proyecto de Google Cloud

## Configurar una clave de reCAPTCHA {#setup-a-recaptcha-key}

1. Ve a la [página de reCAPTCHA de Google Cloud Console](https://console.cloud.google.com/security/recaptcha).
2. Haz clic en el botón **Crear clave** cerca de "Claves de reCAPTCHA".
3. Completa el formulario con los siguientes detalles:
   - **Nombre para mostrar**: Cualquier nombre que desees darle a la clave
   - **Tipo de aplicación**: Sitio web
   - **Lista de dominios**: Agrega el dominio del endpoint de Logto
4. Después de crear la clave, serás redirigido a la página de detalles de la clave, copia el **ID**.

## Configurar una clave de API {#setup-an-api-key}

1. Ve a la [página de Credenciales de Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Haz clic en el botón **Crear credenciales** y selecciona **Clave de API**.
3. Copia la clave de API.
4. Opcionalmente, puedes restringir la clave de API a **reCAPTCHA Enterprise API** para hacerla más segura.
5. Recuerda dejar "Restricciones de aplicación" en **Ninguna** si no entiendes qué es.

## Obtener el ID del proyecto {#get-project-id}

1. Copia el **ID del proyecto** desde la [página de inicio de Google Cloud Console](https://console.cloud.google.com/welcome).

## Habilitar CAPTCHA {#enable-captcha}

Recuerda habilitar la protección contra bots CAPTCHA después de haber configurado el proveedor de CAPTCHA.

Ve a la página de Seguridad, encuentra la pestaña CAPTCHA y activa el botón de alternancia de "Habilitar CAPTCHA".
