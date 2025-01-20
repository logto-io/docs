import { type DocMetadata } from '@docusaurus/plugin-content-docs';
import { useMemo } from 'react';

import metadata from '@site/tutorial/build-with-logto/metadata.json';

type DocGroups = {
  sdks: DocMetadata[];
  socialConnectors: DocMetadata[];
  emailConnectors: DocMetadata[];
  smsConnectors: DocMetadata[];
};

/**
 * Matches the `app_type` frontmatter value of an SDK doc in quick-starts.
 */
export enum DocAppType {
  Native = 'Native app',
  Traditional = 'Traditional web',
  SPA = 'Single page app',
}

const useCategorizedTutorialMetadata = () => {
  // eslint-disable-next-line no-restricted-syntax
  const { sdks, socialConnectors, emailConnectors, smsConnectors } = metadata as DocGroups;

  const { nativeSdks, traditionalSdks, spaSdks } = sdks.reduce<{
    nativeSdks: DocMetadata[];
    traditionalSdks: DocMetadata[];
    spaSdks: DocMetadata[];
  }>(
    (acc, sdk) => {
      const appType = sdk.frontMatter.app_type;
      switch (appType) {
        case DocAppType.Native: {
          return { ...acc, nativeSdks: [...acc.nativeSdks, sdk] };
        }
        case DocAppType.Traditional: {
          return { ...acc, traditionalSdks: [...acc.traditionalSdks, sdk] };
        }
        case DocAppType.SPA: {
          return { ...acc, spaSdks: [...acc.spaSdks, sdk] };
        }
        default: {
          return acc;
        }
      }
    },
    { nativeSdks: [], traditionalSdks: [], spaSdks: [] }
  );

  return useMemo(
    () => ({
      allSdks: sdks,
      allConnectors: [...socialConnectors, ...emailConnectors, ...smsConnectors],
      nativeSdks,
      traditionalSdks,
      spaSdks,
      socialConnectors,
      emailConnectors,
      smsConnectors,
    }),
    [sdks, socialConnectors, emailConnectors, smsConnectors, nativeSdks, traditionalSdks, spaSdks]
  );
};

export default useCategorizedTutorialMetadata;
