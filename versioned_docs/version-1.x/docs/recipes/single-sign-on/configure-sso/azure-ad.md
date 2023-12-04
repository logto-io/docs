---
sidebar_label: Microsoft Entra ID
sidebar_position: 3
---

# Configure Microsoft Entra ID (Azure AD) SSO

With minimal configuration efforts, this connector allows integration with Microsoft Entra ID (formerly Azure AD) for enterprise SSO.

## Step 1: Create an Azure AD SSO application

Initiate the Azure AD SSO integration by creating an SSO application on the Azure AD side.

1. Go to the [Azure portal](https://portal.azure.com/) and sign in as an administrator.
2. Select `Microsoft Entra ID` service.
3. Navigate to the `Enterprise applications` using the side menu. Click `New application`, and select `Create your own application`.

![Azure AD create application.webp](./assets/azure_ad_create_application.webp)

1. Enter the application name and select `Integrate any other application you don't find in the gallery (Non-gallery)`.
2. Select `Setup single sign-on` > `SAML`.

![Azure AD set up SSO.webp](./assets/azure_ad_set_up_single_sign_on.webp)

1. Follow the instructions, as the first step, you will need to fill in the basic SAML configuration using the following information provided by Logto.

![Azure AD SP config](./assets/azure_ad_sp_config.webp)

- **Audience URI(SP Entity ID)**: It represents as a globally unique identifier for your Logto service, functioning as the EntityId for SP during authentication requests to the IdP. This identifier is pivotal for the secure exchange of SAML assertions and other authentication-related data between the IdP and Logto.
- **ACS URL**: The Assertion Consumer Service (ACS) URL is the location where the SAML assertion is sent with a POST request. This URL is used by the IdP to send the SAML assertion to Logto. It acts as a callback URL where Logto expects to receive and consume the SAML response containing the user's identity information.

Click] `Save` to continue.

## Step 2: Configure SAML SSO at Logto

To make the SAML SSO integration work, you will need to provide the IdP metadata back to Logto. Let's switch back to the Logto side, and navigate to the `Connection` tab of your Azure AD SSO connector.

Logto provides three different ways to configure the IdP metadata. The easiest way is by providing the `metadata URL` of the Azure AD SSO application.

Copy the `App Federation Metadata Url` from your Azure AD SSO application's `SAML Certificates section` and paste it into the `Metadata URL` field in Logto.

![Azure AD Metadata URL.webp](./assets/azure_ad_metadata_url.webp)

Logto will fetch the metadata from the URL and configure the SAML SSO integration automatically.

## Step 3: Configure user attributes mapping

Logto provides a flexible way to map the user attributes returned from IdP to the user attributes in Logto. Logto will sync the following user attributes from IdP by default:

- id: The unique identifier of the user. Logto will read the `nameID` claim from the SAML response as the user SSO identity id.
- email: The email address of the user. Logto will read the `email` claim from the SAML response as the user primary email by default.
- name: The name of the user.

You may manage the user attributes mapping logic either on the Azure AD side or Logto side.

1. Map the AzureAD user attributes to Logto user attributes on Logto side.

   Visit the `Attributes & Claims` section of your Azure AD SSO application.

   Copy the following attribute names (with namespace prefix) and paste them into the corresponding fields in Logto.

   - `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
   - `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` (Recommendation: update this attribute value map to `user.displayname` for better user experience)a

![Azure AD default attribute mapping.webp](./assets/azure_ad_default_attribute_mapping.webp)

1. Map the AzureAD user attributes to Logto user attributes at the AzureAD side.

   Visit the `Attributes & Claims` section of your Azure AD SSO application.

   Click on `Edit`, and update the `Additional claims` fields based on the Logto user attributes settings:

   - update the claim name value based on the Logto user attributes settings.
   - remove the namespace prefix.
   - click `Save` to continue.

   Should end up with the following settings:

![Azure AD_Logto attribute mapping.webp](./assets/azure_ad_logto_attribute_mapping.webp)

You may also specify additional user attributes on the Azure AD side. Logto will keep a record of the original user attributes returned from IdP under the user's `sso_identity` field.

## Step 4: Assign users to the Azure AD SSO application

Visit the `Users and groups` section of your Azure AD SSO application. Click on `Add user/group` to assign users to the Azure AD SSO application. Only users assigned to your Azure AD SSO application will be able to authenticate through the Azure AD SSO connector.

![Azure AD assign users.webp](./assets/azure_ad_assign_users.webp)

## Step 5: Set email domains and enable the SSO connector

Provide the `email domains` of your organization at Logto's connector `SSO experience` tab. This will enable the SSO connector as an authentication method for those users.

Users with email addresses in the specified domains will be redirected to use the SAML SSO connector as their only authentication method.

Please check Azure AD's official [documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso) for more details about the Azure AD SSO integration.
