---
sidebar_position: 3
---

# WebAuthn (Passkeys)

WebAuthn proporciona una alternativa más segura y amigable para el usuario en comparación con las contraseñas tradicionales. Al utilizar criptografía de clave pública, WebAuthn mejora la seguridad al vincular el dispositivo del usuario, el dominio del servicio y el ID del usuario, contrarrestando efectivamente el phishing y los ataques de contraseñas. Es compatible con varios dispositivos o navegadores y permite a los usuarios emplear características de seguridad biométrica y de hardware para una autenticación conveniente. Logto ahora admite WebAuthn para la Autenticación Multifactor (MFA).

## Conceptos

Los clientes siempre conocen Passkeys en lugar de WebAuthn, entonces, ¿cuál es la relación entre ellos y cómo usarlos? Exploremos estos conceptos:

- **Passkeys**: Una passkey es una credencial basada en FIDO, resistente al phishing, para reemplazar contraseñas. Utiliza criptografía de clave pública asimétrica para mejorar la seguridad. Puede ser tokens de hardware o claves de seguridad, como dispositivos USB o Bluetooth. Dado que "Passkeys" es el método de autenticación mostrado a los usuarios, debe usarse dentro del cliente de tu producto.
- **WebAuthn**: Es una API de JavaScript desarrollada por el W3C y la FIDO Alliance, que potencia la autenticación de aplicaciones web con estándares FIDO2. Passkeys es uno de los métodos de autenticación que WebAuthn admite. En la Consola de Logto, nos referimos profesionalmente a esta integración como "WebAuthn".

WebAuthn proporciona diversos autenticadores para que los usuarios elijan, disponibles en dos tipos para uso local y en la nube:

- **Autenticador de plataforma (Autenticador interno)**: Está vinculado a un sistema operativo de dispositivo único y específico, como una computadora, laptop, teléfono o tableta, con el que el usuario inicia sesión. Funciona exclusivamente en el dispositivo para la autorización utilizando métodos como biometría o un código de acceso del dispositivo, por lo que es una forma rápida de autenticar. Por ejemplo, iCloud Keychain verificado por Touch ID, Face ID o código de acceso del dispositivo en macOS o iOS; Windows Hello verificado por reconocimiento facial, huella digital o PIN amigable.
- **Autenticador itinerante (Autenticador externo, Autenticador multiplataforma)**: Es un dispositivo o aplicación de software separado y portátil, como una clave de seguridad de hardware o un teléfono inteligente. Debe vincular el dispositivo usando USB o mantener NFC o Bluetooth activado. El autenticador itinerante no está limitado a un solo dispositivo o navegador, proporcionando mayor flexibilidad.

Para profundizar en los principios y procesos de WebAuthn, puedes consultar nuestras publicaciones en el blog: [WebAuthn and Passkeys 101](https://blog.logto.io/web-authn-and-passkey-101/) y [Things you should know before integrating WebAuthn](https://blog.logto.io/webauthn-base-knowledge/).

## Presta atención a las limitaciones

Es esencial estar al tanto de algunas limitaciones al implementar WebAuthn:

1. **Limitación de plataforma y navegador**: Es importante tener en cuenta que Logto actualmente no ofrece soporte para WebAuthn en aplicaciones nativas. Además, la disponibilidad de autenticadores WebAuthn depende de las capacidades del navegador y del dispositivo ([Consulta la lista](https://caniuse.com/?search=webauthn)). Por lo tanto, WebAuthn no siempre es la única opción para implementar la Autenticación Multifactor (MFA), de lo contrario, puedes controlar qué navegadores y dispositivos pueden acceder a tu producto.
2. **Limitación de dominio**: Cambiar el dominio puede obstaculizar la verificación del usuario a través de sus cuentas WebAuthn existentes. Las passkeys están vinculadas al dominio específico de la página web actual y no se pueden usar en diferentes dominios.
3. **Limitación de dispositivo**: Perder el dispositivo puede resultar en la pérdida de acceso a sus cuentas, especialmente para aquellos que dependen de los Autenticadores de Plataforma "Este dispositivo". Para mejorar el acceso a la autenticación, es recomendable proporcionar a los usuarios más de un factor de autenticación.

## Flujos de autenticación

La especificación de Passkeys requiere que los usuarios hagan clic activamente en el botón en la página actual para iniciar el componente de autenticación. Esto significa que tanto en los flujos de configuración como de verificación, los usuarios deben ser redirigidos a la página de inicio para iniciar WebAuthn.

- **Flujos de configuración**

![Flujo de configuración de WebAuthn](./assets/webauthn-setup-flow.png)

- **Flujos de verificación**

![Flujo de verificación de WebAuthn](./assets/webauthn-verification-flow.png)
