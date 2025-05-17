import Translate from '@docusaurus/Translate';
import clsx from 'clsx';

import SearchIcon from '@site/src/assets/search-bar.svg';
import { onKeyDownHandler } from '@site/src/utils/a11y';
import { isAppleDevice } from '@site/src/utils/device';

import styles from './index.module.scss';

type Props = {
  readonly className?: string;
  readonly onClick?: () => void;
};

const SearchBar = ({ className, onClick }: Props) => {
  return (
    <div
      tabIndex={0}
      role="button"
      className={clsx(styles.searchBarContainer, className)}
      aria-label="Search"
      onClick={onClick}
      onKeyDown={onKeyDownHandler(onClick)}
    >
      <SearchIcon className={styles.icon} />
      <span className={styles.placeholder}>
        <Translate id="theme.SearchBar.label">Search</Translate>
      </span>
      <div className={styles.keys}>
        <kbd>{isAppleDevice() ? '⌘' : 'Ctrl'}</kbd>
        <kbd>K</kbd>
      </div>
    </div>
  );
};

export default SearchBar;
