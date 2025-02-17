import { useAppSelector } from '@/app/hooks/useAppSelector';

import { selectFirstDateId, selectLastDateId } from '@/entities/Calendar/model/CalendarSlice';
import { useGetCardsQuery } from '@/entities/Card/api/CardsApi';
import { formatMonthName } from '@/shared/lib/dateUtils';
import { filterByPeriod, filterByType } from '@/shared/lib/filterTransactions';
import { getNoTransactionMessage } from '@/shared/lib/formatDate';
import { ListCategoriesComponent } from '@/shared/ui/ListCategoriesComponent';
import { PieChartCard } from '@/shared/ui/PieChartCard';

interface IAnalysisTransactionProps {
    selectedType: 'wastes' | 'deposits';
    selectedMonth: string;
}

export const AnalysisTransaction = ({ selectedType, selectedMonth }: IAnalysisTransactionProps) => {
    const selectedPeriodFirst = useAppSelector(selectFirstDateId);
    const selectedPeriodLast = useAppSelector(selectLastDateId);
    const [month, year] = selectedMonth.split(' ');
    const { data: options = [] } = useGetCardsQuery();
    const allTransactions = options.flatMap((card) => card.info || []);
    const transactionFilteredByType = filterByType(allTransactions, selectedType);
    const allFilteredTransactions = filterByPeriod(
        transactionFilteredByType,
        year,
        month,
        selectedPeriodFirst,
        selectedPeriodLast,
    );

    const nameMonth = formatMonthName(selectedPeriodFirst, month);
    const noTransaction = getNoTransactionMessage(selectedType, nameMonth);

    return (
        <>
            {allFilteredTransactions.length === 0 ? (
                <div>{noTransaction}</div>
            ) : (
                <>
                    <PieChartCard transactions={allFilteredTransactions} nameMonth={nameMonth} />
                    <ListCategoriesComponent transactions={allFilteredTransactions} selectedType={selectedType} />
                </>
            )}
        </>
    );
};
