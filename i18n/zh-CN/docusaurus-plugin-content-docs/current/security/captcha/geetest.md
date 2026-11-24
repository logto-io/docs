---
slug: /security/captcha/geetest
sidebar_label: GeeTest
---

# GeeTest

[GeeTest](https://www.geetest.com) CAPTCHA v4 是一种自适应验证码服务，提供本地化挑战，广泛应用于中国大陆，在全球提供商（如 Google reCAPTCHA）难以访问的地区尤为常见。本指南将带你完成在 Logto 中设置 GeeTest CAPTCHA v4 的流程。

## 前置条件 {#prerequisites}

- 一个已启用 CAPTCHA v4 的 GeeTest 账号。

## 获取 CAPTCHA ID 和 key {#get-the-captcha-id-and-key}

1. 登录 [GeeTest 控制台](https://auth.geetest.com/login)。
2. 创建一个应用并添加一个 **CAPTCHA v4** 事件。
3. 从控制台复制 **CAPTCHA ID** 和 **CAPTCHA key**。

## 配置 Logto {#configure-logto}

1. 进入 **控制台 > 安全 > CAPTCHA**。
2. 选择 **GeeTest** 作为验证码提供商。
3. 输入你从 GeeTest 控制台复制的 **CAPTCHA ID** 和 **CAPTCHA key**，并保存更改。

或者，你也可以通过 Management API（`PUT /api/captcha-provider`）进行 GeeTest 配置，将 `type` 设置为 `"Geetest"`，`siteKey` 设置为你的 CAPTCHA ID，`secretKey` 设置为你的 CAPTCHA key：

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
Logto 内置的登录体验 (Sign-in experience) 会以 `bind` 模式初始化 GeeTest v4，自动映射 UI 语言，并在 GeeTest 启用时更新 Content Security Policy 头以允许 GeeTest SDK、API 和静态资源的来源。
:::

## 自定义你的 UI {#bring-your-ui}

如果你使用 [自定义你的 UI](/customization/bring-your-ui/)，Logto 无法自动在你的自定义前端注入或运行 GeeTest。在 Logto 控制台启用 CAPTCHA 后，你的自定义 UI 必须加载 GeeTest v4 脚本，运行挑战，并将序列化后的验证结果作为 `captchaToken` 发送给 Experience API。

在你的自定义 UI 中加载 GeeTest v4 脚本：

```html
<script src="https://static.geetest.com/v4/gt4.js" async defer></script>
```

在交互开始前，使用 `window.initGeetest4` 以 `bind` 模式初始化 GeeTest v4，调用 `captcha.showCaptcha()`，并在 `onSuccess` 内通过 `captcha.getValidate()` 读取验证结果。由于 `captcha.getValidate()` 返回四个字段（`lot_number`、`captcha_output`、`pass_token` 和 `gen_time`），请使用 `JSON.stringify(validate)` 序列化该对象，并作为 `captchaToken` 传递给 `PUT /api/experience`：

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
            reject(new Error('Missing GeeTest validation result'));
            return;
          }

          // `validate` 包含: lot_number, captcha_output, pass_token, gen_time
          resolve(JSON.stringify(validate));
        })
        .onError(reject)
        .onClose(() => {
          reject(new Error('GeeTest CAPTCHA was closed'));
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

## 启用 CAPTCHA {#enable-captcha}

在你设置好验证码提供商后，记得启用 CAPTCHA 机器人防护。

进入安全页面，找到 CAPTCHA 标签页，打开“启用 CAPTCHA”的开关按钮。
