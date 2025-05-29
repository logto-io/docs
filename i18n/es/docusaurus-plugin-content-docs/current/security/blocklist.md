---
slug: /security/blocklist
sidebar_label: Lista de bloqueo
sidebar_position: 3
---

# Lista de bloqueo (Blocklist)

## Lista de bloqueo de correos electrónicos {#email-blocklist}

La política de lista de bloqueo de correos electrónicos permite personalizar la configuración de la lista de bloqueo para evitar el abuso en el registro de cuentas. Supervisa las direcciones de correo electrónico utilizadas para el registro y la configuración de cuentas. Si un usuario intenta registrarse o vincular una dirección de correo electrónico que infringe alguna regla de la lista de bloqueo, el sistema rechazará la solicitud, ayudando a mitigar cuentas de spam y mejorar la seguridad general de las cuentas.

Visita <CloudLink to="/security/blocklist">Consola > Seguridad > Lista de bloqueo</CloudLink> para configurar los ajustes de la lista de bloqueo de correos electrónicos.

### Bloquear direcciones de correo electrónico desechables {#block-disposable-email-addresses}

Esta es una función **solo en la nube**. Una vez habilitada, el sistema validará automáticamente el dominio de la dirección de correo electrónico proporcionada contra una lista de dominios de correo electrónico desechables conocidos. Si el dominio se encuentra en la lista, la solicitud será rechazada. La lista de dominios de correo electrónico desechables se actualiza regularmente para garantizar su eficacia.

### Bloquear subdireccionamiento de correo electrónico {#block-email-subaddressing}

El subdireccionamiento de correo electrónico permite a los usuarios crear variaciones de sus direcciones de correo agregando un signo más (+) seguido de caracteres adicionales (por ejemplo, usuario+etiqueta@ejemplo.com). Esta función puede ser explotada por usuarios malintencionados para eludir las restricciones de la lista de bloqueo. Al habilitar la función de bloqueo de subdireccionamiento de correo electrónico, el sistema rechazará cualquier intento de registro o vinculación de cuenta que utilice formatos de correo electrónico con subdireccionamiento.

### Lista de bloqueo de correos electrónicos personalizada {#custom-email-blocklist}

Puedes crear una lista de bloqueo de correos electrónicos personalizada especificando una lista de direcciones de correo electrónico o dominios a bloquear. El sistema rechazará cualquier intento de registro o vinculación de cuenta que coincida con estas entradas. La lista de bloqueo admite coincidencia tanto de direcciones de correo electrónico completas como de dominios.

Por ejemplo, agregar `@example.com` a la lista de bloqueo bloqueará todas las direcciones de correo electrónico con ese dominio. De manera similar, agregar `foo@example.com` bloqueará específicamente esa dirección de correo electrónico.

:::note

Los correos electrónicos desechables, el subdireccionamiento y los correos electrónicos personalizados están restringidos durante el registro y la vinculación de cuentas. Los usuarios existentes con estas direcciones de correo electrónico aún pueden iniciar sesión.

- Los administradores pueden "omitir restricciones" agregando usuarios manualmente en <CloudLink to="/users">Consola > Gestión de usuarios</CloudLink>, o mediante [Management API](https://openapi.logto.io/operation/operation-createuser). Por ejemplo, crear un usuario con un correo electrónico con subdireccionamiento cuando el subdireccionamiento está bloqueado.
- Bloquea cuentas existentes eliminándolas o suspendiéndolas en <CloudLink to="/users">Consola > Gestión de usuarios</CloudLink>.

:::

## Recursos relacionados

<Url href="https://blog.logto.io/disposable-email">¿Qué es un correo electrónico desechable? ¿Cómo gestionarlos en tu aplicación?</Url>
