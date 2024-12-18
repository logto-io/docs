---
sidebar_position: 3
---

# Passkeys (WebAuthn)

[Passkey](https://auth.wiki/passkey) 提供了一种比传统密码更安全且用户友好的替代方案。通过使用公钥加密，passkey 增强了安全性，将用户设备、服务域和用户 ID 关联起来，有效抵御网络钓鱼和密码攻击。兼容各种设备或浏览器，并允许用户使用生物识别和硬件安全功能进行便捷的认证 (Authentication)。[WebAuthn](https://auth.wiki/webauthn) 提供了 API，允许网站实现 passkey。

Logto 现在支持用于多因素认证 (MFA) 的 passkey (WebAuthn)。Passkey 登录功能即将推出。请关注更新。

## 概念 {#concepts}

客户通常了解 Passkeys 而不是 WebAuthn，那么它们之间有什么关系，以及如何使用它们？让我们来探讨这些概念：

- **Passkeys**：Passkey 是一种基于 FIDO 的抗网络钓鱼凭证，用于替代密码。它利用非对称公钥加密来增强安全性。它可以是硬件令牌或安全密钥，例如 USB 或蓝牙设备。由于“Passkeys”是向用户展示的认证 (Authentication) 方法，因此应在你的产品客户端中使用。
- **WebAuthn**：它是由 W3C 和 FIDO 联盟开发的 JavaScript API，支持使用 FIDO2 标准进行 Web 应用程序认证 (Authentication)。Passkeys 是 WebAuthn 支持的认证 (Authentication) 方法之一。在 Logto 控制台中，我们专业地将此集成称为“WebAuthn”。

WebAuthn 为用户提供了多种认证器可供选择，分为本地和云使用的两种类型：

- **平台认证器（内部认证器）**：它绑定到单一且特定的设备操作系统，如用户登录的计算机、笔记本电脑、手机或平板电脑。它仅在设备上使用生物识别或设备密码等方法进行授权，因此是一种快速的认证 (Authentication) 方式。例如，iCloud 钥匙串通过 macOS 或 iOS 上的 Touch ID、Face ID 或设备密码验证；Windows Hello 通过面部识别、指纹或友好 PIN 验证。
- **漫游认证器（外部认证器，跨平台认证器）**：它是一个独立的便携设备或软件应用程序，如硬件安全密钥或智能手机。它应通过 USB 连接设备或保持 NFC 或蓝牙开启。漫游认证器不限于单一设备或浏览器，提供更大的灵活性。

要深入了解 WebAuthn 的原理和流程，你可以参考我们的博客文章：[WebAuthn 和 Passkeys 101](https://blog.logto.io/web-authn-and-passkey-101/) 和 [在集成 WebAuthn 之前你应该知道的事情](https://blog.logto.io/webauthn-base-knowledge/)。

## 注意限制 {#pay-attention-to-limitations}

在实施 WebAuthn 时，了解一些限制是很重要的：

1. **平台和浏览器限制**：需要注意的是，Logto 目前不提供对本机应用程序的 WebAuthn 支持。此外，WebAuthn 认证器的可用性取决于浏览器和设备的能力（[查看列表](https://caniuse.com/?search=webauthn)）。因此，WebAuthn 并不是实现多因素认证 (MFA) 的唯一选项，否则你可以控制哪些浏览器和设备可以访问你的产品。
2. **域限制**：更改域可能会阻碍用户通过其现有的 WebAuthn 帐户进行验证。Passkeys 绑定到当前网页的特定域，不能跨不同域使用。
3. **设备限制**：丢失设备可能导致无法访问其帐户，特别是对于依赖“此设备”平台认证器的用户。为了增强认证 (Authentication) 访问，建议为用户提供多种认证 (Authentication) 因素。

## 认证 (Authentication) 流程 {#authentication-flows}

Passkeys 规范要求用户在当前页面主动点击按钮以启动认证 (Authentication) 组件。这意味着在设置和验证流程中，用户应被重定向到登录页面以启动 WebAuthn。

- **Passkey 设置流程**

![WebAuthn 设置流程](./assets/webauthn-setup-flow.png)

- **Passkey 验证流程**

![WebAuthn 验证流程](./assets/webauthn-verification-flow.png)

## 相关资源 {#related-resources}

<Url href="https://blog.logto.io/webauthn-base-knowledge">
  在集成 WebAuthn 之前你应该知道的事情
</Url>

<Url href="https://blog.logto.io/web-authn-and-passkey-101">
  WebAuthn 和 Passkey 101
</Url>
