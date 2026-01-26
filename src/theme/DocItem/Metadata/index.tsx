import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useLocation } from '@docusaurus/router';
import { PageMetadata } from '@docusaurus/theme-common';

const removeTrailingBackSlashes = (str: string) => str.replace(/\\+$/, '').trim();

export default function DocItemMetadata(): JSX.Element {
  const { metadata, frontMatter, assets } = useDoc();
  const { pathname } = useLocation();
  const generatedOgImage = `/img/og/${pathname.replaceAll('/', '_')}.png`;
  const trimmedDescription = removeTrailingBackSlashes(metadata.description);

  return (
    <PageMetadata
      title={metadata.title}
      description={trimmedDescription}
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image ?? generatedOgImage}
    />
  );
}
