import type { RefObject } from 'react';

export const useDragStart =
    (
        containerRef: RefObject<HTMLDivElement>,
        setIsDragging: (value: boolean) => void,
        setStartX: (value: number) => void,
        setScrollLeft: (value: number) => void,
    ) =>
    (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);

        const startPosition =
            'touches' in e
                ? e.touches[0].pageX
                : (e as React.MouseEvent).pageX - (containerRef.current?.offsetLeft || 0);

        setStartX(startPosition);
        setScrollLeft(containerRef.current?.scrollLeft || 0);
    };
