import Translate from '@docusaurus/Translate';
import { type DocMetadata } from '@docusaurus/plugin-content-docs';
import { type Nullable } from '@silverhand/essentials';
import { Fragment, type RefObject, useRef } from 'react';
import ReactModal from 'react-modal';

import { usePosition } from '@site/src/hooks/use-position';
import { onKeyDownHandler } from '@site/src/utils/a11y';

import styles from './index.module.scss';

type DropdownProps = {
  readonly isOpen: boolean;
  readonly anchorRef: RefObject<Nullable<HTMLElement>>;
  readonly options: Record<string, DocMetadata[]>;
  readonly onSelect: (option: { displayName: string; metadata: DocMetadata }) => void;
  readonly onClose: () => void;
  readonly onReset?: () => void;
};

const SelectionDropdown = ({
  isOpen,
  anchorRef,
  options,
  onSelect,
  onClose,
  onReset,
}: DropdownProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const { position, mutate } = usePosition({
    verticalAlign: 'bottom',
    horizontalAlign: 'start',
    offset: { vertical: 6, horizontal: 0 },
    anchorRef,
    overlayRef,
  });

  return (
    <ReactModal
      shouldCloseOnOverlayClick
      isOpen={isOpen}
      className={styles.dropdown}
      overlayClassName={styles.overlay}
      style={{
        content: {
          zIndex: 198,
          ...(!position && { opacity: 0 }),
          ...position,
        },
      }}
      onAfterOpen={mutate}
      onRequestClose={onClose}
    >
      <div ref={overlayRef} className={styles.dropdownContainer}>
        {Object.entries(options).map(([groupLabel, categorizedGuides]) => {
          return (
            <Fragment key={groupLabel}>
              <label>{groupLabel}</label>
              <div className={styles.dropdownGroup}>
                {categorizedGuides.map((metadata) => {
                  const { frontMatter, id } = metadata;
                  const displayName = String(
                    frontMatter.tutorial_name ?? frontMatter.sidebar_label ?? ''
                  );
                  return (
                    <div
                      key={id}
                      tabIndex={0}
                      role="menuitem"
                      className={styles.dropdownItem}
                      onKeyDown={onKeyDownHandler(() => {
                        onSelect({ displayName, metadata });
                      })}
                      onClick={() => {
                        onSelect({ displayName, metadata });
                      }}
                    >
                      {displayName}
                    </div>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
        {onReset && (
          <button
            className={styles.clearButton}
            onClick={onReset}
            onKeyDown={onKeyDownHandler(onReset)}
          >
            <Translate id="theme.common.resetFilters">Reset filters</Translate>
          </button>
        )}
      </div>
    </ReactModal>
  );
};

export default SelectionDropdown;
