import { type DocMetadata } from '@docusaurus/plugin-content-docs';

export const getSdkDisplayName = (sdk?: DocMetadata) =>
  String(sdk?.frontMatter.tutorial_name ?? sdk?.frontMatter.sidebar_label ?? '');

export const getConnectorDisplayName = (connector?: DocMetadata) =>
  String(connector?.frontMatter.tutorial_name ?? connector?.frontMatter.sidebar_label ?? '');

export const getSdkPath = (metadata: DocMetadata) => {
  const sdkName = String(metadata.frontMatter.tutorial_name ?? '');

  return sdkName
    ? sdkName.replaceAll(' ', '-').replaceAll(/[()]/g, '').replaceAll('.', 'dot').toLowerCase()
    : metadata.slug.split('/').slice(2).join('-');
};

export const getConnectorPath = (metadata: DocMetadata) => {
  const connectorName = String(
    metadata.frontMatter.tutorial_name ?? metadata.frontMatter.sidebar_label ?? ''
  );

  return connectorName
    .toLowerCase()
    .split(/[^\da-z-]/gi) // Remove non-alphanumeric characters
    .filter(Boolean)
    .join('-');
};
