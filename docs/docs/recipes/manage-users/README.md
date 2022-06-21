---
sidebar_position: 6
---

# 🧑‍🚀 Manage users

## You don't need a user table in the database

Before taking Logto as your identity solution, you may think about how to organize users and related info.
Traditionally, developers create a user table in a database containing the user info, then create a many-to-one relation in other tables, with a `user_id` column pointing to the user table.

Taking Google as an example for other identity providers, you may create a column named `google_id` to associate the users who "Sign in with Google".
For Logto, you may also intend to create a column `logto_id`, but it is unnecessary.
Logto is more than an identity provider; it is a solution that can take charge of all user info.

**Logto best practice** — Forget the user table, and store your user info in Logto:

- Create a `user_id` column in other tables, and save Logto's `user.id`.
  See [Identify a user](#identify-a-user) for details.
- Call Logto's Management API for CRUD: create, read, update, delete user info, and so on.
  See [Users API](https://docs.logto.io/api/#tag/Users) for details.
- Save any additional user info to custom data.
  See [Update a user](#update-a-user) for details.

By doing so, Logto is now playing your "user table" role.

## Add a user

## Identify a user

TODO: `user.id`

## View a user's profile

TODO:

- Name
- Avatar
- Custom data
- Social connectors

## View a user's activities

TODO: User logs

## Update a user

TODO:

- Name
- Avatar
- Custom data
- Remove a social connection/connector

## Reset a user's password

TODO

## Delete a user

:::danger
This will delete all of the user's data.
:::

TODO
