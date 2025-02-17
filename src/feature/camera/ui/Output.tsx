import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import cls from './Camera.module.scss';

const OutputComponent = (_props: any, ref: ForwardedRef<HTMLImageElement>) => (
    <div className={cls.output}>
        <img id="photo" alt="" ref={ref} />
    </div>
);

export const Output = forwardRef(OutputComponent);
