---
sidebar_label: Microsoft Entra ID (OIDC)
sidebar_position: 3
---

import createApplication from './assets/entra_id_oidc_create_application.webp';
import configApplication from './assets/entra_id_oidc_config_application.webp';
import applicationDetails from './assets/entra_id_oidc_application_details.webp';
import createSecret from './assets/entra_id_oidc_create_secret.webp';
import endpoints from './assets/entra_id_oidc_endpoints.webp';

# Configure Microsoft Entra ID (Azure AD) OIDC SSO

## Step 1: Create an Microsoft EntraID OIDC application

1. Go to the [Microsoft Entra admin center](https://entra.microsoft.com/) and sign in as an administrator.

2. Browse to Identity > Applications > App registrations.

<center>
  <img src={createApplication} alt="Create Application" />
</center>

3. Select `New registration`.

4. Enter the application name and select the appropriate account type for your application.

5. Select `Web` as the application platform.

6. Copy and paste the `redirect URI` from Logto's SSO settings page. The `redirect URI` is the URL where the user is redirected after they have authenticated with Microsoft Entra ID.

<center>
  <img src={configApplication} alt="Configure Application" />
</center>

6. Click `Register` to create the application.

## Step 2: Configure Microsoft Entra ID OIDC SSO at Logto

After successfully creating an Microsoft Entra OIDC application, you will need to provide the IdP configurations back to Logto. Navigate to the `Connection` tab at Logto console, and fill in the following configurations:

1. **Client ID**: A unique identifier assigned to your OIDC application by the Microsoft Entra. This identifier is used by Logto to identify and authenticate the application during the OIDC flow. You can find it in the application overview page as `Application (client) ID`.

<center>
  <img src={applicationDetails} alt="Application Details" />
</center>

2. **Client Secret**: Create a new client secret and copy the value to Logto. This secret is used to authenticate the OIDC application and secure the communication between Logto and the IdP.

<center>
  <img src={createSecret} alt="Create Secret" />
</center>

3. **Issuer**: The issuer URL, a unique identifier for the IdP, specifying the location where the OIDC identity provider can be found. It is a crucial part of the OIDC configuration as it helps Logto discover the necessary endpoints.

   Instead of manually provide all these OIDC endpoints, Logto fetch all the required configurations and IdP endpoints automatically. This is done by utilizing the issuer url you provided and making a call to the IdP's discover endpoint.

   To get the issuer URL, you can find it in the `Endpoints` section of the application overview page.

   Locate the `OpenID Connect metadata document` endpoint and copy the URL **WITHOUT** the trailing path `.well-known/openid-configuration`. This is because Logto will automatically append the `.well-known/openid-configuration` to the issuer URL when fetching the OIDC configurations.

<center>
  <img src={endpoints} alt="Endpoints" />
</center>

4. **Scope**: A space-separated list of strings defining the desired permissions or access levels requested by Logto during the OIDC authentication process. The scope parameter allows you to specify what information and access Logto is requesting from the IdP.

The scope parameter is optional. Regardless of the custom scope settings, Logto will always send the `openid`, `profile` and `email` scopes to the IdP.

Click `Save` to finish the configuration process

## Step 3: Set email domains and enable the SSO connector

Provide the email `domains` of your organization on the connector `experience` tab. This will enabled the SSO connector as an authentication method for those users.

Users with email addresses in the specified domains will be exclusively limited to use your SSO connector as their only authentication method.
