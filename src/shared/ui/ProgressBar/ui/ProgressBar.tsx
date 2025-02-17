import { Line } from 'rc-progress';

import './ProgressBar.scss';

import { hexToRgba } from '@/app/utils/hexToRgba';

interface IProgressBar {
    goalStatus: string;
}

const getTrailColor = (status: number): string => {
    if (status < 30) return '#FA193B';
    if (status >= 30 && status < 60) return '#F7931A';

    return '#00BD90';
};

export const ProgressBar = ({ goalStatus }: IProgressBar) => {
    const trailColor = getTrailColor(Number(goalStatus));

    return (
        <Line
            percent={Number(goalStatus)}
            trailColor={hexToRgba(trailColor, 0.2)}
            strokeColor={trailColor}
            className="progress-container"
        />
    );
};
