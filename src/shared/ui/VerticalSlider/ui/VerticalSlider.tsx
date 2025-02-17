import { type PropsWithChildren, useEffect } from 'react';

import cls from './VerticalSlider.module.scss';

interface IVerticalSliderProps {
    topElementId: string;
}

export const VerticalSlider = ({ topElementId, children }: PropsWithChildren<IVerticalSliderProps>) => {
    useEffect(() => {
        document.getElementById(topElementId)?.scrollIntoView();
    });

    return (
        <div className={cls.verticalSlider}>
            {children}
            <div className={cls.shadow}></div>
        </div>
    );
};
