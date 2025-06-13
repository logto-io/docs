import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { condString } from '@silverhand/essentials';
import type { Props } from '@theme/BlogPostItem';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

import useCategorizedTutorialMetadata, {
  type Metadata,
} from '@site/src/hooks/use-categorized-tutorial-metadata';
import { getConnectorDisplayName, getSdkDisplayName } from '@site/src/utils/tutorial';

import styles from './index.module.scss';
import { isHowToTutorial } from './utils';

// Apply a bottom margin in list view - Charles commented out
// function useContainerClassName() {
//   const {isBlogPostPage} = useBlogPost();
//   return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
// }

const getLogoFilenames = (data?: Metadata) => {
  const lastSegmentInSlug = data?.slug.slice(data.slug.lastIndexOf('/') + 1) ?? '';
  const logoFilename = condString(
    data?.frontMatter.sidebar_custom_props?.logoFilename ?? lastSegmentInSlug + '.svg'
  );
  const darkLogoFilename = condString(
    data?.frontMatter.sidebar_custom_props?.darkLogoFilename ?? logoFilename
  );

  return {
    logoFilename: `/img/logo/${logoFilename}`,
    darkLogoFilename: `/img/logo/${darkLogoFilename}`,
    fallbackLogoFilename: `/img/logo/broken-image.svg`,
  };
};

export default function BlogPostItem({ children, className }: Props): JSX.Element {
  const { isBlogPostPage, frontMatter } = useBlogPost();
  const { allConnectors, allSdks } = useCategorizedTutorialMetadata();

  // The slug should match the "build-x-with-y" format
  const isGeneratedTutorial = isHowToTutorial(frontMatter.slug);
  const isTutorialListView = isGeneratedTutorial && !isBlogPostPage;

  const blogSdkName = condString('sdk' in frontMatter && frontMatter.sdk);
  const blogConnectorName = condString('connector' in frontMatter && frontMatter.connector);

  const connectorMetadata = allConnectors.find(
    (data) => getConnectorDisplayName(data) === blogConnectorName
  );
  const sdkMetadata = allSdks.find((data) => getSdkDisplayName(data) === blogSdkName);

  const sdkLogos = getLogoFilenames(sdkMetadata);
  const connectorLogos = getLogoFilenames(connectorMetadata);

  return (
    <BlogPostItemContainer
      className={clsx(!isBlogPostPage && styles.listViewItemContainer, className)}
    >
      {isTutorialListView && (
        <>
          <div className={styles.logo}>
            <ThemedImage
              alt="Connector logo"
              sources={{
                light: connectorLogos.logoFilename,
                dark: connectorLogos.darkLogoFilename,
              }}
              onError={({ currentTarget }) => {
                // eslint-disable-next-line @silverhand/fp/no-mutation
                currentTarget.src = connectorLogos.fallbackLogoFilename;
              }}
            />
          </div>
          <div className={styles.logo}>
            <ThemedImage
              alt="SDK logo"
              sources={{
                light: sdkLogos.logoFilename,
                dark: sdkLogos.darkLogoFilename,
              }}
              onError={({ currentTarget }) => {
                // eslint-disable-next-line @silverhand/fp/no-mutation
                currentTarget.src = sdkLogos.fallbackLogoFilename;
              }}
            />
          </div>
        </>
      )}
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
