import SignOutIcon from '@site/src/assets/sign-out.svg';
import SecurityIcon from '@site/src/assets/security.svg';
import LockIcon from '@site/src/assets/lock.svg';
import KeyIcon from '@site/src/assets/key.svg';
import BlockUserIcon from '@site/src/assets/block-user.svg';
import CheckboxIcon from '@site/src/assets/checkbox.svg';
import DdosIcon from '@site/src/assets/ddos.svg';
import HideIcon from '@site/src/assets/hide.svg';
import LockoutIcon from '@site/src/assets/lockout.svg';
import SendEmailIcon from '@site/src/assets/send-mail.svg';
import SuspendIcon from '@site/src/assets/suspend.svg';
import WindowsIcon from '@site/src/assets/windows.svg';

# Security

Modern authentication security battles threats ranging from phishing, credential stuffing, brute-force attacks, ransomware, DDoS, to AI-driven attacks. Protecting user identities is critical to safeguarding brand trust and compliance.

Logto delivers robust secure access management designed to counter these risks head-on. By prioritizing proactive threat prevention and resilience, we ensure your systems stay shielded without compromising usability. With Logto, security isn’t an afterthought—it’s the foundation, empowering businesses to thrive in an era where threats evolve, but defenses evolve faster.

## Set up advanced security protection {#set-up-advanced-security-protection}

<DocCardList
items={[
{
type: 'link',
label: 'Password policy',
href: '/security/password-policy',
description:
'Enhance password requirements to defend against credential stuffing and weak password attacks.',
customProps: {
icon: <KeyIcon />,
},
},
{
type: 'link',
label: 'CAPTCHA',
href: '/security/captcha',
description:
'Add CAPTCHA (e.g., Google reCAPTCHA, Cloudflare Turnstile) to your sign-in experience to prevent automated bot attacks.',
customProps: {
icon: <CheckboxIcon />,
},
},
{
type: 'link',
label: 'Identifier lockout',
href: '/security/identifier-lockout',
description: 'Temporarily lock an identifier after multiple failed authentication attempts to prevent brute force access.',
customProps: {
icon: <LockIcon />,
},
},
{
type: 'link',
label: 'Hide account existence',
href: '/end-user-flows/sign-up-and-sign-in',
description:
'Hide account status to block account enumeration attack and avoid disclosing sensitive account status info.',
customProps: {
icon: <HideIcon />,
},
},
{
type: 'link',
label: 'Blocklist (Coming soon)',
href: '/security',
description:
'Take control of your user base by blocking disposable or unwanted email domains or addresses.',
customProps: {
icon: <BlockUserIcon />,
},
},
]}
/>

## Discover more ways to protect your apps {#discover-more-ways-to-protect-your-apps}

<DocCardList
items={[
{
type: 'link',
label: 'Multi-Factor Authentication (MFA)',
href: '/end-user-flows/mfa',
description:
'Adds an extra layer of protection to the sign-in process with support for authenticator app OTPs, passkeys (WebAuthn), and backup codes.',
customProps: {
icon: <LockIcon />,
},
},
{
type: 'link',
label: 'Step-up authentication',
href: '/end-user-flows/security-verification',
description:
'Allow the app to prompt step-up authentication when users access sensitive information or perform high-risk actions.',
customProps: {
icon: <SecurityIcon />,
},
},
{
type: 'link',
label: 'Suspend users',
href: '/user-management/manage-users#suspend-user',
description:
'Temporarily disable user accounts to block access without deleting data or user records.',
customProps: {
icon: <SuspendIcon />,
},
},
{
type: 'link',
label: 'Rotate signing keys',
href: '/developers/signing-keys',
description:
'Periodically rotate signing keys to protect against key leakage and token forgery.',
customProps: {
icon: <SendEmailIcon />,
},
},
{
type: 'link',
label: 'OIDC back-channel logout',
href: '/end-user-flows/sign-out#federated-sign-out-back-channel-logout',
description:
'Enable centralized logout to reduce the risk of session hijacking and unauthorized access.',
customProps: {
icon: <SuspendIcon />,
},
},
{
type: 'link',
label: 'Invitation-only sign up',
href: '/end-user-flows',
description:
'Restrict sign-ups to invited users only, using email magic links for secure onboarding.',
customProps: {
icon: <SendEmailIcon />,
},
},
]}
/>
