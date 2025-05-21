import Translate, { translate } from '@docusaurus/Translate';
import { type PropBlogPostMetadata } from '@docusaurus/plugin-content-blog';
import { type DocMetadata } from '@docusaurus/plugin-content-docs';
import { useHistory } from '@docusaurus/router';
import { cond, conditional } from '@silverhand/essentials';
import { clsx } from 'clsx';
import { useMemo, useRef, useState } from 'react';

import {
  getConnectorDisplayName,
  getConnectorPath,
  getSdkDisplayName,
  getSdkPath,
} from '@site/plugins/tutorial-generator/utils';
import useCategorizedTutorialMetadata from '@site/src/hooks/use-categorized-tutorial-metadata';
import { useCurrentLocalePrefix } from '@site/src/hooks/useCurrentLocalePrefix';
import { onKeyDownHandler } from '@site/src/utils/a11y';

import { howToBasePath } from '../../utils';
import Dropdown from '../SelectionDropdown';

import styles from './index.module.scss';

type BlogPostProps = {
  readonly metadata: PropBlogPostMetadata;
};

type ListViewProps = {
  readonly defaultSdkSlugPart?: string;
  readonly defaultConnectorSlugPart?: string;
};

type Props = (BlogPostProps | ListViewProps) & {
  readonly onSelectSdk?: (docMetadata?: DocMetadata) => void;
  readonly onSelectConnector?: (docMetadata?: DocMetadata) => void;
};

type DropdownType = 'sdk' | 'connector';

const slugFirstPart = 'build-';
const slugMiddlePart = '-sign-in-with';
const slugLastPart = '-and-logto';

/* eslint-disable no-template-curly-in-string */
const sdkTemplateSlot = '${sdk}';
const connectorTemplateSlot = '${connector}';
/* eslint-enable no-template-curly-in-string */

/**
 * Escape potential parentheses and dollar signs in the SDK / connector name.
 * The result will be used for the regex that splits the title into parts.
 */
const normalizeName = (name: string) =>
  name.replaceAll('(', '\\(').replaceAll(')', '\\)').replaceAll('$', '\\$');

