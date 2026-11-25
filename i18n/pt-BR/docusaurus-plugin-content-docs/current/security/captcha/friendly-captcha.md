---
slug: /security/captcha/friendly-captcha
sidebar_label: Friendly Captcha
---

# Friendly Captcha

[Friendly Captcha](https://friendlycaptcha.com) v2 é um serviço de CAPTCHA com foco em privacidade e compatível com GDPR, baseado em prova de trabalho sem quebra-cabeças visuais. Este guia mostra como configurar o Friendly Captcha com o Logto.

## Pré-requisitos {#prerequisites}

- Uma conta no Friendly Captcha

## Obtenha o sitekey e a chave de API {#get-the-sitekey-and-api-key}

1. Faça login no [painel do Friendly Captcha](https://app.friendlycaptcha.com) e vá para **Applications**.
2. Clique em **+ New Application** e selecione **v2**.
3. Se você restringir origens permitidas no aplicativo, adicione o domínio do endpoint do seu Logto (por exemplo, `https://[tenant-id].logto.app`).
4. Mantenha o endpoint global (`global.frcapi.com`) ativado, a menos que você restrinja o sitekey ao [endpoint da UE](https://developer.friendlycaptcha.com/docs/v2/guides/eu-endpoint) (`eu.frcapi.com`, disponível nos planos Advanced e Enterprise), e copie o **Sitekey** (começa com `FC`).
5. Abra **API Keys** no painel, crie uma nova **API key** e copie-a.

## Configure o Logto {#configure-logto}

1. Vá para **Console > Security > CAPTCHA**, selecione **Friendly Captcha** e insira o **Site key** e a **API key**. Mantenha o **API endpoint** como **Global**, ou escolha **EU** se seu sitekey estiver restrito ao endpoint da UE.
2. Alternativamente, configure via Management API (`PUT /api/captcha-provider`). `apiEndpoint` é opcional e aceita `"global"` (padrão) ou `"eu"`:

```json
{
  "config": {
    "type": "FriendlyCaptcha",
    "siteKey": "<siteKey>",
    "secretKey": "<apiKey>",
    "apiEndpoint": "global"
  }
}
```

## Traga sua própria interface (UI) {#bring-your-ui}

Se você usa [Traga sua própria interface (Bring your UI)](/customization/bring-your-ui/), o Logto não pode injetar ou executar o Friendly Captcha automaticamente no seu frontend personalizado. Após ativar o CAPTCHA no Logto Console, sua interface personalizada deve carregar o `@friendlycaptcha/sdk`, montar o widget, aguardar o token de conclusão e enviá-lo para a Experience API.

Instale o SDK do Friendly Captcha v2 no seu projeto de interface personalizada:

```bash
npm install @friendlycaptcha/sdk
```

Adicione um container para o widget:

```html
<div id="friendly-captcha-container"></div>
```

Monte o widget com `FriendlyCaptchaSDK`, aguarde `frc:widget.complete` para ler `event.detail.response`, passe esse token de uso único como `captchaToken` em `PUT /api/experience` e faça o reset via `widget.reset()` após consumir o token para que novas tentativas obtenham um token novo:

```js
import { FriendlyCaptchaSDK } from '@friendlycaptcha/sdk';

// Comentário: Inicialize o SDK e selecione o elemento do container
const sdk = new FriendlyCaptchaSDK();
const element = document.querySelector('#friendly-captcha-container');

const widget = sdk.createWidget({
  element,
  sitekey: '<siteKey>',
  // Defina como 'eu' se você escolheu o endpoint da UE na configuração do Logto.
  apiEndpoint: 'global',
});

const getCaptchaToken = () => {
  if (widget.getState() === 'completed') {
    return Promise.resolve(widget.getResponse());
  }

  return new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('frc:widget.complete', onComplete);
      widget.removeEventListener('frc:widget.error', onError);
    };

    const onComplete = (event) => {
      cleanup();
      resolve(event.detail.response);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail.error.detail || event.detail.error.code));
    };

    widget.addEventListener('frc:widget.complete', onComplete);
    widget.addEventListener('frc:widget.error', onError);

    if (['init', 'reset', 'unactivated'].includes(widget.getState())) {
      widget.start();
    }
  });
};

// Antes de iniciar a interação, obtenha o token de uso único:
const captchaToken = await getCaptchaToken();

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
  // Tokens são de uso único; faça o reset do widget para que novas tentativas obtenham um token novo.
  widget.reset();
}
```

## Ative o CAPTCHA {#enable-captcha}

Lembre-se de ativar a proteção contra bots do CAPTCHA depois de configurar o provedor de CAPTCHA.

Vá para a página de Segurança, encontre a aba CAPTCHA e ative o botão de alternância "Enable CAPTCHA".
