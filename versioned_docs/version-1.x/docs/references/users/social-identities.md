---
sidebar_label: Social identities
sidebar_position: 1
---

# Social identities

_identities_ contains the user info retrieved from social sign-in
(i.e., sign-in with a social connector).
Each user's _identities_ is stored in an individual JSON object.

The user info varies by social identity provider (i.e., social network platform), and it typically includes the following:

- [_target_](../../../docs/references/connectors/README.mdx#target) of the identity provider, such as "facebook", "google", or "wechat"
- User's unique identifier for this provider
- User's name
- User's verified email
- User's avatar

The user's account may be linked to multiple social identity providers via social sign-in;
the corresponding user info retrieved from these providers will be stored in the _identities_ object.

Sample _identities_ from a user who signed in with both WeChat and Facebook:

```json
{
  "facebook": {
    "userId": "5110888888888888",
    "details": {
      "id": "5110888888888888",
      "name": "John Joe",
      "email": "johnjoe@logto.io",
      "avatar": "https://example.com/avatar.png"
    }
  },
  "wechat": {
    "userId": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",
    "details": {
      "id": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",
      "name": "John Joe",
      "avatar": "https://example.com/avatar.png"
    }
  }
}
```

:::info

The _identities_ can NOT be updated using "Admin Console" or "Management API".

Every time the user signs in with a social connector,
their _identities_ will be automatically imported or updated from the identity provider.

:::
