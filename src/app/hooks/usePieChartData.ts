import { chartData } from '@/shared/lib/chartData';
import { chartOptions } from '@/shared/lib/chartOptions';
import type { ISuperCategoryItem } from '@/shared/types/transactionTypes';

export const usePieChartData = (categories: ISuperCategoryItem[]) => {
    const chartsData = chartData(categories);
    const chartOption = chartOptions(categories);

    return { chartsData, chartOption };
};
