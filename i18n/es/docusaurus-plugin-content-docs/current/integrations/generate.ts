/*
This script generates connector guides in the `docs/integrations` directory.

For example:

```ts
const connectors = [{ name: 'GitHub', ... }, { name: 'Google', ... }, { name: 'Twilio SMS', ... }];
```

will generate the following connector guides:

- `docs/integrations/social/github/README.mdx`
- `docs/integrations/social/google/README.mdx`
- `docs/integrations/sms/twilio-sms/README.mdx`
...

The content is pulled from the `connector-${id}/README.md` in the corresponding connector GitHub repo,
using the `docusaurus-plugin-remote-content` plugin.
*/

type Connector = {
  id: string;
  name: string;
  description: string;
  category: 'social' | 'sms' | 'email';
  logoFilename?: string;
};

/**
 * Connectors metadata for the guide generation.
 *
 * @type Array<{ id: string; name: string; description: string; category: 'social' | 'sms' | 'email'; logoFilename?: string; }>
 */
const connectors: Connector[] = [
  {
    id: 'google',
    name: 'Google',
    description: 'Google is a principal search engine technology and email service provider.',
    category: 'social',
  },
  {
    id: 'apple',
    name: 'Apple',
    description: 'Apple is a multinational high-end provider of hardware and software.',
    category: 'social',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Facebook is a worldwide social media platform with billions of users.',
    category: 'social',
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'GitHub is an online community for software development and version control.',
    category: 'social',
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Discord is the easiest way to talk over voice, video, and text.',
    category: 'social',
  },
  {
    id: 'wechat-native',
    name: 'WeChat (Native)',
    description: 'WeChat is a cross-platform instant messaging app.',
    category: 'social',
    logoFilename: 'wechat.svg',
  },
  {
    id: 'wechat-web',
    name: 'WeChat (Web)',
    description: 'WeChat is a cross-platform instant messaging app.',
    category: 'social',
    logoFilename: 'wechat.svg',
  },
  {
    id: 'alipay-native',
    name: 'Alipay (Native)',
    description: 'Alipay is a third-party mobile and online payment platform.',
    category: 'social',
    logoFilename: 'alipay.svg',
  },
  {
    id: 'alipay-web',
    name: 'Alipay (Web)',
    description: 'Alipay is a third-party mobile and online payment platform.',
    category: 'social',
    logoFilename: 'alipay.svg',
  },
  {
    id: 'kakao',
    name: 'Kakao',
    description: 'Kakao is a famous social network service provider in South Korea.',
    category: 'social',
  },
  {
    id: 'naver',
    name: 'Naver',
    description: 'Naver is the most leading internet service provider in South Korea.',
    category: 'social',
  },
  {
    id: 'azuread',
    name: 'Microsoft',
    description: 'Microsoft Azure Active Directory is a leading AD provider.',
    category: 'social',
  },
  {
    id: 'feishu-web',
    name: 'Feishu',
    description: 'Feishu is an enterprise collaboration platform developed by ByteDance.',
    category: 'social',
    logoFilename: 'feishu.svg',
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    description:
      'Hugging Face is a machine learning (ML) and data science platform and community that helps users build, deploy and train machine learning models.',
    category: 'social',
  },
  {
    id: 'wecom',
    name: 'WeCom',
    description:
      'WeCom is a cross-platform instant messaging app for team. It is the enterprise version of WeChat.',
    category: 'social',
  },
  {
    id: 'oauth2',
    name: 'OAuth 2.0 (Social)',
    description:
      'The OAuth 2.0 authorization framework enables a third-party application to obtain limited access to an HTTP service.',
    category: 'social',
    logoFilename: 'oauth.svg',
  },
  {
    id: 'oidc',
    name: 'OIDC (Social)',
    description: 'OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol.',
    category: 'social',
  },
  {
    id: 'aws-ses',
    name: 'AWS Direct Mail',
    description:
      'Amazon SES is a cloud email service provider that can integrate into any application for bulk email sending.',
    category: 'email',
    logoFilename: 'aws.svg',
  },
  {
    id: 'sendgrid-email',
    name: 'SendGrid Email',
    description: 'SendGrid is a communication platform for transactional and marketing email.',
    category: 'email',
    logoFilename: 'sendgrid.svg',
  },
  {
    id: 'aliyun-dm',
    name: 'Aliyun Direct Mail',
    description: 'Aliyun provides cloud computing services to online businesses.',
    category: 'email',
    logoFilename: 'aliyun.svg',
  },
  {
    id: 'mailgun',
    name: 'Mailgun',
    description:
      'Mailgun is an email delivery service for sending, receiving, and tracking emails.',
    category: 'email',
  },
  {
    id: 'smtp',
    name: 'SMTP',
    description:
      'The SMTP is an internet standard communication protocol for electronic mail transmission.',
    category: 'email',
  },
  {
    id: 'twilio-sms',
    name: 'Twilio SMS',
    description: 'Twilio provides programmable communication tools for phone calls and messages.',
    category: 'sms',
    logoFilename: 'twilio.svg',
  },
  {
    id: 'aliyun-sms',
    name: 'Aliyun Short Message',
    description: 'Aliyun provides cloud computing services to online businesses.',
    category: 'sms',
    logoFilename: 'aliyun.svg',
  },
  {
    id: 'tencent-sms',
    name: 'Tencent Short Message',
    description: 'Tencent provides cloud computing services to online businesses.',
    category: 'sms',
    logoFilename: 'tencent.svg',
  },
  {
    id: 'smsaero',
    name: 'SMS Aero',
    description:
      'SMS Aero offers users to use SMS-mailing in 5 minutes without viewing the contract. Developers are offered a convenient API with accessible classes and 24x7 chat support.',
    category: 'sms',
  },
];

/**
 * Generates the `docusaurus-plugin-remote-content` plugin configs for the connector guides, which allows
 * the plugin to pull the README.md content from the connector GitHub repo and generates a MDX guide.
 */
const generatePullRemotePluginConfigs = ({
  id,
  name,
  description,
  category,
  logoFilename,
}: Connector) => [
  'docusaurus-plugin-remote-content',
  {
    id,
    name: 'connector-readme-' + id,
    performCleanup: false,
    noRuntimeDownloads: true,
    sourceBaseUrl: `https://raw.githubusercontent.com/logto-io/logto/master/packages/connectors/connector-${id}/`,
    outDir: `docs/integrations/${category}/${id}`,
    documents: ['README.md'],
    modifyContent: (filename: string, content: string) => ({
      filename: 'README.mdx',
      content: `---
slug: /integrations/${id}
sidebar_label: ${name}
sidebar_custom_props:
  description: ${description}${logoFilename ? `\n  logoFilename: '${logoFilename}'` : ''}
---

import GuideTip from '../../fragments/_guide-tip.mdx';

<GuideTip />

${content
  .replaceAll('<', '\\<')
  .replaceAll('**{', '**\\{')
  .replaceAll(/\/package(?:s\/con{2}ector){2}-[^/]+\/docs/g, './assets')}
`,
    }),
  },
];

/**
 * This function will be called by the `docusaurus.config.js` when building the Docs site.
 */
export const generateConnectorGuides = () => {
  return connectors.map((connector) => generatePullRemotePluginConfigs(connector));
};
