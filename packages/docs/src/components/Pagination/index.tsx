import BrowserOnly from '@docusaurus/BrowserOnly';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';

import Previous from '@site/src/assets/arrow-left.svg';
import Next from '@site/src/assets/arrow-right.svg';

import FlipOnRtl from '../FlipOnRtl';

import styles from './index.module.scss';

export type Props = {
  readonly page: number;
  readonly totalCount: number;
  readonly pageSize: number;
  readonly className?: string;
  readonly mode?: 'normal' | 'pico';
  readonly onChange?: (pageIndex: number) => void;
};

const Pagination = ({
  page,
  totalCount,
  pageSize,
  className,
  mode = 'normal',
  onChange,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const pageCount = Math.ceil(totalCount / pageSize);

  useEffect(() => {
    if (ref.current) {
      const ul = ref.current.querySelector('ul[role="navigation"]');
      // This role is not properly set by react-paginate
      // See https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role
      ul?.removeAttribute('role');
    }
  }, []);

  if (pageCount <= 1) {
    return null;
  }

  const min = (page - 1) * pageSize + 1;
  const max = Math.min(page * pageSize, totalCount);
  const isPicoMode = mode === 'pico';

  return (
    <div ref={ref} className={clsx(styles.container, isPicoMode && styles.pico, className)}>
      <div className={styles.positionInfo}>
        <Translate id="theme.common.pagination.info" values={{ min, max, total: totalCount }}>
          {'{min}-{max} of {total}'}
        </Translate>
      </div>
      <BrowserOnly>
        {() => (
          <ReactPaginate
            className={styles.pagination}
            pageCount={pageCount}
            forcePage={page - 1}
            pageLabelBuilder={(pageNumber: number) => (
              <button
                className={clsx(styles.button, pageNumber === page && styles.active)}
                aria-label={`Page ${pageNumber}`}
              >
                {String(pageNumber)}
              </button>
            )}
            previousLabel={
              <FlipOnRtl>
                <button className={styles.button} disabled={page === 1} aria-label="Previous page">
                  <Previous />
                </button>
              </FlipOnRtl>
            }
            nextLabel={
              <FlipOnRtl>
                <button
                  className={styles.button}
                  disabled={page === pageCount}
                  aria-label="Next page"
                >
                  <Next />
                </button>
              </FlipOnRtl>
            }
            breakLabel={<button className={styles.button}>...</button>}
            disabledClassName={styles.disabled}
            pageRangeDisplayed={isPicoMode ? -1 : undefined}
            marginPagesDisplayed={isPicoMode ? 0 : undefined}
            onPageChange={({ selected }) => {
              onChange?.(selected + 1);
            }}
          />
        )}
      </BrowserOnly>
    </div>
  );
};

export default Pagination;
