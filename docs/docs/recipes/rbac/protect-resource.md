# Protect your resource with RBAC

## Add scopes to access token

When integrating with your application, ensure that you include both `scope` and `resources` in the configuration when importing and initializing the LogtoClient.

```
scopes = "<your-scope>"
resources = "<your-resource>"
```

This will ensure that if a user has access to them, they will be added to the access token. The specific parameters and syntax may vary depending on the language and platform of your app. Refer to the [application integration guide](/docs/recipes/integrate-logto/) for more information on adding scopes and resources.

:::tip
In code, the term "scope" is used to align with OIDC standards. However, in the Admin Console, it is referred to as "permission" for better readability and understanding of the real-world scenario. Both terms refer to the same concept.
:::

## Validate scopes in access token

Don't forget to validate the scopes in the access token. To accomplish that, you can utilize a JWT library to decode the token and check the "scope" claim. Logto issues a standard JWT format authorization token for each authorized API request, which could include a "scope" claim that holds a list of the scopes that the token has been issued for. By checking if the required scope is present in the list, you can confirm the validity of the scope. For more information, please refer to the "[Validate the API request's authorization token](/docs/recipes/protect-your-api/#validate-the-api-requests-authorization-token)" section.
