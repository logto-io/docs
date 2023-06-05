---
sidebar_position: 6
---

# 🚝 Interact with Management API

## What is Logto management API

The Logto Management API is a comprehensive collection of APIs that empower administrators to manage identity-related tasks, enforce security policies, and comply with regulations and standards.

With the Logto management API, you can access Logto's robust backend services, which are highly scalable and can be utilized in a multitude of scenarios. It goes beyond what's possible with the Admin Console's low-code capabilities.

Some frequently used APIs are listed below:

- User
- Application
- Logs
- Roles
- Resources
- Connectors

To learn more about the APIs that are available, please visit https://docs.logto.io/api.

Wondering what you can do with the Logto Management API? Here are a few examples of scenarios that are not possible with the Logto Admin Console but can be achieved through the management API.

## Some typical scenarios

Our management API can be leveraged in several scenarios. For instance,

### Implement user profile on your own

Logto currently does not provide a pre-built UI solution for user profiles. We recognize that user profiles are closely tied to business and product attributes, which raises questions about the value of offering pre-built solutions, particularly from Logto's perspective. While we work on determining the best approach, we suggest using our APIs to create your own solution. For instance, you can utilize our interaction API, profile API, and verification code API to develop a custom solution that meets your needs.

Check out [User Profile](../user-profile/README.md) for more information.

### Advanced user search

You can certainly use Logto's user management feature in the console for some tasks, our management API offers additional functions that support more advanced user search scenarios. Check out [Advanced User Search](../manage-users/advanced-user-search/) for more information.

Our developers have implemented many additional features using our management API. We believe that our API is highly scalable and can support a wide range of your needs. Additionally, we have continued distilling some use cases and incorporated them into our low-code platform to boost productivity and enhance the developer experience.

## How to?

1. Follow the tutorial [Create and integrate the first application](../../tutorials/get-started/create-and-integrate-the-first-app.mdx) to create a Machine to Machine app in Admin Console.
2. Follow the guide [Machine to Machine: Auth with Logto](../integrate-logto/machine-to-machine.mdx) to fetch an Access Token for the API identifier `https://tenantid.logto.app/api` (indicates Management API) and scope `all` (all permissions).
3. Interact with Management API with Bearer authorization using the Access Token.

:::note
Usually the Access Token has a short expiration. If you have a local cache, remember to check and fetch a new Access Token if needed before sending requests.
:::

## Using pagination

Some of the API responses may include many results, the results will be paginated. Logto provides 2 kinds of pagination info.

### Using link headers

A paginated response header will be like:

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

The link header provides the URL for the previous, next, first, and last page of results:

- The URL for the previous page is followed by rel="prev".
- The URL for the next page is followed by rel="next".
- The URL for the last page is followed by rel="last".
- The URL for the first page is followed by rel="first".

### Using total-number header

In addition to the standard link headers, Logto will also add a `Total-Number` header:

```
Total-Number: 216
```

That would be very convenient and useful to show page numbers.

### Changing page number and page size

There are 2 optional query parameters:

- `page`: indicates the page number, starts from 1, the default value is 1.
- `page_size`: indicates the number of items per page, the default value is 20.
