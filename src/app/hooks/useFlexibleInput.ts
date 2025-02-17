import { useEffect, useRef, useState } from 'react';

import { formatNumber } from '@/app/utils/formatNumber';

export const useFlexibleInput = (total: string | number) => {
    const [content, setContent] = useState(total);
    const [width, setWidth] = useState(0);
    const span = useRef<HTMLSpanElement>(null);

    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = evt.target.value;
        setContent(newValue);
    };

    useEffect(() => {
        if (span.current) {
            setWidth(span.current.offsetWidth + 35);
        }
    }, [content]);

    useEffect(() => {
        setContent(formatNumber(total));
    }, [total]);

    return {
        content,
        width,
        spanRef: span,
        changeHandler,
    };
};
