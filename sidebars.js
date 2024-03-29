/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'link',
      label: 'Tutorials',
      href: '#',
      className: 'sidebar-section',
    },
    'docs/README',
    { type: 'autogenerated', dirName: 'docs/tutorials' },
    {
      type: 'link',
      label: 'Recipes',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'docs/recipes' },
    {
      type: 'link',
      label: 'References',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'docs/references' },
  ],
  sdkSidebar: [
    'sdk/README',
    {
      type: 'link',
      label: 'Single page app',
      href: '#',
      className: 'sidebar-section',
      customProps: {
        description: 'An app that runs in a web browser and dynamically updates data in place.',
      },
    },
    { type: 'autogenerated', dirName: 'sdk/spa' },
    {
      type: 'link',
      label: 'Web app',
      href: '#',
      className: 'sidebar-section',
      customProps: {
        description: 'An app that renders and updates pages by the web server alone. E.g., server-side rending.',
      },
    },
    { type: 'autogenerated', dirName: 'sdk/web' },
    {
      type: 'link',
      label: 'Native app',
      href: '#',
      className: 'sidebar-section',
      customProps: {
        description: 'An app that runs in a native environment.',
      },
    },
    { type: 'autogenerated', dirName: 'sdk/native' },
    {
      type: 'link',
      label: 'Machine-to-machine',
      href: '#',
      className: 'sidebar-section',
      customProps: {
        description: 'An app (usually without UI) that directly talks to resources.',
      },
    },
    { type: 'autogenerated', dirName: 'sdk/machine-to-machine' },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
