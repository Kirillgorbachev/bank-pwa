import { type RefObject, useState } from 'react';

import { useDragEnd } from './useDragEnd';
import { useDragMove } from './useDragMove';
import { useDragStart } from './useDragStart';

export const useDragScroll = (containerRef: RefObject<HTMLDivElement>) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = useDragStart(containerRef, setIsDragging, setStartX, setScrollLeft);
    const handleMouseMove = useDragMove(containerRef, isDragging, startX, scrollLeft);
    const handleMouseUp = useDragEnd(setIsDragging);
    const handleMouseLeave = handleMouseUp;

    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleMouseLeave,
    };
};
