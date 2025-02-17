import { TransactionHistoryDate } from './TransactionHistoryDate';

import styles from './TransactionHistory.module.scss';

import { useGroupedData } from '@/app/hooks/useGroupedData';
import { filterTransaction } from '@/shared/lib/filterTransactions';
import { sortByDate } from '@/shared/lib/sortByDate';
import type { ITransaction } from '@/shared/types/transactionTypes';

export interface ITransactionHistoryProps {
    transactions?: ITransaction[];
}

export const TransactionHistory = ({
    transactions,
    currentFilter,
}: ITransactionHistoryProps & { currentFilter: string }): JSX.Element | null => {
    const safeTransactions = transactions || [];
    const filteredTransactions: ITransaction[] = filterTransaction(safeTransactions, currentFilter);
    const sortedTransactions = sortByDate(filteredTransactions, 'date', 'desc');

    const groupedTransactions = useGroupedData<ITransaction>(sortedTransactions, (transaction) => transaction.date);

    if (safeTransactions.length === 0) {
        return null;
    }

    return (
        <div>
            <div className={styles.historyContainer}>
                {groupedTransactions.map(({ groupKey: date, items: transactionsForDate }) => (
                    <TransactionHistoryDate key={date} date={date} transactionForDate={transactionsForDate} />
                ))}
            </div>
        </div>
    );
};
