---
sidebar_position: 7.2
---

# 👤 User Profiles

:::info
Coming soon in the next release.
:::

In previous sections, we demonstrated how to manage your users [using Admin Console](/docs/recipes/manage-users/admin-console), or through [management APIs](/docs/recipes/manage-users/management-api). This is a straightforward process for those in the role of administrator. However, it is also important for the regular users to update their profiles on their own.

To enable this, you will need to create your own profile page with the help of the management APIs.

## Get started

1. Make sure your backend service has acquired a pair of API key and API secret through the [Machine to Machine](/docs/recipes/integrate-logto/machine-to-machine) process.
2. In your client application, create a new page for the user's profile. This can be done using a variety of front-end development frameworks, such as React or Vue.
3. Make sure the user authentication is still valid. See [protect your API](/docs/recipes/protect-your-api/) for details
4. On the profile page, create a form for the user to input their profile information, such as their _name, email address_ and _profile picture_, provided by Logto. In addition, you may also want to include your own business model in the form, such as _age, gender, mailing address, payment methods, etc_. These can be fetched from your own service DB, or you can store them previously as `custom_data` in user object, and fetch from there.
5. It is always recommended to fetch the profile data in prior or on page load, and pre-fill the form fields. You can do it by calling:
   - SDK function `getIdTokenClaims` to decode basic user claims cached in ID Token on client side
   - SDK function `fetchUserInfo` to fetch user data from Logto service
   - Management API `/api/users/:userId` to fetch from Logto service
6. Optionally, you can verify the email and password before submitting the entire form. This ensures all emails and phone numbers in your user table are verified, which makes it easier and almost natural to enable passwordless sign-in methods (e.g. email and verification code) in your application. In order to do this, you only have to:
   - Configure an email or phone connector in Admin Console
   - Make sure to add a message template with `Generic` usage type in the config of the above connector
   - Call `/api/verification-code` to send verification code to a given email or phone
   - Call `/api/verification-code/verify` to verify the code against a given email or phone
7. When the user submits the profile form, make an API call to update the user's profile info. This can typically be done using a PATCH request, including the updated profile info in the request body payload.
