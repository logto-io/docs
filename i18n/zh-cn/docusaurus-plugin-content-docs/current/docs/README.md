---
sidebar_position: 1
slug: /
---

# 💁 简介

🤘 Logto 帮助你快速聚焦于用户登录后的一切。

核心功能：

- 一个基于 OIDC 的身份服务
- 多平台用户登录/注册体验，支持暗黑模式并提供相关 SDK（Web，iOS 和 Android）
- 动态短信/邮件验证码登录/注册
- 开箱即用的社交登录集成（GitHub，Google，微信，支付宝等）
- 一个基于 web 的图形化管理应用（管理面板）
- 可扩展的多语言支持

“专业”点说，我们叫它「客户身份访问管理（[CIAM](https://en.wikipedia.org/wiki/Customer_identity_access_management)）」或者「客户身份解决方案」。

## 安装

### Docker Compose

TBD

### 一行命令

#### 前置条件

- [Node.js](https://nodejs.org/) `^16.13.0`
- [PostgreSQL](https://postgresql.org/) `^14.0`

更高的版本通常可以工作，但不打包票。

虽然不是强制要求，但我们推荐给 Logto 提供一个专属的空数据库。

#### 下载并开始

在你的终端中输入如下命令：

```bash
node -e "$(printf "%s" "$(curl -fsSL https://raw.githubusercontent.com/logto-io/logto/master/install.js)")"
```

这个脚本将会下载 Logto，并在你执行的位置创建一个名为 `logto` 的文件夹。在回答完一些[简单的问题](./references/core/configuration.md#questions)后，你将会看到类似如下的信息：

```text
App is running at http://localhost:3001

Visit http://localhost:3001/welcome to continue your Logto journey.
```

前往 <a target="_blank" href="http://localhost:3001/welcome">http://localhost:3001/welcome</a> 以继续你的 Logto 之旅。玩得开心！

## 配置

Logto 使用环境变量进行配置，并支持 `.env` 文件。使用细节以及完整的变量列表见[配置](./references/core/configuration.md)页面。
