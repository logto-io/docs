---
sidebar_position: 7
---

# 🚝 Interact with Management API

Admin Console is great, but we know it does not always fit the scenario.

For example, we don't enable a normal API to update the current user's profile, because it may cause unexpected results (imagine a user updates his role to "admin"), and things may vary by the actual business.

In this case, you need to use a backend service that directly talks to [Logto Management API](/api), and decide what to expose on demand.

## How to?

1. Follow the tutorial [Create and integrate the first application](/docs/tutorials/get-started/create-and-integrate-the-first-app) to create a Machine to Machine app in Admin Console.
2. Follow the guide [Machine to Machine: Auth with Logto](/docs/recipes/integrate-logto/machine-to-machine) to fetch an Access Token for the API identifier `https://api.logto.io` (indicates Management API).
3. Interact with Management API with Bearer authorization using the Access Token.

:::note
Usually the Access Token has a short expiration. If you have a local cache, remember to check and fetch a new Access Token if needed before sending requests.
:::
