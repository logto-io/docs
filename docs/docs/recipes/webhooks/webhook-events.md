---
sidebar_position: 3
---

import Availability from '@components/Availability';

# Webhook events

This guide list the different Logto webhook events and explains when each event occurs.

## User interaction hook events

<Availability cloud oss={{ major: 1, minor: 5 }} />

| Event type        | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| PostRegister      | A user successfully creates a new account via the UI interface.             |
| PostSignIn        | A user successfully signs in via the UI interface.                          |
| PostResetPassword | A user’s password is successfully reset through the “Forgot password” flow. |

## Data mutation hook events

<Availability cloud oss={{ major: 1, minor: 17 }} />

### User

| Event type                    | Description                                                                             |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| User.Created                  | A new user account is created.                                                          |
| User.Deleted                  | A user account is deleted.                                                              |
| User.Data.Updated             | User profile data is updated, e.g., email, avatar, custom.data, social identifier, etc. |
| User.SuspensionStatus.Updated | User suspension status is changed (suspended or reactivated).                           |

### Role

| Event type          | Description                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| Role.Created        | A new role is created.                                                           |
| Role.Deleted        | A role is deleted.                                                               |
| Role.Data.Updated   | A role’s data is updated, e.g., role name, description, and default role status. |
| Role.Scopes.Updated | Permissions assigned to a role are added or removed.                             |

### Permission (Scope)

| Event type         | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| Scope.Created      | A new API permission is created.                                   |
| Scope.Deleted      | An API permission is deleted.                                      |
| Scope.Data.Updated | An API permission’s data is updated, e.g., permission description. |

### Organization

| Event type                      | Description                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------------ |
| Organization.Created            | A new organization is created.                                                             |
| Organization.Deleted            | An organization is deleted.                                                                |
| Organization.Data.Updated       | An organization’s data is updated, e.g., organization name, description, custom.data, etc. |
| Organization.Membership.Updated | Members are added or removed from an organization.                                         |

### Organization role

| Event type                      | Description                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------- |
| OrganizationRole.Created        | A new organization role is created.                                                   |
| OrganizationRole.Deleted        | An organization role is deleted                                                       |
| OrganizationRole.Data.Updated   | An organization role’s data is updated, e.g., organization role name and description. |
| OrganizationRole.Scopes.Updated | Permissions assigned to an organization role are added or removed.                    |

### Organization permission (scope)

| Event type                     | Description                                                                             |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| OrganizationScope.Created      | A new organization permission is created.                                               |
| OrganizationScope.Deleted      | A organization permission is deleted.                                                   |
| OrganizationScope.Data.Updated | A organization permission’s data is updated, e.g., organization permission description. |

### Management API triggered events

| API endpoint                                               | Event                                                       |
| ---------------------------------------------------------- | ----------------------------------------------------------- |
| POST /users                                                | User.Created                                                |
| DELETE /users/:userId                                      | User.Deleted                                                |
| PATCH /users/:userId                                       | User.Data.Updated                                           |
| PATCH /users/:userId/custom-data                           | User.Data.Updated                                           |
| PATCH /users/:userId/profile                               | User.Data.Updated                                           |
| PATCH /users/:userId/password                              | User.Data.Updated                                           |
| PATCH /users/:userId/is-suspended                          | User.SuspensionStatus.Updated                               |
| POST /roles                                                | Role.Created, (Role.Scopes.Update)                          |
| DELETE /roles/:id                                          | Role.Deleted                                                |
| PATCH /roles/:id                                           | Role.Data.Updated                                           |
| POST /roles/:id/scopes                                     | Role.Scopes.Updated                                         |
| DELETE /roles/:id/scopes/:scopeId                          | Role.Scopes.Updated                                         |
| POST /resources/:resourceId/scopes                         | Scope.Created                                               |
| DELETE /resources/:resourceId/scopes/:scopeId              | Scope.Deleted                                               |
| PATCH /resources/:resourceId/scopes/:scopeId               | Scope.Data.Updated                                          |
| POST /organizations                                        | Organization.Created                                        |
| DELETE /organizations/:id                                  | Organization.Deleted                                        |
| PATCH /organizations/:id                                   | Organization.Data.Updated                                   |
| PUT /organizations/:id/users                               | Organization.Membership.Updated                             |
| POST /organizations/:id/users                              | Organization.Membership.Updated                             |
| DELETE /organizations/:id/users/:userId                    | Organization.Membership.Updated                             |
| POST /organization-roles                                   | OrganizationRole.Created, (OrganizationRole.Scopes.Updated) |
| DELETE /organization-roles/:id                             | OrganizationRole.Deleted                                    |
| PATCH /organization-roles/:id                              | OrganizationRole.Data.Updated                               |
| POST /organization-scopes                                  | OrganizationScope.Created                                   |
| DELETE /organization-scopes/:id                            | OrganizationScope.Deleted                                   |
| PATCH /organization-scopes/:id                             | OrganizationScope.Data.Updated                              |
| PUT /organization-roles/:id/scopes                         | OrganizationRole.Scopes.Updated                             |
| POST /organization-roles/:id/scopes                        | OrganizationRole.Scopes.Updated                             |
| DELETE /organization-roles/:id/scopes/:organizationScopeId | OrganizationRole.Scopes.Updated                             |

### Interaction API triggered events

| User interaction action  | Event             |
| ------------------------ | ----------------- |
| User email/phone linking | User.Data.Updated |
| User MFAs linking        | User.Data.Updated |
| User social/SSO linking  | User.Data.Updated |
| User password reset      | User.Data.Updated |
| User registration        | User.Created      |
