# 👨‍👩‍👧‍👦 Users

The _users_ are the main entities of the identity service.
We will describe the user-related concepts and details in the following.

## Profile

Each user has a profile containing the user information.

A user profile consists of 3 sections:

- **Basic data**: contains basic info in pre-defined attributes, such as user id, username, email, phone number, and when the user last signed in.
- **Custom data**: contains additional info in customizable attributes, such as user-preferred color and language.
- **Identities**: contains the user info retrieved from social sign-in, such as Facebook, GitHub, and WeChat.

### All attributes

The following attributes (except password-related) are visible on the user profile.

:::note The meanings of some following table columns

- **Unique**: Ensures the _uniqueness_ of the values entered into an attribute of a DB table.
- **Required**: Ensures that the values entered an attribute of a DB table can NOT be NULL.
- **Editable**: Admin users can only edit the _editable_ attributes using Admin Console or Management API.
- **Searchable**: Admin users can only search the keyword on the _searchable_ attributes using Admin Console or Management API.

:::

<br/>

| Name                        | Type         | Description                                   | Unique | Required | Editable | Searchable |
| --------------------------- | ------------ | --------------------------------------------- | ------ | -------- | -------- | ---------- |
| id                          | text         | Unique identifier, auto-generate on creating  | ✅     | ✅       | ❌       | ❌         |
| username                    | text         | Username for sign-in                          | ✅     | ❌       | ❌       | ✅         |
| primary_email               | text         | Primary email                                 | ✅     | ❌       | ✅       | ✅         |
| primary_phone               | text         | Primary phone number                          | ✅     | ❌       | ✅       | ✅         |
| name                        | text         | Full name                                     | ❌     | ❌       | ✅       | ✅         |
| avatar                      | text         | URL pointing to user's avatar image           | ❌     | ❌       | ✅       | ❌         |
| role_names                  | string array | List of roles                                 | ❌     | ✅       | ❌       | ❌         |
| [identities](#identities)   | object       | User info retrieved from social sign-in       | ❌     | ✅       | ❌       | ❌         |
| [custom_data](#custom-data) | object       | Additional info in customizable attributes    | ❌     | ✅       | ✅       | ❌         |
| application_id              | text         | Application ID that the user first registered | ❌     | ✅       | ❌       | ❌         |
| last_sign_in_at             | date time    | Timestamp when the user signed in last time   | ❌     | ✅       | ❌       | ❌         |

Two other password-related attributes are invisible on the user profile.

| Name                       | Type | Description                | Unique | Required | Editable | Searchable |
| -------------------------- | ---- | -------------------------- | ------ | -------- | -------- | ---------- |
| password_encrypted         | text | Encrypted password         | ❌     | ❌       | ✅       | ❌         |
| password_encryption_method | text | Password encryption method | ❌     | ❌       | ✅       | ❌         |

Logto uses [Argon2](https://en.wikipedia.org/wiki/Argon2)
hashing algorithm and its implementation [node-argon2](https://github.com/ranisalt/node-argon2)
to secure the user password by default.

---

**Sample a user profile** from a user that signed in with Facebook:

```json
{
  "id": "iHXPuSb9eMzt",
  "username": null,
  "primaryEmail": null,
  "primaryPhone": null,
  "name": "John Joe",
  "avatar": "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_ohc=znOHiwVT5CwAX8wkzRF&_nc_ht=scontent-hkg4-1.xx&edm=AP4hL3IEAAAA&oh=00_AT_qaCclh_9rMWCfRcpyQzpP1Ep7oKHE7wKwkGfbWjYdeg&oe=62D83899",
  "roleNames": ["admin"],
  "customData": {
    "preferences": {
      "language": "en",
      "color": "#f236c9"
    }
  },
  "identities": {
    "facebook": {
      "userId": "106077000000000",
      "details": {
        "id": "106077000000000",
        "name": "John Joe",
        "email": "johnjoe@logto.io",
        "avatar": "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_ohc=znOHiwVT5CwAX8wkzRF&_nc_ht=scontent-hkg4-1.xx&edm=AP4hL3IEAAAA&oh=00_AT_qaCclh_9rMWCfRcpyQzpP1Ep7oKHE7wKwkGfbWjYdeg&oe=62D83899"
      }
    }
  },
  "lastSignInAt": 1655799453171,
  "applicationId": "admin_console"
}
```

### Basic data

### Custom data

### Identities
