---
sidebar_label: SAML
sidebar_position: 1
---

# Configure SAML SSO

With minimal configuration efforts, this connector allows integration with any SAML-based Identity Provider (IdP).

## Step 1: Create a SAML SSO application on your IdP

Initiate the SAML SSO integration by creating an application on the IdP side. Obtain the following configurations from Logto, representing your Service Provider (SP):

- **Audience URI(SP Entity ID)**: It represents as a globally unique identifier for your Logto service, functioning as the EntityId for SP during authentication requests to the IdP. This identifier is pivotal for the secure exchange of SAML assertions and other authentication-related data between the IdP and Logto.
- **ACS URL**: The Assertion Consumer Service (ACS) URL is the location where the SAML assertion is sent with a POST request. This URL is used by the IdP to send the SAML assertion to Logto. It acts as a callback URL where Logto expects to receive and consume the SAML response containing the user's identity information.

Fill in the Audience URI and ACS URL configurations in your IdP SAML application and continue to retrieve the following configurations from your IdP.

## Step 2: Configure SAML SSO on Logto

To make the SAML SSO integration work, you will need to provide the IdP metadata to Logto. The IdP metadata is an XML document that contains all the information required for Logto to establish the trust with the IdP.

Navigate to the `Connection` tab. Logto provides three different ways to configure the IdP metadata:

1. **Metadata URL**: Provide the URL of the IdP metadata XML document. Logto will fetch the metadata from the URL and configure the SAML SSO integration automatically.
2. **Upload Metadata**: Upload the IdP metadata XML document. Logto will parse the XML document and configure the SAML SSO integration automatically.
3. **Manual Configuration**: Manually configure the IdP metadata.

- IdP entity ID: The Entity ID of the IdP.
- Single sign-on URL: The URL of the IdP Single Sign-On Service.
- Signing certificate: The x509 certificate is used to verify the signature of the SAML response from the IdP.

With either of the above configurations, Logto will parse the IdP metadata and configure the SAML SSO integration accordingly.

## Step 3: Configure user attributes mapping

The user attributes returned from IdP may vary depending on the IdP configuration. Logto provides a flexible way to map the user attributes returned from IdP to the user attributes in Logto. You can configure the user attributes mapping in the SAML SSO integration experience tab.

- id: The unique identifier of the user. Logto will read the `nameId` claim from the SAML response as the user SSO identity id.
- email: The email address of the user.
- name: The name of the user.

## Step4: Set email domains and enable the SSO connector

Provide the `email domains` of your organization in Logto’s connector `SSO experience` tab. This will enable the SSO connector as an authentication method for those users.

Users with email addresses in the specified domains will be redirected to use the SAML SSO connector as their only authentication method.
