import { type PropBlogPostMetadata } from '@docusaurus/plugin-content-blog';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';

import { getConnectorPath, getSdkPath } from '@site/plugins/tutorial-generator/utils';
import useCategorizedTutorialMetadata from '@site/src/hooks/use-categorized-tutorial-metadata';
import { onKeyDownHandler } from '@site/src/utils/a11y';

import Dropdown from '../SelectionDropdown';

import styles from './index.module.scss';

/**
 * Escape potential parentheses in the SDK / connector name.
 * The result will be used for the regex that splits the title into parts.
 */
const normalizeName = (name: string) => name.replaceAll('(', '\\(').replaceAll(')', '\\)');

const TitleWithSelectionDropdown = ({
  title,
  metadata,
}: {
  readonly title: string;
  readonly metadata: PropBlogPostMetadata;
}) => {
  const currentSlug = metadata.frontMatter.slug ?? '';
  const sdkName = String(metadata.frontMatter.sdk ?? '');
  const connectorName = String(metadata.frontMatter.connector ?? '');
  const [isDropdownOpen, setIsDropdownOpen] = useState<'sdk' | 'connector'>();

  const allTutorialsMetadata = useCategorizedTutorialMetadata();

  const sdkNameRef = useRef<HTMLSpanElement>(null);
  const connectorNameRef = useRef<HTMLSpanElement>(null);

  if (!sdkName && !connectorName) {
    return title;
  }

  const titleParts = title
    .split(new RegExp(`(${normalizeName(sdkName)}|${normalizeName(connectorName)})`, 'g'))
    .filter(Boolean);

  const handleSdkClick = () => {
    setIsDropdownOpen('sdk');
  };

  const handleConnectorClick = () => {
    setIsDropdownOpen('connector');
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
              onClick={handleSdkClick}
              onKeyDown={onKeyDownHandler(handleSdkClick)}
            >
              {part}
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
              onClick={handleConnectorClick}
              onKeyDown={onKeyDownHandler(handleConnectorClick)}
            >
              {part}
            </span>
          );
        }
        return part;
      })}
      <Dropdown
        anchorRef={sdkNameRef}
        isOpen={isDropdownOpen === 'sdk'}
        options={{
          Native: allTutorialsMetadata.nativeSdks,
          'Single page': allTutorialsMetadata.spaSdks,
          'Traditional Web': allTutorialsMetadata.traditionalSdks,
        }}
        onSelect={({ displayName, metadata: sdkMetadata }) => {
          setIsDropdownOpen(undefined);
          const sdkPath = getSdkPath(sdkMetadata);
          if (sdkNameRef.current) {
            // eslint-disable-next-line @silverhand/fp/no-mutation
            sdkNameRef.current.textContent = displayName;
          }
          const targetSlug =
            currentSlug.slice(0, Math.max(0, currentSlug.indexOf('sign-in-with-') + 13)) +
            sdkPath +
            '-and-logto';
          // eslint-disable-next-line @silverhand/fp/no-mutation
          window.location.href = `/tutorial/${targetSlug}`;
        }}
        onClose={() => {
          setIsDropdownOpen(undefined);
        }}
      />
      <Dropdown
        anchorRef={connectorNameRef}
        isOpen={isDropdownOpen === 'connector'}
        options={{
          'Social providers': allTutorialsMetadata.socialConnectors,
          'Email providers': allTutorialsMetadata.emailConnectors,
          'SMS providers': allTutorialsMetadata.smsConnectors,
        }}
        onSelect={({ displayName, metadata: connectorMetadata }) => {
          setIsDropdownOpen(undefined);
          if (connectorNameRef.current) {
            // eslint-disable-next-line @silverhand/fp/no-mutation
            connectorNameRef.current.textContent = displayName;
          }
          const connectorPath = getConnectorPath(connectorMetadata);
          const targetSlug =
            'how-to-build-' +
            connectorPath +
            currentSlug.slice(currentSlug.indexOf('-sign-in-with'));
          // eslint-disable-next-line @silverhand/fp/no-mutation
          window.location.href = `/tutorial/${targetSlug}`;
        }}
        onClose={() => {
          setIsDropdownOpen(undefined);
        }}
      />
    </>
  );
};

export default TitleWithSelectionDropdown;
