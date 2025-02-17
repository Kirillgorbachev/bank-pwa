import type { RefObject } from 'react';

export const useDragMove =
    (containerRef: RefObject<HTMLDivElement>, isDragging: boolean, startX: number, scrollLeft: number) =>
    (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;
        e.preventDefault();

        const currentPosition =
            'touches' in e
                ? e.touches[0].pageX
                : (e as React.MouseEvent).pageX - (containerRef.current?.offsetLeft || 0);

        const walk = (currentPosition - startX) * 2;

        if (containerRef.current) {
            containerRef.current.scrollLeft = scrollLeft - walk;
        }
    };
