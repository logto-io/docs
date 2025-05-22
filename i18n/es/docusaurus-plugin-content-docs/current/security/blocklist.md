---
slug: /security/blocklist
sidebar_label: Lista de bloqueo
sidebar_position: 3
---

# Lista de bloqueo

## Lista de bloqueo de correos electrónicos {#email-blocklist}

La política de lista de bloqueo de correos electrónicos permite la personalización de configuraciones para prevenir el abuso en el registro de cuentas. Monitorea las direcciones de correo electrónico utilizadas para el registro y la configuración de cuentas. Si un usuario intenta registrarse o vincular una dirección de correo electrónico que infringe alguna regla de la lista de bloqueo, el sistema rechazará la solicitud, ayudando a mitigar cuentas de spam y mejorar la seguridad general de las cuentas.

Visita el <CloudLink to="/security/blocklist"> Consola > Seguridad > Lista de bloqueo</CloudLink> para configurar las configuraciones de la lista de bloqueo de correos electrónicos.

### Bloquear subdireccionamiento de correos electrónicos {#block-email-subaddressing}

El subdireccionamiento de correos electrónicos permite a los usuarios crear variaciones de sus direcciones de correo electrónico añadiendo un signo más (+) seguido de caracteres adicionales (por ejemplo, usuario+etiqueta@ejemplo.com). Esta característica puede ser explotada por usuarios malintencionados para eludir las restricciones de la lista de bloqueo. Al habilitar la función de bloqueo de subdireccionamiento de correos electrónicos, el sistema rechazará cualquier intento de registro o vinculación de cuenta que utilice formatos de correo electrónico subdireccionados.

### Lista de bloqueo de correos electrónicos personalizada {#custom-email-blocklist}

Puedes crear una lista de bloqueo de correos electrónicos personalizada especificando una lista de direcciones de correo electrónico o dominios a bloquear. El sistema rechazará cualquier intento de registro o vinculación de cuenta que coincida con estas entradas. La lista de bloqueo admite tanto la coincidencia de direcciones de correo electrónico completas como de dominios.

Por ejemplo, al añadir `@ejemplo.com` a la lista de bloqueo, se bloquearán todas las direcciones de correo electrónico con ese dominio. De manera similar, al añadir `foo@ejemplo.com`, se bloqueará específicamente esa dirección de correo electrónico.

### Bloquear direcciones de correo electrónico desechables {#block-disposable-email-addresses}

Esta es una característica **solo en la nube**. Una vez habilitada, el sistema validará automáticamente el dominio de la dirección de correo electrónico proporcionada contra una lista de dominios de correo electrónico desechables conocidos. Si el dominio se encuentra en la lista, la solicitud será rechazada. La lista de dominios de correo electrónico desechables se actualiza regularmente para asegurar su efectividad.
