import type { SidebarConfig } from '@docusaurus/plugin-content-docs/lib/sidebars/types.js';

const docsSidebar: SidebarConfig = [
  {
    type: 'category',
    label: 'Get started',
    collapsed: false,
    link: { type: 'doc', id: 'get-started/README' },
    items: [
      'get-started/create-logto-tenant',
      'get-started/invite-team-members',
      'get-started/b2c-architecture',
      'get-started/b2b-architecture',
    ],
    customProps: { id: 'get-started' },
  },
  {
    type: 'category',
    label: 'Integrate Logto',
    items: [
      'integrate-logto/first-party-apps',
      'integrate-logto/third-party-apps',
      'integrate-logto/management-api',
    ],
    customProps: { id: 'integrate-logto' },
  },
  {
    type: 'category',
    label: 'Connectors',
    link: { type: 'doc', id: 'connectors/README' },
    items: [
      {
        type: 'category',
        label: 'Email connectors',
        link: { type: 'doc', id: 'connectors/email' },
        items: [
          {
            type: 'link',
            label: 'SendGrid Email',
            href: 'pathname:///integrations/sendgrid-email',
          },
          {
            type: 'link',
            label: 'Mailgun',
            href: 'pathname:///integrations/mailgun',
          },
          {
            type: 'link',
            label: 'AWS Direct Mail',
            href: 'pathname:///integrations/aws-ses',
          },
          {
            type: 'link',
            label: 'Aliyun Direct Mail',
            href: 'pathname:///integrations/aliyun-dm',
          },
          {
            type: 'link',
            label: 'SMTP',
            href: 'pathname:///integrations/smtp',
          },
        ],
      },
      {
        type: 'category',
        label: 'SMS connectors',
        link: { type: 'doc', id: 'connectors/sms' },
        items: [
          {
            type: 'link',
            label: 'SendGrid Email',
            href: 'pathname:///integrations/sendgrid-email',
          },
        ],
      },
    ],
    customProps: { id: 'connectors' },
  },
  // { 'user-flows': [], customProps: { id: 'user-flows' }, },
  // {
  //   type: 'category',
  //   label: 'User flows',
  //   link: { type: 'doc', id: 'user-flows/README' },
  //   items: [],
  //   customProps: { id: 'user-flows' },
  // },
  // { customization: [], customProps: { id: 'customization' }, },
  // { authorization: [], customProps: { id: 'authorization' }, },
  // { customization: [], customProps: { id: 'customization' }, },
  // { developer: [], customProps: { id: 'developer' }, },
  // { elements: [], customProps: { id: 'elements' }, },
  {
    type: 'category',
    label: 'Security',
    items: [
      { type: 'link', label: 'Trust and security', href: 'https://logto.io/trust-and-security' },
    ],
    customProps: { id: 'security' },
  },
  // { 'open-source': [], customProps: { id: 'open-source' }, },
  {
    type: 'category',
    label: 'Concepts',
    items: ['concepts/authn-vs-authz', 'concepts/sign-in-experience'],
    customProps: { id: 'concepts' },
  },
];

export default docsSidebar;
