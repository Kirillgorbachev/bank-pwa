import { useMemo, useState } from 'react';

import './HistoryPage.scss';

import { getCountPoints } from '@/app/utils/getCountPoints';
import { mapTransactionsWithLabels } from '@/app/utils/mapTransactionsWithLabels';
import { useGetCardsQuery } from '@/entities/Card/api/CardsApi';
import { FinancialAnalysisButton } from '@/shared/ui/FinancialAnalysisButton';
import { PointComponent } from '@/shared/ui/Points';
import { TitleComponent } from '@/shared/ui/Title';
import { TransactionFilter } from '@/shared/ui/TransactionFilter';
import { TransactionHistory } from '@/shared/ui/TransactionHistory';

const HistoryPage = () => {
    const { data: options = [] } = useGetCardsQuery();
    const [currentFilter, setCurrentFilter] = useState('Все');

    const totalPoints = getCountPoints(options);
    console.log(options);

    const allTransactionsWithLabels = useMemo(() => mapTransactionsWithLabels(options), [options]);

    const handleFilterChange = (filter: string) => {
        setCurrentFilter(filter);
    };

    return (
        <div className="history-container">
            <TitleComponent text="История" className="history-title" />
            <div className="history-transactions">
                <PointComponent points={totalPoints} accrualDate="31 октября" />
                <FinancialAnalysisButton />
            </div>
            <TransactionFilter onFilterChange={handleFilterChange} />
            <div>
                <TransactionHistory transactions={allTransactionsWithLabels} currentFilter={currentFilter} />
            </div>
        </div>
    );
};

export default HistoryPage;
