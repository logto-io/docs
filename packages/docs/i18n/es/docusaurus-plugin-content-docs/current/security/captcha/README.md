---
slug: /security/captcha
sidebar_label: CAPTCHA
---

# Protección contra bots CAPTCHA

La protección contra bots CAPTCHA ayuda a asegurar tus flujos de usuario verificando que los usuarios sean humanos, reduciendo significativamente los ataques de bots. Logto admite proveedores líderes como Google reCAPTCHA Enterprise y Cloudflare Turnstile.

## Activación de la protección contra bots CAPTCHA {#enabling-captcha-bot-protection}

Sigue estos pasos para activar CAPTCHA en tus flujos de usuario (inicio de sesión, registro y recuperación de contraseña):

1. **Navega a la configuración**: Ve a **Consola > Seguridad > Protección contra bots**.
2. **Selecciona el proveedor**: Elige tu proveedor de CAPTCHA preferido (por ejemplo, Google reCAPTCHA Enterprise o Cloudflare Turnstile).
3. **Configuración**: Sigue las instrucciones en el lado izquierdo de la página para configurar el proveedor de CAPTCHA seleccionado.
4. **Guardar**: Haz clic en **Guardar y listo** para aplicar tus configuraciones.
5. **(Opcional) Habilitar CAPTCHA**: CAPTCHA se habilitará automáticamente en la página de seguridad una vez que se configure un proveedor. Sin embargo, puedes verificar o ajustar manualmente las configuraciones según sea necesario.

## Previsualización de la integración de CAPTCHA {#previewing-captcha-integration}

Tienes dos opciones para previsualizar y probar la integración de CAPTCHA:

1. **Usa tu aplicación**: Navega a las páginas de inicio de sesión, registro o recuperación de contraseña de tu aplicación e intenta las acciones de usuario respectivas.
2. **Aplicación de demostración**: Ve a **Comenzar** y utiliza la aplicación de demostración proporcionada para probar la funcionalidad de CAPTCHA.

Asegúrate de que el desafío CAPTCHA aparezca como se espera en cualquiera de las opciones.

## Proveedores admitidos {#supported-providers}

Actualmente, admitimos:

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