const TitleWithSelectionDropdown = (props: Props) => {
  const isBlogPost = 'metadata' in props;
  const { onSelectSdk, onSelectConnector } = props;
  const listViewProps = conditional(!isBlogPost && props);
  const blogPostProps = conditional(isBlogPost && props);

  const { push } = useHistory();
  const locale = useCurrentLocalePrefix();
  const sdkNameRef = useRef<HTMLSpanElement>(null);
  const connectorNameRef = useRef<HTMLSpanElement>(null);
  const allTutorialsMetadata = useCategorizedTutorialMetadata();
  const [isDropdownOpen, setIsDropdownOpen] = useState<DropdownType>();

  const defaultSdk = useMemo(() => {
    if (isBlogPost || !listViewProps?.defaultSdkSlugPart) {
      return;
    }
    return allTutorialsMetadata.allSdks.find(
      (data) => getSdkPath(data) === listViewProps.defaultSdkSlugPart
    );
  }, [isBlogPost, listViewProps?.defaultSdkSlugPart, allTutorialsMetadata.allSdks]);

  const defaultConnector = useMemo(() => {
    if (isBlogPost || !listViewProps?.defaultConnectorSlugPart) {
      return;
    }
    return allTutorialsMetadata.allConnectors.find(
      (data) => getConnectorPath(data) === listViewProps.defaultConnectorSlugPart
    );
  }, [isBlogPost, listViewProps?.defaultConnectorSlugPart, allTutorialsMetadata.allConnectors]);

  const sdkName = isBlogPost
    ? String(blogPostProps?.metadata.frontMatter.sdk ?? '')
    : getSdkDisplayName(defaultSdk);
  const connectorName = isBlogPost
    ? String(blogPostProps?.metadata.frontMatter.connector ?? '')
    : getConnectorDisplayName(defaultConnector);

  if (blogPostProps && (!sdkName || !connectorName)) {
    return blogPostProps.metadata.title;
  }

  const listViewTitle = translate({
    id: 'theme.blog.tutorial.title',
    message: `Build ${connectorTemplateSlot} sign-in with ${sdkTemplateSlot}`,
  })
    .replace(sdkTemplateSlot, sdkName || sdkTemplateSlot)
    .replace(connectorTemplateSlot, connectorName || connectorTemplateSlot);

  const normalizedTitle = blogPostProps?.metadata.title ?? listViewTitle;

  const titleParts = normalizedTitle
    .split(
      new RegExp(
        `(${normalizeName(connectorName || connectorTemplateSlot)}|${normalizeName(sdkName || sdkTemplateSlot)})`,
        'g'
      )
    )
    .filter(Boolean);

  const showDropdown = (type: DropdownType) => {
    setIsDropdownOpen(type);
  };

  const onSelectDropdown = (option: {
    type: DropdownType;
    displayName: string;
    metadata: DocMetadata;
  }) => {
    const { type, displayName, metadata } = option;
    const onSelectFn = type === 'sdk' ? onSelectSdk : onSelectConnector;
    const getPathFn = type === 'sdk' ? getSdkPath : getConnectorPath;
    const elementRef = type === 'sdk' ? sdkNameRef : connectorNameRef;

    onSelectFn?.(metadata);
    setIsDropdownOpen(undefined);

    if (elementRef.current) {
      // eslint-disable-next-line @silverhand/fp/no-mutation
      elementRef.current.textContent = displayName;
    }
    if (isBlogPost) {
      const slug = blogPostProps?.metadata.frontMatter.slug ?? '';
      const selectedSlugPart = getPathFn(metadata);
      const targetSlug =
        type === 'sdk'
          ? slug.slice(0, Math.max(0, slug.indexOf(slugMiddlePart) + slugMiddlePart.length + 1)) +
            selectedSlugPart +
            slugLastPart
          : slugFirstPart + selectedSlugPart + slug.slice(slug.indexOf(slugMiddlePart));

      push(`${locale}/${howToBasePath}/${targetSlug}`);
    }
  };

  return (
    <>
      {titleParts.map((part) => {
        if (part === sdkName || part === sdkTemplateSlot) {
          return (
            <span
              ref={sdkNameRef}
              key={sdkName || sdkTemplateSlot}
              tabIndex={0}
              role="button"
              className={clsx(styles.dropdownAnchor, isDropdownOpen === 'sdk' && styles.active)}
              onClick={() => {
                showDropdown('sdk');
              }}
              onKeyDown={onKeyDownHandler(() => {
                showDropdown('sdk');
              })}
            >
              {part === sdkTemplateSlot ? (
                <span className={styles.placeholder}>
                  <Translate id="theme.common.sdk.placeholder">your SDK</Translate>
                </span>
              ) : (
                part
              )}
            </span>
          );
        }
        if (part === connectorName || part === connectorTemplateSlot) {
          return (
            <span
              ref={connectorNameRef}
              key={connectorName || connectorTemplateSlot}
              tabIndex={0}
              role="button"
              className={clsx(
                styles.dropdownAnchor,
                isDropdownOpen === 'connector' && styles.active
              )}
              onClick={() => {
                showDropdown('connector');
              }}
              onKeyDown={onKeyDownHandler(() => {
                showDropdown('connector');
              })}
            >
              {part === connectorTemplateSlot ? (
                <span className={styles.placeholder}>
                  <Translate id="theme.common.connector.placeholder">your provider</Translate>
                </span>
              ) : (
                part
              )}
            </span>
          );
        }
        return part;
      })}
      <Dropdown
        anchorRef={sdkNameRef}
        isOpen={isDropdownOpen === 'sdk'}
        options={{
          [translate({ id: 'theme.common.sdk.native', message: 'Native' })]:
            allTutorialsMetadata.nativeSdks,
          [translate({ id: 'theme.common.sdk.spa', message: 'Single page' })]:
            allTutorialsMetadata.spaSdks,
          [translate({ id: 'theme.common.sdk.traditional', message: 'Traditional Web' })]:
            allTutorialsMetadata.traditionalSdks,
        }}
        onSelect={({ displayName, metadata: sdkMetadata }) => {
          onSelectDropdown({ type: 'sdk', displayName, metadata: sdkMetadata });
        }}
        onClose={() => {
          setIsDropdownOpen(undefined);
        }}
        onReset={cond(
          !isBlogPost &&
            (() => {
              onSelectSdk?.(undefined);
              setIsDropdownOpen(undefined);
            })
        )}
      />
      <Dropdown
        anchorRef={connectorNameRef}
        isOpen={isDropdownOpen === 'connector'}
        options={{
          [translate({ id: 'theme.common.connector.sso', message: 'Enterprise SSO providers' })]:
            allTutorialsMetadata.ssoConnectors,
          [translate({ id: 'theme.common.connector.social', message: 'Social providers' })]:
            allTutorialsMetadata.socialConnectors,
          [translate({ id: 'theme.common.connector.email', message: 'Email providers' })]:
            allTutorialsMetadata.emailConnectors,
          [translate({ id: 'theme.common.connector.sms', message: 'SMS providers' })]:
            allTutorialsMetadata.smsConnectors,
        }}
        onSelect={({ displayName, metadata: connectorMetadata }) => {
          onSelectDropdown({ type: 'connector', displayName, metadata: connectorMetadata });
        }}
        onClose={() => {
          setIsDropdownOpen(undefined);
        }}
        onReset={cond(
          !isBlogPost &&
            (() => {
              onSelectConnector?.(undefined);
              setIsDropdownOpen(undefined);
            })
        )}
      />
    </>
  );
};

export default TitleWithSelectionDropdown;
