---
sidebar_position: 3
---

# Passkeys (WebAuthn)

[Passkey](https://auth.wiki/passkey) proporciona una alternativa más segura y fácil de usar a las contraseñas tradicionales. Al utilizar criptografía de clave pública, el passkey mejora la seguridad al vincular el dispositivo del usuario, el dominio del servicio y el ID del usuario, contrarrestando efectivamente el phishing y los ataques de contraseñas. Es compatible con varios dispositivos o navegadores y permite a los usuarios emplear características de seguridad biométrica y de hardware para una autenticación conveniente. [WebAuthn](https://auth.wiki/webauthn) proporciona la API para permitir que los sitios web implementen passkey.

Logto ahora admite passkey (Webauthn) para la Autenticación Multifactor (MFA). La función de inicio de sesión con passkey estará disponible próximamente. Por favor, mantente atento a las actualizaciones.

## Conceptos {#concepts}

Los clientes siempre conocen Passkeys más que WebAuthn, entonces, ¿cuál es la relación entre ellos y cómo usarlos? Exploremos estos conceptos:

- **Passkeys**: Un passkey es una credencial basada en FIDO, resistente al phishing, para reemplazar contraseñas. Utiliza criptografía de clave pública asimétrica para mejorar la seguridad. Puede ser tokens de hardware o claves de seguridad, como dispositivos USB o Bluetooth. Dado que "Passkeys" es el método de autenticación mostrado a los usuarios, debe usarse dentro del cliente de tu producto.
- **WebAuthn**: Es una API de JavaScript desarrollada por el W3C y la FIDO Alliance, que potencia la autenticación de aplicaciones web con estándares FIDO2. Passkeys es uno de los métodos de autenticación que WebAuthn admite. En la Consola de Logto, nos referimos profesionalmente a esta integración como "WebAuthn".

WebAuthn proporciona diversos autenticadores para que los usuarios elijan, disponibles en dos tipos para uso local y en la nube:

- **Autenticador de plataforma (Autenticador interno)**: Está vinculado a un único y específico sistema operativo de dispositivo, como una computadora, laptop, teléfono o tableta, con el que el usuario inicia sesión. Funciona exclusivamente en el dispositivo para la autorización utilizando métodos como biometría o un código de acceso del dispositivo, por lo que es una forma rápida de autenticar. Por ejemplo, iCloud Keychain verificado por Touch ID, Face ID o código de acceso del dispositivo en macOS o iOS; Windows Hello verificado por reconocimiento facial, huella digital o PIN amigable.
- **Autenticador itinerante (Autenticador externo, Autenticador multiplataforma)**: Es un dispositivo o aplicación de software separado y portátil, como una clave de seguridad de hardware o un teléfono inteligente. Debe vincular el dispositivo usando USB o mantener NFC o Bluetooth activado. El autenticador itinerante no está limitado a un solo dispositivo o navegador, proporcionando mayor flexibilidad.

Para profundizar en los principios y procesos de WebAuthn, puedes consultar nuestras publicaciones de blog: [WebAuthn and Passkeys 101](https://blog.logto.io/web-authn-and-passkey-101/) y [Things you should know before integrating WebAuthn](https://blog.logto.io/webauthn-base-knowledge/).

## Presta atención a las limitaciones {#pay-attention-to-limitations}

Es esencial estar al tanto de algunas limitaciones al implementar WebAuthn:

1. **Limitación de plataforma y navegador**: Es importante tener en cuenta que Logto actualmente no ofrece soporte para WebAuthn en aplicaciones nativas. Además, la disponibilidad de autenticadores WebAuthn depende de las capacidades del navegador y del dispositivo ([Consulta la lista](https://caniuse.com/?search=webauthn)). Por lo tanto, WebAuthn no siempre es la única opción para implementar la Autenticación Multifactor (MFA), de lo contrario, puedes controlar qué navegadores y dispositivos pueden acceder a tu producto.
2. **Limitación de dominio**: Cambiar el dominio puede obstaculizar la verificación del usuario a través de sus cuentas WebAuthn existentes. Los passkeys están vinculados al dominio específico de la página web actual y no se pueden usar en diferentes dominios.
3. **Limitación de dispositivo**: Perder el dispositivo puede resultar en la pérdida de acceso a sus cuentas, especialmente para aquellos que dependen de los Autenticadores de Plataforma "Este dispositivo". Para mejorar el acceso a la autenticación, es aconsejable proporcionar a los usuarios más de un factor de autenticación.

## Flujos de autenticación {#authentication-flows}

La especificación de Passkeys requiere que los usuarios hagan clic activamente en el botón de la página actual para iniciar el componente de autenticación. Esto significa que tanto en los flujos de configuración como de verificación, los usuarios deben ser redirigidos a la página de inicio para iniciar WebAuthn.

- **Flujos de configuración de passkey**

![Flujo de configuración de WebAuthn](./assets/webauthn-setup-flow.png)

- **Flujos de verificación de passkey**

![Flujo de verificación de WebAuthn](./assets/webauthn-verification-flow.png)

## Recursos relacionados {#related-resources}

<Url href="https://blog.logto.io/webauthn-base-knowledge">
  Cosas que debes saber antes de integrar WebAuthn
</Url>

<Url href="https://blog.logto.io/web-authn-and-passkey-101">
  WebAuthn y Passkey 101
</Url>
