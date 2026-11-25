---
slug: /security/captcha/friendly-captcha
sidebar_label: Friendly Captcha
---

# Friendly Captcha

[Friendly Captcha](https://friendlycaptcha.com) v2 是一款以隐私为先、符合 GDPR 的 CAPTCHA 服务，基于工作量证明，无需视觉谜题。本指南将带你完成在 Logto 中设置 Friendly Captcha 的流程。

## 前置条件 {#prerequisites}

- 一个 Friendly Captcha 账户

## 获取 sitekey 和 API key {#get-the-sitekey-and-api-key}

1. 登录 [Friendly Captcha 控制台](https://app.friendlycaptcha.com)，进入 **Applications**。
2. 点击 **+ New Application** 并选择 **v2**。
3. 如果你对应用限制了允许的来源，请添加你的 Logto 端点域名（例如 `https://[tenant-id].logto.app`）。
4. 保持全局端点（`global.frcapi.com`）启用，除非你将 sitekey 限制在 [欧盟端点](https://developer.friendlycaptcha.com/docs/v2/guides/eu-endpoint)（`eu.frcapi.com`，需高级或企业版），然后复制 **Sitekey**（以 `FC` 开头）。
5. 在控制台打开 **API Keys**，创建一个新的 **API key** 并复制。

## 配置 Logto {#configure-logto}

1. 前往 **Console > Security > CAPTCHA**，选择 **Friendly Captcha**，输入 **Site key** 和 **API key**。保持 **API endpoint** 为 **Global**，如果你的 sitekey 限制在欧盟端点，则选择 **EU**。
2. 或者，你也可以通过 Management API（`PUT /api/captcha-provider`）进行配置。`apiEndpoint` 是可选项，接受 `"global"`（默认）或 `"eu"`：

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

## 自定义你的界面 {#bring-your-ui}

如果你使用 [自定义你的界面](/customization/bring-your-ui/)，Logto 无法自动在你的自定义前端注入或运行 Friendly Captcha。在 Logto Console 启用 CAPTCHA 后，你的自定义界面需要加载 `@friendlycaptcha/sdk`，挂载小部件，等待完成令牌，并将其发送到体验 (Experience) API。

在你的自定义 UI 项目中安装 Friendly Captcha v2 SDK：

```bash
npm install @friendlycaptcha/sdk
```

为小部件添加一个容器：

```html
<div id="friendly-captcha-container"></div>
```

使用 `FriendlyCaptchaSDK` 挂载小部件，监听 `frc:widget.complete` 事件读取 `event.detail.response`，将该一次性令牌作为 `captchaToken` 传递给 `PUT /api/experience`，并在令牌使用后通过 `widget.reset()` 重置小部件，以便重试时获取新的令牌：

```js
import { FriendlyCaptchaSDK } from '@friendlycaptcha/sdk';

const sdk = new FriendlyCaptchaSDK();
const element = document.querySelector('#friendly-captcha-container');

const widget = sdk.createWidget({
  element,
  sitekey: '<siteKey>',
  // 如果你在 Logto 选择了欧盟 API 端点，请设置为 'eu'。
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

// 在交互开始前，获取一次性令牌：
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
  // 令牌为一次性；重置小部件以便重试时获取新令牌。
  widget.reset();
}
```

## 启用 CAPTCHA {#enable-captcha}

在你设置好 CAPTCHA 提供方后，记得启用 CAPTCHA 机器人防护。

前往安全页面，找到 CAPTCHA 标签页，打开“启用 CAPTCHA”的开关按钮。
