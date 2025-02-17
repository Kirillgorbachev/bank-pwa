import { Grid } from '../../Grid';

import cls from './Month.module.scss';

import { getMonthDataByMonthId, getMonthNameByMonthId, getYearByMonthId } from '@/shared/lib/dateUtils';

interface IMonthProps {
    monthId: string;
}

export const Month = ({ monthId }: IMonthProps) => {
    const title = `${getMonthNameByMonthId(monthId)}, ${getYearByMonthId(monthId)}`;
    const monthData = getMonthDataByMonthId(monthId);

    return (
        <div className={cls.month} id={monthId}>
            <h3 className={cls.title}>{title}</h3>
            <Grid data={monthData} />
        </div>
    );
};
