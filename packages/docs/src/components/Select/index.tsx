import clsx from 'clsx';
import type { CSSProperties, ReactNode } from 'react';
import { useRef, useState } from 'react';

import { onKeyDownHandler } from '@site/src/utils/a11y';

import Dropdown, { DropdownItem } from '../Dropdown';
import Spacer from '../Spacer';

import ArrowDown from './components/ArrowDown';
import ArrowUp from './components/ArrowUp';
import styles from './index.module.scss';

export type Option<T> = {
  value: T;
  title?: ReactNode;
  className?: string;
  to?: string;
};

type Props<T> = {
  readonly className?: string;
  readonly dropdownClassName?: string;
  readonly optionContainerStyles?: CSSProperties;
  readonly optionStyles?: CSSProperties;
  readonly value?: T;
  readonly options: Array<Option<T>>;
  readonly onChange?: (value?: T) => void;
  readonly icon?: ReactNode;
  readonly isReadOnly?: boolean;
  readonly errorMessage?: string;
  readonly hasError?: boolean;
  readonly placeholder?: ReactNode;
  readonly size?: 'small' | 'medium' | 'large' | 'xlarge' | 'auto';
};

const Select = <T extends string>({
  className,
  dropdownClassName,
  optionContainerStyles,
  optionStyles,
  value,
  options,
  onChange,
  icon,
  isReadOnly,
  errorMessage,
  hasError = Boolean(errorMessage),
  placeholder,
  size = 'large',
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const current = options.find((option) => value && option.value === value);

  const handleSelect = (value: T) => {
    onChange?.(value);
    setIsOpen(false);
  };

  return (
    <>
      <div
        ref={anchorRef}
        className={clsx(
          styles.select,
          styles[size],
          isOpen && styles.open,
          isReadOnly && styles.readOnly,
          hasError && styles.error,
          className
        )}
        role="button"
        tabIndex={0}
        onKeyDown={onKeyDownHandler(() => {
          if (!isReadOnly) {
            setIsOpen(true);
          }
        })}
        onClick={() => {
          if (!isReadOnly) {
            setIsOpen(true);
          }
        }}
      >
        {icon}
        {current ? (
          <span className={styles.title}>{current.title ?? current.value}</span>
        ) : (
          <span className={styles.placeholder}>{placeholder}</span>
        )}
        <Spacer />
        <div className={clsx(styles.icon, styles.arrow)}>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </div>
      </div>
      {hasError && errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
      <Dropdown
        anchorRef={anchorRef}
        isOpen={isOpen}
        className={clsx(styles.dropdownContainer, dropdownClassName)}
        style={optionContainerStyles}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {options.map(({ value, title, className, to }) => (
          <DropdownItem
            key={value}
            style={optionStyles}
            className={className}
            to={to}
            onClick={() => {
              handleSelect(value);
            }}
          >
            {title ?? value}
          </DropdownItem>
        ))}
      </Dropdown>
    </>
  );
};

export default Select;
