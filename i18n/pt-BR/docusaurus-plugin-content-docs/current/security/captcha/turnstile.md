---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile é um serviço de CAPTCHA que ajuda a proteger seu site contra spam e abuso. Este guia irá orientá-lo no processo de configuração do Turnstile com o Logto.

## Pré-requisitos {#prerequisites}

- Uma conta Cloudflare

## Configuração {#setup}

1. Acesse o [Painel do Cloudflare](https://dash.cloudflare.com/login) e selecione sua conta.
2. Navegue até **Turnstile** > **Adicionar widget**.
3. Preencha o formulário com os seguintes detalhes:
   - **Nome do widget**: Qualquer nome que você queira dar ao widget
   - **Hostname**: Domínio do endpoint do Logto, por exemplo, https://[tenant-id].logto.app
   - **Modo do widget**: Deixe como padrão

## Obtenha a site key e a secret key {#get-the-site-key-and-secret-key}

1. Navegue até um widget que você acabou de criar e clique em **Gerenciar widget**.
2. Role até o final e copie a **Site key** e a **Secret key**.

## Traga sua UI {#bring-your-ui}

Se você utiliza [Traga sua UI](/customization/bring-your-ui/), o Logto não pode injetar ou executar o Turnstile automaticamente no seu frontend personalizado. Após habilitar o CAPTCHA no Logto Console, sua UI personalizada deve carregar o script do Turnstile, renderizar o widget e enviar o token retornado para a Experience API.

Carregue o script do Turnstile na sua UI personalizada:

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

Adicione um container para o widget:

```html
<div id="turnstile-container"></div>
```

Antes de iniciar a interação, renderize o Turnstile com sua site key e passe o token de callback como `captchaToken` em `PUT /api/experience`:

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.turnstile.render('#turnstile-container', {
    sitekey: '<siteKey>',
    callback: resolve,
    'error-callback': reject,
    size: 'flexible',
  });
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

## Habilite o CAPTCHA {#enable-captcha}

Lembre-se de habilitar a proteção contra bots do CAPTCHA após configurar o provedor de CAPTCHA.

Vá até a página de Segurança, encontre a aba CAPTCHA e ative o botão de alternância "Habilitar CAPTCHA".
