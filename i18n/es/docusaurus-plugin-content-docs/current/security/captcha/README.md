---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# Protección contra bots con CAPTCHA

La protección contra bots con CAPTCHA ayuda a asegurar tus flujos de usuario verificando que los usuarios sean humanos, reduciendo significativamente los ataques de bots. Logto es compatible con proveedores líderes como Google reCAPTCHA Enterprise y Cloudflare Turnstile.

:::note
El CAPTCHA se aplica a las acciones de identificador, contraseña, código de verificación, registro y recuperación de contraseña. No se aplica al [enlace mágico](/end-user-flows/one-time-token) ni al [inicio de sesión con passkey](/end-user-flows/sign-up-and-sign-in/passkey-sign-in), por lo que los usuarios que completen el inicio de sesión con un enlace mágico o passkey no necesitan resolver un desafío CAPTCHA adicional.
:::

## Activar la protección contra bots con CAPTCHA {#enabling-captcha-bot-protection}

Sigue estos pasos para activar CAPTCHA en tus flujos de usuario (inicio de sesión con identificador, inicio de sesión con contraseña, registro y recuperación de contraseña):

1. **Navega a la configuración**: Ve a **Consola > Seguridad > Protección contra bots**.
2. **Selecciona el proveedor**: Elige tu proveedor de CAPTCHA preferido (por ejemplo, Google reCAPTCHA Enterprise o Cloudflare Turnstile).
3. **Configuración**: Sigue las instrucciones en el lado izquierdo de la página para configurar el proveedor de CAPTCHA seleccionado.
4. **Guardar**: Haz clic en **Guardar y listo** para aplicar tu configuración.
5. **(Opcional) Habilitar CAPTCHA**: CAPTCHA se habilitará automáticamente en la página de seguridad una vez que se configure un proveedor. Sin embargo, puedes verificar o ajustar la configuración manualmente si es necesario.

## Previsualizar la integración de CAPTCHA {#previewing-captcha-integration}

Tienes dos opciones para previsualizar y probar la integración de CAPTCHA:

1. **Usa tu aplicación**: Navega a las páginas de inicio de sesión, registro o recuperación de contraseña de tu aplicación e intenta realizar las acciones correspondientes.
2. **Aplicación de demostración**: Ve a **Comenzar** y utiliza la aplicación de demostración proporcionada para probar la funcionalidad de CAPTCHA.

Asegúrate de que el desafío CAPTCHA aparezca como se espera en cualquiera de las opciones.

## Proveedores compatibles {#supported-providers}

Actualmente, somos compatibles con:

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
