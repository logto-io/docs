---
sidebar_position: 2
---

# 认证 (Authentication) 应用程序 OTP

## 概念 {#concepts}

认证 (Authentication) 应用程序，也称为软件令牌，是最广泛采用的[多因素认证 (MFA)](https://auth.wiki/mfa)方法之一。它生成临时的，[一次性密码 (OTP)](https://auth.wiki/otp)，以增强在线服务认证 (Authentication) 的安全性。与物理硬件令牌不同，软件令牌通常是用户安装在设备上的应用程序或插件，无论是智能手机还是计算机浏览器。软件令牌可以在单个设备上本地运行，也可以根据认证器的功能和用户的个人设置在各种设备之间同步。

流行的软件令牌示例包括 Google Authenticator、Microsoft Authenticator、Duo、1Password、Authy 等。

## 认证 (Authentication) 流程 {#authentication-flows}

### 认证 (Authentication) 应用程序 OTP 设置流程 {#authentication-app-otp-setup-flows}

1. **二维码或密钥**：用户从你的服务中接收二维码或密钥。
2. **添加账户**：用户使用他们的认证 (Authentication) 应用程序扫描二维码或手动输入密钥以添加他们的账户。
3. **动态一次性密码**：认证 (Authentication) 应用程序显示一个六位数的代码，该代码每 1-2 分钟刷新一次，用于添加的账户。
4. **完成多因素认证 (MFA) 设置**：用户在其有效期内将此代码输入到 MFA 设置页面，完成认证 (Authentication) 应用程序 OTP 的 MFA 设置。

![OTP 设置流程](./assets/otp-set-up-flow.png)

### 认证 (Authentication) 应用程序 OTP 验证流程 {#authentication-app-otp-verification-flows}

1. **登录尝试**：在登录期间，用户会被提示进行 MFA。
2. **获取 OTP**：打开他们的认证 (Authentication) 应用程序以获取相应账户的 OTP。
3. **输入 OTP**：用户在其有效期内将应用程序中显示的 OTP 输入到两步验证页面。
4. **认证 (Authentication)**：系统验证 OTP，验证成功后授予访问权限。

![OTP 验证流程](./assets/otp-verification-flow.png)
