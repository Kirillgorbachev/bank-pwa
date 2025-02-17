import { Pie } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

import styles from './PieChartCard.module.scss';

import { useGroupedData } from '@/app/hooks/useGroupedData';
import { usePieChartData } from '@/app/hooks/usePieChartData';
import { formatNumber } from '@/app/utils/formatNumber';
import { getCountWests } from '@/app/utils/getCountWests';
import type { ISuperCategoryItem, ITransaction } from '@/shared/types/transactionTypes';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IPieChartCardProps {
    transactions: ITransaction[];
    nameMonth: string;
}

export const PieChartCard = ({ transactions, nameMonth }: IPieChartCardProps) => {
    const safeTransactions = transactions || [];
    let countWests = 0;
    let typeTransaction = 'Траты';

    if (safeTransactions[0].amount < 0) {
        countWests = getCountWests(safeTransactions, 'Списание');
    } else {
        typeTransaction = 'Зачисления';
        countWests = getCountWests(safeTransactions, 'Пополнение');
    }

    const groupedData = useGroupedData(safeTransactions, (item) => item.superCategory);
    const categories = groupedData.map(
        (group) =>
            ({
                superCategory: group.groupKey,
                amount: group.items.reduce((sum, item) => sum + item.amount, 0),
            }) as ISuperCategoryItem,
    );

    const { chartsData, chartOption } = usePieChartData(categories);

    if (safeTransactions.length === 0) {
        return null;
    }

    return (
        <div className={styles.PieChartCard}>
            <div className={styles.PieChartContent}>
                <h3>
                    {typeTransaction} {nameMonth}
                </h3>
                <p>{formatNumber(countWests)} ₽</p>
            </div>
            <div className={styles.Pie}>
                <Pie data={chartsData} options={chartOption} />
            </div>
        </div>
    );
};
