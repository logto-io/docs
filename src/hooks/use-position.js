"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePosition = usePosition;
var react_1 = require("react");
// Leave space for box-shadow effect.
var windowSafePadding = 12;
var selectVerticalAlignment = function (_a) {
    var verticalAlign = _a.verticalAlign, verticalTop = _a.verticalTop, verticalCenter = _a.verticalCenter, verticalBottom = _a.verticalBottom, overlayHeight = _a.overlayHeight;
    var minY = windowSafePadding;
    var maxY = window.innerHeight - windowSafePadding;
    var isTopAllowed = verticalTop >= minY;
    var isCenterAllowed = verticalCenter - overlayHeight / 2 >= minY && verticalCenter + overlayHeight / 2 <= maxY;
    var isBottomAllowed = verticalBottom + overlayHeight <= maxY;
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
var selectHorizontalAlignment = function (_a) {
    var horizontalAlign = _a.horizontalAlign, horizontalStart = _a.horizontalStart, horizontalCenter = _a.horizontalCenter, horizontalEnd = _a.horizontalEnd, overlayWidth = _a.overlayWidth;
    var minX = windowSafePadding;
    var maxX = window.innerWidth - windowSafePadding;
    var isStartAllowed = horizontalStart + overlayWidth <= maxX;
    var isCenterAllowed = horizontalCenter - overlayWidth / 2 >= minX && horizontalCenter + overlayWidth / 2 <= maxX;
    var isEndAllowed = horizontalEnd >= minX;
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
function usePosition(_a) {
    var verticalAlign = _a.verticalAlign, horizontalAlign = _a.horizontalAlign, offset = _a.offset, anchorRef = _a.anchorRef, overlayRef = _a.overlayRef;
    var _b = (0, react_1.useState)(), position = _b[0], setPosition = _b[1];
    var _c = (0, react_1.useState)(verticalAlign), currentVerticalAlign = _c[0], setCurrentVerticalAlign = _c[1];
    var _d = (0, react_1.useState)(horizontalAlign), currentHorizontalAlign = _d[0], setCurrentHorizontalAlign = _d[1];
    var updatePosition = (0, react_1.useCallback)(function () {
        if (!anchorRef.current || !overlayRef.current) {
            return;
        }
        var anchorRect = anchorRef.current.getBoundingClientRect();
        var overlayRect = overlayRef.current.getBoundingClientRect();
        var verticalTop = anchorRect.y - overlayRect.height + offset.vertical;
        var verticalCenter = anchorRect.y - anchorRect.height / 2 - overlayRect.height / 2 + offset.vertical;
        var verticalBottom = anchorRect.y + anchorRect.height + offset.vertical;
        var verticalPositionMap = {
            top: verticalTop,
            center: verticalCenter,
            bottom: verticalBottom,
        };
        var horizontalStart = anchorRect.x + offset.horizontal;
        var horizontalCenter = anchorRect.x + anchorRect.width / 2 - overlayRect.width / 2 + offset.horizontal;
        var horizontalEnd = anchorRect.x + anchorRect.width - overlayRect.width + offset.horizontal;
        var horizontalPositionMap = {
            start: horizontalStart,
            center: horizontalCenter,
            end: horizontalEnd,
        };
        var selectedVerticalAlign = selectVerticalAlignment({
            verticalAlign: verticalAlign,
            verticalTop: verticalTop,
            verticalCenter: verticalCenter,
            verticalBottom: verticalBottom,
            overlayHeight: overlayRect.height,
        });
        var selectedHorizontalAlign = selectHorizontalAlignment({
            horizontalAlign: horizontalAlign,
            horizontalStart: horizontalStart,
            horizontalCenter: horizontalCenter,
            horizontalEnd: horizontalEnd,
            overlayWidth: overlayRect.width,
        });
        setCurrentVerticalAlign(selectedVerticalAlign);
        setCurrentHorizontalAlign(selectedHorizontalAlign);
        setPosition({
            top: verticalPositionMap[selectedVerticalAlign],
            left: horizontalPositionMap[selectedHorizontalAlign],
        });
    }, [anchorRef, horizontalAlign, offset.vertical, offset.horizontal, overlayRef, verticalAlign]);
    (0, react_1.useEffect)(function () {
        updatePosition();
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition);
        return function () {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition);
        };
    }, [updatePosition]);
    return {
        position: position,
        mutate: updatePosition,
        positionState: {
            verticalAlign: currentVerticalAlign,
            horizontalAlign: currentHorizontalAlign,
        },
    };
}
