import { type Nullable } from '@silverhand/essentials';
import clsx from 'clsx';
import type { CSSProperties, ReactNode, RefObject } from 'react';
import { useRef } from 'react';
import ReactModal from 'react-modal';

import { usePosition, type HorizontalAlignment } from '@site/src/hooks/use-position';

import { onKeyDownHandler } from '../../utils/a11y';

import styles from './index.module.scss';

export { default as DropdownItem } from './DropdownItem';

type Props = {
  readonly children: ReactNode;
  readonly isOpen: boolean;
  readonly style?: CSSProperties;
  readonly onClose?: () => void;
  readonly anchorRef: RefObject<Nullable<HTMLElement>>;
  readonly isFullWidth?: boolean;
  readonly className?: string;
  readonly horizontalAlign?: HorizontalAlignment;
};

const Dropdown = ({
  children,
  isOpen,
  style,
  onClose,
  anchorRef,
  isFullWidth,
  className,
  horizontalAlign = 'end',
}: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const { position, positionState, mutate } = usePosition({
    verticalAlign: 'bottom',
    horizontalAlign,
    offset: { vertical: -4, horizontal: 0 },
    anchorRef,
    overlayRef,
  });

  return (
    <ReactModal
      shouldCloseOnOverlayClick
      isOpen={isOpen}
      style={{
        content: {
          width:
            isFullWidth && anchorRef.current
              ? anchorRef.current.getBoundingClientRect().width
              : undefined,
          ...(!position && { opacity: 0 }),
          ...position,
        },
      }}
      className={clsx(styles.content, positionState.verticalAlign === 'top' && styles.onTop)}
      overlayClassName={styles.overlay}
      onRequestClose={onClose}
      onAfterOpen={mutate}
    >
      <div ref={overlayRef}>
        <ul
          className={clsx(styles.list, className)}
          role="menu"
          tabIndex={0}
          style={style}
          onClick={onClose}
          onKeyDown={onKeyDownHandler({ Enter: onClose, Esc: onClose })}
        >
          {children}
        </ul>
      </div>
    </ReactModal>
  );
};

export default Dropdown;
