---
slug: /security/captcha/cap
sidebar_label: Cap
---

# Cap

[Cap](https://capjs.js.org) é uma alternativa CAPTCHA open-source e auto-hospedada baseada em prova de trabalho, sem quebra-cabeças visuais ou dependências de serviços de terceiros, tornando-o ideal para regiões onde serviços CAPTCHA externos são inacessíveis. Este guia mostra como configurar o Cap com o Logto.

## Pré-requisitos {#prerequisites}

- Uma instância [Cap Standalone](https://capjs.js.org/guide/capd/index.html) publicamente acessível via HTTPS, já que tanto a página de login do navegador quanto o Logto precisam acessá-la.

## Crie uma chave de site {#create-a-site-key}

1. Abra o painel da sua instância Cap Standalone e faça login com sua chave de administrador.
2. Crie uma nova chave de site. Se você restringir origens CORS, adicione o domínio do endpoint do Logto, como `https://[tenant-id].logto.app`.
3. Copie a **Site key** e a **Secret key**. A chave secreta é exibida apenas uma vez.

## Configure o Logto {#configure-logto}

Em **Console > Segurança > CAPTCHA**, escolha **Cap** e preencha os seguintes detalhes:

- **Cap endpoint**: A URL base da sua instância Cap Standalone, por exemplo, `https://cap.example.com`
- **Site key**: A chave de site copiada acima
- **Secret key**: A chave secreta copiada acima

Alternativamente, você pode configurar o Cap através da Management API com `PUT /api/captcha-provider`:

```json
{
  "config": {
    "type": "Cap",
    "endpoint": "https://cap.example.com",
    "siteKey": "<siteKey>",
    "secretKey": "<secretKey>"
  }
}
```

:::note
Use HTTPS para o endpoint do Cap em produção. Navegadores bloqueiam requisições HTTP mistas vindas de uma página de login HTTPS, e HTTP envia a chave secreta sem criptografia.
:::

## Nota de segurança {#security-note}

O desafio de instrumentação do Cap avalia scripts no navegador para detectar bots. Enquanto o Cap estiver habilitado, a página de login integrada do Logto permite a origem do Cap, blob workers, WebAssembly (`'wasm-unsafe-eval'`) e avaliação dinâmica de JavaScript (`'unsafe-eval'`) em sua Content Security Policy.

## Traga sua UI {#bring-your-ui}

Se você usa [Traga sua UI](/customization/bring-your-ui/), o Logto não pode injetar ou executar o Cap automaticamente no seu frontend personalizado. Após habilitar o CAPTCHA no Console do Logto, sua UI personalizada deve carregar `@cap.js/widget`, renderizar o widget e enviar o token resolvido para a Experience API.

Carregue `@cap.js/widget` na sua UI personalizada (ou instale e faça o bundle dele no build do seu frontend):

```html
<script src="https://cdn.jsdelivr.net/npm/@cap.js/widget" async></script>
```

:::note
Se você carregar `@cap.js/widget` de um CDN em vez de fazer o bundle, adicione a origem do CDN (como `https://cdn.jsdelivr.net`) a `scriptSrc` e `connectSrc` em suas [fontes CSP personalizadas](/customization/bring-your-ui/#configure-custom-csp-sources) para que o script do widget e seu solver WebAssembly possam ser carregados.
:::

Adicione o elemento `<cap-widget>` apontando para o endpoint Cap Standalone e a chave de site:

```html
<cap-widget data-cap-api-endpoint="https://cap.example.com/<siteKey>/"></cap-widget>
```

Escute o evento `solve` (`event.detail.token`), envie o token de uso único como `captchaToken` em `PUT /api/experience` e resete o widget com `widget.reset()` após consumi-lo:

```js
await customElements.whenDefined('cap-widget');
const widget = document.querySelector('cap-widget');

const captchaToken =
  widget.token ??
  (await new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('solve', onSolve);
      widget.removeEventListener('error', onError);
    };

    const onSolve = (event) => {
      cleanup();
      resolve(event.detail.token);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail?.message ?? 'Falha na verificação do Cap'));
    };

    widget.addEventListener('solve', onSolve);
    widget.addEventListener('error', onError);
    widget.solve().catch((error) => {
      cleanup();
      reject(error);
    });
  }));

try {
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
} finally {
  // Os tokens do Cap são de uso único; resete o widget após consumir o token.
  widget.reset();
}
```

## Habilite o CAPTCHA {#enable-captcha}

Lembre-se de habilitar a proteção contra bots do CAPTCHA depois de configurar o provedor de CAPTCHA.

Vá até a página de Segurança, encontre a aba CAPTCHA e ative o botão de alternância "Habilitar CAPTCHA".
