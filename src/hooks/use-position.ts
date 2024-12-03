import type { RefObject } from 'react';
import { useCallback, useEffect, useState } from 'react';

export type VerticalAlignment = 'top' | 'center' | 'bottom';

export type HorizontalAlignment = 'start' | 'center' | 'end';

type Offset = {
  vertical: number;
  horizontal: number;
};

type Props = {
  verticalAlign: VerticalAlignment;
  horizontalAlign: HorizontalAlignment;
  offset: Offset;
  anchorRef: RefObject<Element>;
  overlayRef: RefObject<Element>;
};

export type Position = {
  top: number;
  left: number;
};

// Leave space for box-shadow effect.
const windowSafePadding = 12;

const selectVerticalAlignment = ({
  verticalAlign,
  verticalTop,
  verticalCenter,
  verticalBottom,
  overlayHeight,
}: {
  verticalAlign: VerticalAlignment;
  verticalTop: number;
  verticalCenter: number;
  verticalBottom: number;
  overlayHeight: number;
}) => {
  const minY = windowSafePadding;
  const maxY = window.innerHeight - windowSafePadding;

  const isTopAllowed = verticalTop >= minY;
  const isCenterAllowed =
    verticalCenter - overlayHeight / 2 >= minY && verticalCenter + overlayHeight / 2 <= maxY;
  const isBottomAllowed = verticalBottom + overlayHeight <= maxY;

  switch (verticalAlign) {
    case 'top': {
      if (isTopAllowed) {
        return 'top';
      }

      if (isBottomAllowed) {
        return 'bottom';
      }

      if (isCenterAllowed) {
        return 'center';
      }

      return verticalAlign;
    }

    case 'center': {
      if (isCenterAllowed) {
        return 'center';
      }

      if (isTopAllowed) {
        return 'top';
      }

      if (isBottomAllowed) {
        return 'bottom';
      }

      return verticalAlign;
    }

    case 'bottom': {
      if (isBottomAllowed) {
        return 'bottom';
      }

      if (isTopAllowed) {
        return 'top';
      }

      if (isCenterAllowed) {
        return 'center';
      }

      return verticalAlign;
    }
  }
};

const selectHorizontalAlignment = ({
  horizontalAlign,
  horizontalStart,
  horizontalCenter,
  horizontalEnd,
  overlayWidth,
}: {
  horizontalAlign: HorizontalAlignment;
  horizontalStart: number;
  horizontalCenter: number;
  horizontalEnd: number;
  overlayWidth: number;
}) => {
  const minX = windowSafePadding;
  const maxX = window.innerWidth - windowSafePadding;

  const isStartAllowed = horizontalStart + overlayWidth <= maxX;
  const isCenterAllowed =
    horizontalCenter - overlayWidth / 2 >= minX && horizontalCenter + overlayWidth / 2 <= maxX;
  const isEndAllowed = horizontalEnd >= minX;

  switch (horizontalAlign) {
    case 'start': {
      if (isStartAllowed) {
        return 'start';
      }

      if (isEndAllowed) {
        return 'end';
      }

      if (isCenterAllowed) {
        return 'center';
      }

      return horizontalAlign;
    }

    case 'center': {
      if (isCenterAllowed) {
        return 'center';
      }

      if (isStartAllowed) {
        return 'start';
      }

      if (isEndAllowed) {
        return 'end';
      }

      return horizontalAlign;
    }

    case 'end': {
      if (isEndAllowed) {
        return 'end';
      }

      if (isStartAllowed) {
        return 'start';
      }

      if (isCenterAllowed) {
        return 'center';
      }

      return horizontalAlign;
    }
  }
};

export function usePosition({
  verticalAlign,
  horizontalAlign,
  offset,
  anchorRef,
  overlayRef,
}: Props) {
  const [position, setPosition] = useState<Position>();
  const [currentVerticalAlign, setCurrentVerticalAlign] = useState(verticalAlign);
  const [currentHorizontalAlign, setCurrentHorizontalAlign] = useState(horizontalAlign);

  const updatePosition = useCallback(() => {
    if (!anchorRef.current || !overlayRef.current) {
      return;
    }

    const anchorRect = anchorRef.current.getBoundingClientRect();
    const overlayRect = overlayRef.current.getBoundingClientRect();

    const verticalTop = anchorRect.y - overlayRect.height + offset.vertical;
    const verticalCenter =
      anchorRect.y - anchorRect.height / 2 - overlayRect.height / 2 + offset.vertical;
    const verticalBottom = anchorRect.y + anchorRect.height + offset.vertical;

    const verticalPositionMap = {
      top: verticalTop,
      center: verticalCenter,
      bottom: verticalBottom,
    };

    const horizontalStart = anchorRect.x + offset.horizontal;
    const horizontalCenter =
      anchorRect.x + anchorRect.width / 2 - overlayRect.width / 2 + offset.horizontal;
    const horizontalEnd = anchorRect.x + anchorRect.width - overlayRect.width + offset.horizontal;

    const horizontalPositionMap = {
      start: horizontalStart,
      center: horizontalCenter,
      end: horizontalEnd,
    };

    const selectedVerticalAlign = selectVerticalAlignment({
      verticalAlign,
      verticalTop,
      verticalCenter,
      verticalBottom,
      overlayHeight: overlayRect.height,
    });

    const selectedHorizontalAlign = selectHorizontalAlignment({
      horizontalAlign,
      horizontalStart,
      horizontalCenter,
      horizontalEnd,
      overlayWidth: overlayRect.width,
    });

    setCurrentVerticalAlign(selectedVerticalAlign);
    setCurrentHorizontalAlign(selectedHorizontalAlign);
    setPosition({
      top: verticalPositionMap[selectedVerticalAlign],
      left: horizontalPositionMap[selectedHorizontalAlign],
    });
  }, [anchorRef, horizontalAlign, offset.vertical, offset.horizontal, overlayRef, verticalAlign]);

  useEffect(() => {
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [updatePosition]);

  return {
    position,
    mutate: updatePosition,
    positionState: {
      verticalAlign: currentVerticalAlign,
      horizontalAlign: currentHorizontalAlign,
    },
  };
}
