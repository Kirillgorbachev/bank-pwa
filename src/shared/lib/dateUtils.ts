import type { Moment } from 'moment';
import moment from 'moment';

import { monthName } from '../const/month/month';

export const getCurrentMonthName = () => {
    const currentMonthIndex = new Date().getMonth();

    return monthName[currentMonthIndex];
};

export const getCurrentYear = () => new Date().getFullYear();

export const dateFormatString = 'YYYY-MM-DD';

export const getMonthDataByMonthId: (monthId: string) => Moment[] = (monthId: string) => {
    const firstDate = moment(monthId);
    const monthData = [];
    const currentMonth = firstDate.month();
    let current = moment(firstDate);

    while (current.month() === currentMonth) {
        monthData.push(moment(current));
        current = current.add(1, 'day');
    }

    return monthData;
};

export const getMonthDataByDateId: (dateId: string) => Moment[] = (dateId: string) => {
    const monthId = moment(dateId).set('date', 1).format(dateFormatString);

    return getMonthDataByMonthId(monthId);
};

export const getMonthNameByMonthId: (monthId: string) => string = (monthId: string) => {
    const monthIndex = moment(monthId).month();
    const name = monthName[monthIndex];

    return name.slice(0, 1).toUpperCase() + name.slice(1);
};

export const getYearByMonthId: (monthId: string) => number = (monthId: string) => moment(monthId).year();

export const getLastMonth = (): string[] => {
    const today = new Date();
    const months: string[] = [];

    for (let i = 0; i < 12; i++) {
        const date = new Date(today.getFullYear(), today.getMonth() - i);
        const year = date.getFullYear();
        const monthIndex = date.getMonth();
        const monthWithYear = `${monthName[monthIndex]} ${year}`;
        months.push(monthWithYear);
    }

    return months;
};

export const formatMonthName = (selectedPeriodFirst: string, month: string) =>
    selectedPeriodFirst ? 'за период' : `в ${month.replace(/([ьй]$|$)/u, 'е')}`;
