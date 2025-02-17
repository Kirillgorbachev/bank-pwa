import type { ChartOptions } from 'chart.js';

import type { ISuperCategoryItem } from '../types/transactionTypes';

export const chartOptions = (categories: ISuperCategoryItem[]): ChartOptions<'pie'> => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: (tooltipItem) => {
                    const index = tooltipItem.dataIndex;
                    const category = categories[index];

                    return `${category.superCategory}: ${Math.abs(category.amount).toLocaleString()}`;
                },
            },
        },
    },
    cutout: '50%',
});
