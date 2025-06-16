import { type DocFrontMatter } from '@docusaurus/plugin-content-docs';
import { useMemo } from 'react';

import metadata from '@site/tutorial/build-with-logto/metadata.json';

export type Metadata = {
  file: string;
  title: string;
  slug: string;
  frontMatter: DocFrontMatter & Record<string, unknown>;
};

type DocGroups = {
  sdks: Metadata[];
  socialConnectors: Metadata[];
  emailConnectors: Metadata[];
  smsConnectors: Metadata[];
  ssoConnectors: Metadata[];
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
  const { sdks, socialConnectors, emailConnectors, smsConnectors, ssoConnectors } =
    metadata satisfies DocGroups;

  const { nativeSdks, traditionalSdks, spaSdks } = sdks.reduce<{
    nativeSdks: Metadata[];
    traditionalSdks: Metadata[];
    spaSdks: Metadata[];
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
      allConnectors: [...socialConnectors, ...emailConnectors, ...smsConnectors, ...ssoConnectors],
      nativeSdks,
      traditionalSdks,
      spaSdks,
      socialConnectors,
      emailConnectors,
      smsConnectors,
      ssoConnectors,
    }),
    [
      sdks,
      socialConnectors,
      emailConnectors,
      smsConnectors,
      ssoConnectors,
      nativeSdks,
      traditionalSdks,
      spaSdks,
    ]
  );
};

export default useCategorizedTutorialMetadata;
