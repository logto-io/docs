---
sidebar_label: OIDC
sidebar_position: 2
---

# Configure OIDC SSO

With minimal configuration efforts, this connector allows integration with any OIDC-based Identity Provider (IdP).

## Step 1: Create an OIDC application on your IdP

Initiate the OIDC SSO integration by creating an application on the IdP side. You will need to provide the following configurations from the Logto server.

- **Callback URI**: The Logto Callback URI, also known as the Redirect URI or Reply URL, is a specific endpoint or URL that the IdP uses to redirect the user's browser after successful authentication. After a user successfully authenticates with the IdP, the IdP redirects the user's browser back to this designated URI along with an authorization code. Logto will complete the authentication process based on authorization code received from this URI.

Fill in the Logto Callback URI in your IdP OIDC application settings form and continue to create the application. (Most of the OIDC IdPs provide a wide range of application types to choose from. To create a web-based SSO connector on Logto, please choose the `Web Application` type.)

## Step 2: Configure OIDC SSO on Logto

After successfully creating an OIDC application on the IdP side, you will need to provide the IdP configurations back to Logto. Navigate to the `Connection` tab, and fill in the following configurations:

- **Client ID**: A unique identifier assigned to your OIDC application by the IdP. This identifier is used by Logto to identify and authenticate the application during the OIDC flow.
- **Client Secret**: A confidential secret shared between Logto and the IdP. This secret is used to authenticate the OIDC application and secure the communication between Logto and the IdP.
- **Issuer**: The issuer URL, a unique identifier for the IdP, specifying the location where the OIDC identity provider can be found. It is a crucial part of the OIDC configuration as it helps Logto discover the necessary endpoints.
  To make the configuration process easier. Logto will automatically fetch the required OIDC endpoints and configurations. This is done by utilizing the issuer you provided and making a call to the IdP's OIDC discover endpoints. It is imperative to ensure that the issuer endpoint is valid and accurately configured to enable Logto to retrieve the required information correctly.
  After a successful fetch request, you should be able to see the parsed IdP configurations under the issuers section.
- **Scope**: A space-separated list of strings defining the desired permissions or access levels requested by Logto during the OIDC authentication process. The scope parameter allows you to specify what information and access Logto is requesting from the IdP.
  The scope parameter is optional. Regardless of the custom scope settings, Logto will always send the `openid`, `profile` and `email` scopes to the IdP.
  This is to ensure that Logto can retrieve the user's identity information and email address properly from the IdP. You may add additional scopes to the scope parameter to request for more information from the IdP.

## Step 3: Set email domains and enable the SSO connector

Provide the `email domains` of your organization on Logto’s connector `SSO experience` tab. This will enable the SSO connector as an authentication method for those users.

Users with email addresses in the specified domains will be redirected to use your SSO connector as their only authentication method.
