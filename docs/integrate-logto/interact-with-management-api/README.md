---
sidebar_position: 4
---

import logtoManagementApiResourceSrc from './assets/logto-management-api-resource.webp';
import logtoManagementApiDetailsSrc from './assets/logto-management-api-details.webp';

import BasicsAboutAccessTokenRequest from '../../quick-starts/generic/machine-to-machine/fragments/\_basics-about-access-token-request.mdx';
import FetchAccessTokenForLogtoManagementApi from '../../quick-starts/generic/machine-to-machine/fragments/\_fetch-access-token-for-logto-management-api.mdx';
import AccessTokenUsage from '../../quick-starts/generic/machine-to-machine/fragments/\_access-token-usage.mdx';
import AccessLogtoManagementApiUsingAccessToken from '../../quick-starts/generic/machine-to-machine/fragments/\_access-logto-management-api-using-access-token.mdx';
import M2mAccessTokenNote from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-access-token-sub-note.mdx';
import M2mRoleAssignment from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-role-assignment.mdx';

# Interact with Management API

## What is Logto Management API?

The Logto Management API is a comprehensive set of APIs that gives developers full control over their implementation to suit their product needs and tech stack. It is pre-built, listed in the <CloudLink to="/api-resources">Console > API resources > Logto Management API</CloudLink>, and cannot be deleted or modified.

Its identifier is in the pattern of `https://[tenant-id].logto.app/api`

<img alt="Logto Management API Resource" src={logtoManagementApiResourceSrc} />

<img alt="Logto Management API Details" src={logtoManagementApiDetailsSrc} />

With the Logto Management API, you can access Logto's robust backend services, which are highly scalable and can be utilized in a multitude of scenarios. It goes beyond what's possible with the Admin Console's low-code capabilities.

Some frequently used APIs are listed below:

- [User](https://openapi.logto.io/operation/operation-getuser)
- [Application](https://openapi.logto.io/operation/operation-listapplications)
- [Audit logs](https://openapi.logto.io/operation/operation-listlogs)
- [Roles](https://openapi.logto.io/operation/operation-listroles)
- [Resources](https://openapi.logto.io/operation/operation-listresources)
- [Connectors](https://openapi.logto.io/operation/operation-listconnectors)
- [Organizations](https://openapi.logto.io/operation/operation-listorganizations)

To learn more about the APIs that are available, please visit https://openapi.logto.io/.

## How to access Logto Management API

### Create an M2M app

:::note
If you're not familiar with M2M (Machine-to-Machine) authentication flow, we recommend reading [Understanding authentication flow](/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow) first to understand the basic concepts.
:::

Go to <CloudLink to="/applications">Console > Applications</CloudLink>, select the "Machine-to-machine" application type and start the creation process.

<M2mRoleAssignment />

In the role assignment module, you can see all M2M roles are included, and roles indicated by a Logto icon means that these roles include Logto Management API permissions.

Now assign M2M roles include Logto Management API permissions for your M2M app.

### Fetch an access token

#### Basics about access token request

<BasicsAboutAccessTokenRequest />

#### Fetch access token for Logto Management API

<FetchAccessTokenForLogtoManagementApi />

#### Access token response

A successful access response body would be like:

```json
{
  "access_token": "eyJhbG...2g", // Use this token for accessing the Logto Management API
  "expires_in": 3600, // Token expiration in seconds
  "token_type": "Bearer", // Auth type for your request when using the access token
  "scope": "all" // scope `all` for Logto Management API
}
```

<M2mAccessTokenNote />

### Access Logto Management API using access token

<AccessTokenUsage />

<AccessLogtoManagementApiUsingAccessToken />

## Typical scenarios for using Logto Management API

Our developers have implemented many additional features using Logto Management API. We believe that our API is highly scalable and can support a wide range of your needs. Here are a few examples of scenarios that are not possible with the Logto Admin Console but can be achieved through the Logto Management API.

### Implement user profile on your own

Logto currently does not provide a pre-built UI solution for user profiles. We recognize that user profiles are closely tied to business and product attributes. While we work on determining the best approach, we suggest using our APIs to create your own solution. For instance, you can utilize our interaction API, profile API, and verification code API to develop a custom solution that meets your needs.

### Advanced user search

The Logto Admin Console supports basic search and filtering functions. For advanced search options like fuzzy search, exact match, and case sensitivity, check out our [Advanced User Search](/user-management/advanced-user-search) tutorials and guides.

### Implement organization management on your own

If you’re using the [organizations](/organizations) feature to build your multi-tenant app, you might need the Logto Management API for tasks like organization invitations and member management. For your SaaS product, where you have both admins and members in the tenant, the Logto Management API can help you create a custom admin portal tailored to your business needs. Check out [this](/end-user-flows/organization-experience/) for more detail.

## Tips for using Logto Management API

### Managing paginated API responses

Some of the API responses may include many results, the results will be paginated. Logto provides 2 kinds of pagination info.

#### Using link headers

A paginated response header will be like:

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

The link header provides the URL for the previous, next, first, and last page of results:

- The URL for the previous page is followed by rel="prev".
- The URL for the next page is followed by rel="next".
- The URL for the last page is followed by rel="last".
- The URL for the first page is followed by rel="first".

#### Using total-number header

In addition to the standard link headers, Logto will also add a `Total-Number` header:

```
Total-Number: 216
```

That would be very convenient and useful to show page numbers.

#### Changing page number and page size

There are 2 optional query parameters:

- `page`: indicates the page number, starts from 1, the default value is 1.
- `page_size`: indicates the number of items per page, the default value is 20.

### Rate limit

:::note
This is only for Logto Cloud.
:::

To ensure the reliability and security of our services for all users, we employ a general firewall that monitors and manages traffic to our website. While we do not enforce a strict rate limit, we recommend that users limit their activity to approximately 200 requests every 10 seconds to avoid triggering our protective measures.
