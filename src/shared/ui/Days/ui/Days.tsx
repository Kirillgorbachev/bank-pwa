import cls from './Days.module.scss';

import { dayNameList } from '@/shared/const/day/day';

export const Days = () => (
    <div className={cls.days}>
        {dayNameList.map((day) => (
            <div className={cls.cell} key={day}>
                {day}
            </div>
        ))}
    </div>
);
