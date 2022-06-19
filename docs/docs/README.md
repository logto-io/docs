---
sidebar_position: 1
slug: /
---

# 💁 Introduction

🤘 Logto helps you quickly focus on everything after signing in.

Main features:

- An OIDC-based identity service
- All-platform user sign-in/up experience with dark mode and SDKs (Web, iOS, and Android)
- Sign-in/up with dynamic SMS/Email passcode
- Out-of-box social sign-in integration (GitHub, Google, WeChat, Alipay, etc.)
- A web UI to control all above (Admin Console)
- Extendable multi-language support

Boringly, we call it "[customer identity access management](https://en.wikipedia.org/wiki/Customer_identity_access_management)" (CIAM) or "customer identity solution."

## Installation

### Docker Compose

TBD

### One-liner command

#### Prerequisites

- [Node.js](https://nodejs.org/) `^16.13.0`
- [PostgreSQL](https://postgresql.org/) `^14.0`

Higher versions usually work but are not guaranteed.

We recommend using a new empty database which is dedicated for Logto, while it's not a hard requirement.

#### Download and start

In your terminal:

```bash
node -e "$(printf "%s" "$(curl -fsSL https://raw.githubusercontent.com/logto-io/logto/master/install.js)")"
```

The script will download Logto and create a directory `logto` in the location you ran it. After answering [several simple questions](./references/core/configuration.md#questions), you will see the message like:

```text
App is running at http://localhost:3001

Visit http://localhost:3001/welcome to continue your Logto journey.
```

Heading to <a target="_blank" href="http://localhost:3001/welcome">http://localhost:3001/welcome</a> to continue your Logto journey. Enjoy!

## Configuration

Logto uses environment variables for configuration, along with `.env` file support. See [Configuration](./references/core/configuration.md) for detailed usage and full variable list.
