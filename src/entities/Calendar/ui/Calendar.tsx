import moment from 'moment';

import { Month } from '../../Month';
import { createMonthIdList } from '../utils/createMonthIdList';

import cls from './Calendar.module.scss';

const offset = 3;
const currentYear = moment().year();

const startYear = currentYear - offset;
const endYear = currentYear + offset;

const monthIdList = createMonthIdList(startYear, endYear);

export const Calendar = () => (
    <div className={cls.calendar}>
        {monthIdList.map((monthId: string) => (
            <Month monthId={monthId} key={monthId} />
        ))}
    </div>
);
