---
slug: /security/captcha/geetest
sidebar_label: GeeTest
---

# GeeTest

[GeeTest](https://www.geetest.com) CAPTCHA v4 é um serviço de CAPTCHA adaptativo com desafios localizados, amplamente utilizado na China continental, onde provedores globais como o Google reCAPTCHA podem ser difíceis de acessar. Este guia irá orientá-lo no processo de configuração do GeeTest CAPTCHA v4 com o Logto.

## Pré-requisitos {#prerequisites}

- Uma conta GeeTest com o CAPTCHA v4 habilitado.

## Obtenha o CAPTCHA ID e a chave {#get-the-captcha-id-and-key}

1. Faça login no [painel do GeeTest](https://auth.geetest.com/login).
2. Crie um aplicativo e um evento **CAPTCHA v4**.
3. Copie o **CAPTCHA ID** e a **CAPTCHA key** do painel.

## Configure o Logto {#configure-logto}

1. Vá para **Console > Segurança > CAPTCHA**.
2. Escolha **GeeTest** como o provedor de CAPTCHA.
3. Insira o **CAPTCHA ID** e a **CAPTCHA key** que você copiou do painel do GeeTest e salve suas alterações.

Alternativamente, você pode configurar o GeeTest via Management API (`PUT /api/captcha-provider`) com `type` definido como `"Geetest"`, `siteKey` definido como seu CAPTCHA ID e `secretKey` definido como sua CAPTCHA key:

```json
{
  "config": {
    "type": "Geetest",
    "siteKey": "<captchaId>",
    "secretKey": "<captchaKey>"
  }
}
```

:::note
A experiência de login integrada do Logto inicializa o GeeTest v4 no modo `bind`, mapeia automaticamente o idioma da interface e atualiza os cabeçalhos de Content Security Policy para permitir as origens do SDK, API e estáticos do GeeTest enquanto o GeeTest estiver habilitado.
:::

## Traga sua própria interface {#bring-your-ui}

Se você usar [Traga sua própria interface](/customization/bring-your-ui/), o Logto não pode injetar ou executar o GeeTest automaticamente no seu frontend personalizado. Após habilitar o CAPTCHA no Console do Logto, sua interface personalizada deve carregar o script do GeeTest v4, executar o desafio e enviar o resultado da validação serializado como `captchaToken` para a Experience API.

Carregue o script do GeeTest v4 na sua interface personalizada:

```html
<script src="https://static.geetest.com/v4/gt4.js" async defer></script>
```

Antes de iniciar a interação, inicialize o GeeTest v4 no modo `bind` com `window.initGeetest4`, chame `captcha.showCaptcha()`, e leia o resultado da validação de `captcha.getValidate()` dentro de `onSuccess`. Como `captcha.getValidate()` retorna quatro campos (`lot_number`, `captcha_output`, `pass_token` e `gen_time`), serialize o objeto com `JSON.stringify(validate)` e passe como `captchaToken` em `PUT /api/experience`:

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.initGeetest4(
    {
      captchaId: '<captchaId>',
      product: 'bind',
      onError: reject,
    },
    (captcha) => {
      captcha
        .onReady(() => {
          captcha.showCaptcha();
        })
        .onSuccess(() => {
          const validate = captcha.getValidate();

          if (!validate) {
            reject(new Error('Resultado de validação do GeeTest ausente'));
            return;
          }

          // `validate` contém: lot_number, captcha_output, pass_token, gen_time
          resolve(JSON.stringify(validate));
        })
        .onError(reject)
        .onClose(() => {
          reject(new Error('O GeeTest CAPTCHA foi fechado'));
        });
    }
  );
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

## Ative o CAPTCHA {#enable-captcha}

Lembre-se de ativar a proteção contra bots do CAPTCHA depois de configurar o provedor de CAPTCHA.

Vá para a página de Segurança, encontre a guia CAPTCHA e ative o botão de alternância "Ativar CAPTCHA".
