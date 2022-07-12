---
sidebar_position: 1
slug: /
---

# 💁 Introduction

Logto helps you build the sign-in experience and user identity within minutes.

Main features:

- An OIDC-based identity service
- Multi-platform user sign-in/up experience with dark mode and SDKs (Web, iOS, and Android)
- Sign-in/up with dynamic SMS/Email passcode
- Out-of-box social sign-in integration (GitHub, Google, WeChat, Alipay, etc.)
- A web UI to control all above (Admin Console)
- Extendable multi-language support

Boringly, we call it "[customer identity access management](https://en.wikipedia.org/wiki/Customer_identity_access_management)" (CIAM) or "customer identity solution."

## Basic concepts

Before we start, it'll be good to know how Logto works. To simplify, we divide Logto into four parts: Admin Console, Sign-in Experience, Core Service, and SDKs.

- **Admin Console** is a web app that will be your friend for customizing sign in and managing users.
- **Sign-in Experience** is the UI that directly faces your end-users, including signing in, creating an account, etc.
- **Core Service** is the foundation of Logto, which provides essential APIs to support everything else.
- **SDKs** are the bridges between your application and Logto.

:::note
**TBD** need a simple infra figure here
:::

:::info
Admin Console is the easiest way to customize and manage Sign-in Experience and Core Service, and we'll use it across the tutorial.
:::

![Basic concepts](./assets/basic-concepts.png)
