---
sidebar_position: 1
slug: /
---

# 💁 简介

Logto 帮助你在数分钟内构建登录体验与用户身份体系。

核心功能：

- 一个基于 OIDC 的身份服务
- 多平台用户登录/注册体验，支持深色模式并提供相关 SDK（Web，iOS 和 Android）
- 动态短信/邮件验证码登录/注册
- 开箱即用的社交登录集成（GitHub，Google，微信，支付宝等）
- 基于 web 的图形化管理控制台
- 可扩展的多语言支持

“专业”点说，我们叫它「客户身份访问管理（[CIAM](https://en.wikipedia.org/wiki/Customer_identity_access_management)）」或者「客户身份解决方案」。

## 基本概念

在开始之前，让我们先了解一些 Logto 的基本概念。简化起见，我们把 Logto 分为四部分：管理控制台、登录体验、核心服务、SDK。

- 「管理控制台」是一个 web 应用，也是你自定义登录和管理用户的得力助手。
- 「登录体验」是直接面向你的终端用户的图形化界面，包括登录，注册等。
- 「核心服务」是 Logto 的基础，提供了必要的 API 以支持其他模块。
- 「SDK」是你的应用与 Logto 的桥梁。

:::note
**TBD** need a simple infra figure here
:::

:::info
「管理控制台」是自定义与管理「登录体验」、「核心服务」最简单的方式，我们将在教程中全程使用它。
:::
