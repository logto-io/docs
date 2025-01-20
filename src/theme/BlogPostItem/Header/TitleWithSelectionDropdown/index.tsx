import Translate, { translate } from '@docusaurus/Translate';
import { type PropBlogPostMetadata } from '@docusaurus/plugin-content-blog';
import { type DocMetadata } from '@docusaurus/plugin-content-docs';
import { useHistory } from '@docusaurus/router';
import { clsx } from 'clsx';
import { useMemo, useRef, useState } from 'react';

import {
  getConnectorDisplayName,
  getConnectorPath,
  getSdkDisplayName,
  getSdkPath,
} from '@site/plugins/tutorial-generator/utils';
import useCategorizedTutorialMetadata from '@site/src/hooks/use-categorized-tutorial-metadata';
import { onKeyDownHandler } from '@site/src/utils/a11y';

import Dropdown from '../SelectionDropdown';

import styles from './index.module.scss';

type Props = {
  readonly title: string;
  readonly metadata: PropBlogPostMetadata;
  readonly isInListView?: boolean;
  readonly defaultSdkSlugPart?: string;
  readonly defaultConnectorSlugPart?: string;
  readonly onSelectSdk?: (docMetadata: DocMetadata) => void;
  readonly onSelectConnector?: (docMetadata: DocMetadata) => void;
};

type DropdownType = 'sdk' | 'connector';

const slugFirstPart = 'how-to-build-';
const slugMiddlePart = '-sign-in-with';
const slugLastPart = '-and-logto';

/**
 * Escape potential parentheses in the SDK / connector name.
 * The result will be used for the regex that splits the title into parts.
 */
const normalizeName = (name: string) => name.replaceAll('(', '\\(').replaceAll(')', '\\)');

const TitleWithSelectionDropdown = ({
  title,
  metadata,
  isInListView,
  defaultSdkSlugPart,
  defaultConnectorSlugPart,
  onSelectSdk,
  onSelectConnector,
}: Props) => {
  const history = useHistory();
  const slug = metadata.frontMatter.slug ?? '';
  const sdkName = String(metadata.frontMatter.sdk ?? '');
  const connectorName = String(metadata.frontMatter.connector ?? '');
  const [isDropdownOpen, setIsDropdownOpen] = useState<DropdownType>();

  const allTutorialsMetadata = useCategorizedTutorialMetadata();

  const sdkNameRef = useRef<HTMLSpanElement>(null);
  const connectorNameRef = useRef<HTMLSpanElement>(null);

  const defaultSdk = useMemo(() => {
    if (!defaultSdkSlugPart) {
      return;
    }
    return allTutorialsMetadata.allSdks.find((data) => getSdkPath(data) === defaultSdkSlugPart);
  }, [defaultSdkSlugPart, allTutorialsMetadata.allSdks]);

  const defaultConnector = useMemo(() => {
    if (!defaultConnectorSlugPart) {
      return;
    }
    return allTutorialsMetadata.allConnectors.find(
      (data) => getConnectorPath(data) === defaultConnectorSlugPart
    );
  }, [defaultConnectorSlugPart, allTutorialsMetadata.allConnectors]);

  if (!sdkName && !connectorName) {
    return title;
  }

  const titleParts = title
    .split(new RegExp(`(${normalizeName(sdkName)}|${normalizeName(connectorName)})`, 'g'))
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
    if (!isInListView) {
      const selectedSlugPart = getPathFn(metadata);
      const targetSlug =
        type === 'sdk'
          ? slug.slice(0, Math.max(0, slug.indexOf(slugMiddlePart) + slugMiddlePart.length + 1)) +
            selectedSlugPart +
            slugLastPart
          : slugFirstPart + selectedSlugPart + slug.slice(slug.indexOf(slugMiddlePart));
      // eslint-disable-next-line @silverhand/fp/no-mutating-methods
      history.push(`/tutorial/${targetSlug}`);
    }
  };

  return (
    <>
      {titleParts.map((part) => {
        if (part === sdkName) {
          return (
            <span
              ref={sdkNameRef}
              key={sdkName}
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
              {isInListView ? (
                defaultSdk ? (
                  getSdkDisplayName(defaultSdk)
                ) : (
                  <span className={styles.placeholder}>
                    <Translate id="theme.common.sdk.placeholder">Your SDK</Translate>
                  </span>
                )
              ) : (
                part
              )}
            </span>
          );
        }
        if (part === connectorName) {
          return (
            <span
              ref={connectorNameRef}
              key={connectorName}
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
              {isInListView ? (
                defaultConnector ? (
                  getConnectorDisplayName(defaultConnector)
                ) : (
                  <span className={styles.placeholder}>
                    <Translate id="theme.common.connector.placeholder">Your provider</Translate>
                  </span>
                )
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
      />
      <Dropdown
        anchorRef={connectorNameRef}
        isOpen={isDropdownOpen === 'connector'}
        options={{
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
      />
    </>
  );
};

export default TitleWithSelectionDropdown;
