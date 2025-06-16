import { type Metadata } from '@site/src/hooks/use-categorized-tutorial-metadata';

export const getSdkDisplayName = (sdk?: Metadata) =>
  String(sdk?.frontMatter.tutorial_name ?? sdk?.frontMatter.sidebar_label ?? '');

export const getConnectorDisplayName = (connector?: Metadata) =>
  String(connector?.frontMatter.tutorial_name ?? connector?.frontMatter.sidebar_label ?? '');

export const getSdkPath = (metadata: Metadata) => {
  const sdkName = String(metadata.frontMatter.tutorial_name ?? '');

  return sdkName
    ? sdkName.replaceAll(' ', '-').replaceAll(/[()]/g, '').replaceAll('.', 'dot').toLowerCase()
    : metadata.slug.split('/').slice(2).join('-');
};

export const getConnectorPath = (metadata: Metadata) => {
  const connectorName = String(
    metadata.frontMatter.tutorial_name ?? metadata.frontMatter.sidebar_label ?? ''
  );

  return connectorName
    .toLowerCase()
    .split(/[^\da-z-]/gi) // Remove non-alphanumeric characters
    .filter(Boolean)
    .join('-');
};
