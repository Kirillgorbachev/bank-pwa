import type { ChartData } from 'chart.js';

import type { TSuperCategory } from '../types/superCategories';
import type { ISuperCategoryItem } from '../types/transactionTypes';

const superCategoryColors: Record<TSuperCategory, string> = {
    ['Супермаркет']: '#0EAD69',
    ['Кредиты и задолжности']: '#3CB3F5',
    ['Переводы']: '#EE4266',
    ['Обслуживание']: '#FFD23F',
};

export const chartData = (categories: ISuperCategoryItem[]): ChartData<'pie'> => ({
    labels: categories.map((item) => item.superCategory),
    datasets: [
        {
            data: categories.map((item) => item.amount),
            backgroundColor: categories.map((item) => superCategoryColors[item.superCategory]),
            borderWidth: 1,
        },
    ],
});
