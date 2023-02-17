---
slug: do-you-need-to-build-auth
authors: gao
tags: [auth, dev, authentication, authorization]
---

# Do you need to build your own auth for apps?

:::note Prologue
Although article is inspired from personal dev experience and I tried my best to keep things objective, it's still non-negligible that I'm one of the creators of Logto (an auth product).

I would like to point out this first for a better reading experience.
:::

I’ve seen a lot of developers asking questions like “Should I build my own auth for my app?”. While the answer cannot be a simple "Yes" or "No", I’d like to write an article to breakdown the implementation and demonstrate the pros and cons to help you decide.

<!--truncate-->

> **TL;DR** If you're still learning, auth will be a good challenge. If you want full control, it's worth building your own auth system. Otherwise, it's necessary to find an existing solution that fits your needs.

## Intro

As a developer, I have built many applications during my career. Regardless of the programming language, there is a common foundation I always need to construct: user auth.

It was a negligible part since everything was straightforward going back to 20 years ago:

- Implement a registration and sign-in system with username and password.
- Create a mechanism to maintain a user's session.
- About security? MD5 is the answer.

That’s it. Then I could focus on “the real business”. Didn't hear about MD5? You missed out on the "good times" of software development. Nowadays, developers face more challenges when building sign-in/up.

It sounds alarmist, but let me go through with an example.

## Example: An online bookstore

Let’s say you are trying to build an online bookstore with an API service and a web frontend app.

First, the scope of “auth” should be defined. Auth can be explained as authentication and authorization, and they have totally different definitions and use cases:

:::note 🤔 About Auth
- Authentication (AuthN) answers the question “Which identity do you own?”
- Authorization (AuthZ) answers the question “What can you do?”
:::

I wrote an article [CIAM 101: Authentication, Identity, SSO](../2022-11-28-ciam-101-authn-identity-sso/index.mdx) to discuss these concepts in detail.

### Choose authentication methods

Let’s start with “authentication”, which is user sign-in in our example. Besides the username-and-password method, here are some trending methods people are adopting for a better user conversion and security:

- Passwordless, i.e. dynamic verification code (via email or sms)
- Social sign-in (Google, Facebook, etc.)

The choice of method depends on the business decision, while we can take a look on the tech effort:

- For passwordless, you need to find a vendor to send verification codes via email or sms; then integrate with your API service (new APIs may needed).
- For social sign-in, you must adhere to the integration guidelines of the social identity provider(s) you wish to use. Additionally, you must create a mapping between your bookstore's user IDs and the identity provider's.
  - For example, when a user signs in with a Gmail account `foo@gmail.com`, you can link this email address to the user `foo` in the bookstore. This process helps you to build a unified identity system and allows the user to modify or unlink their social identity in the future.

### Design and implement sign-in experience

After you decide authentication methods, a graceful and smooth sign-in experience for your end-users is the next target. The conversion here is fundamental but crucial to the business since it's a natural way to leave the persisted customer data.

When I was working for Airbnb, there was a whole team dedicated to optimize the sign-in experience for multiple platforms. They conducted numerous A/B tests to determine which combination had the highest conversion rate.

It’s not practical to do so when a business is getting started. But we still need to try our best to make every piece right. Which platforms would you like to run the bookstore? You may start with mobile, web, or both. The exact design will depend on the authentication methods you choose:

- Username and password: The easiest one, just several input boxes and buttons.
- Passwordless: Enter phone / email, then send and verify a dynamic code.
- Social sign-in: Read the docs from the chosen social identity provider, follow the visual guideline, handle the redirect logic, and finally link the social identity with the bookstore identity.

More things to consider to make it better:

- Do you need to combine the sign-in and registration process for a specific method?
- Do you need a “forgot password” flow to allow customers to reset their passwords independently?

If you opt for native development, the workload will almost double for one additional platform.

### Security and token exchange

Security can be a hidden iceberg. It’ll be great if you are familiar with OpenID Connect or OAuth 2.0, since they are widely used and battle-tested. OpenID Connect is relatively new but is designed for “user authentication”, which is a great fit for an online bookstore.

Without delving into the details of the standards, there are still some things to consider:

- Which encryption method should be used for passwords?
- What is the process for standard authentication and authorization?
- How does token exchange work (Access Token, Refresh Token, ID Token, etc.)?
- How can signing keys be used in tokens and how can the signature be validated to protect resources?
- How can client and server attacks be prevented?

Finally, you can land a good sign-in experience and deliver it to your customers.

### Authorization model

As a bookstore, you need to separate resources for customers and sellers. For example, customers can browse all books, while sellers can manage their on-sale books. It's OK to start with simple if-else checks; however, as the business grows, you may need to leverage a more flexible model such as Role-based Access Control (RBAC) or Attribute-based Access Control (ABAC).

I also wrote an article [CIAM 102: Authorization & Role-based Access Control](../2023-02-05-ciam-102-authz-and-rbac/index.md) to demonstrate basic authorization concepts and the RBAC model.

## Make the decision

You can see auth is not an “all or nothing” problem, since it involves multiple technical components and you or your team may have different tech expertise in these areas. It's important to break it down into smaller parts to gain a better understanding of the status quo.

To make the decision, I'll ask myself the following questions:

- How urgent is the project?
- How much effort do I expect to put into auth versus the business?
- What’s the priority of user experience, security, and maintainability?
- Which part(s) do I need full control of? How familiar should I become with them?
- If I go with some frameworks / solutions, are they good enough for customization or extension?
- If the business grows, will I need to introduce a new authentication model?
- If I find a suitable vendor, is it safe enough to use? Do I need a withdrawal plan if anything happens to the vendor?

:::info
On the other hand, if you're still learning or honing your programming skills, auth can be a great stepping stone on the path to becoming a full-stack developer. It covers almost all components needed for an app.
:::

With the questions in mind, I discovered two facts:

- Crafting a reliable authentication system is highly complex.
- Existing vendors cannot meet all the necessary criteria.

So I decided to start a dedicated project (Logto) for auth, and embrace the open-source community from day one.

Hope this article helps.
