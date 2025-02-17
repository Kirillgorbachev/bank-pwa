import { TransactionHistoryAmount } from './TransactionHistoryAmount';
import { TransactionHistoryCategory } from './TransactionHistoryCategory';

import style from './TransactionHistory.module.scss';

import { formatDate } from '@/shared/lib/formatDate';
import type { ITransaction } from '@/shared/types/transactionTypes';
interface ITransactionHistoryDateProps {
    date: string;
    transactionForDate: ITransaction[];
}

export const TransactionHistoryDate = ({ date, transactionForDate }: ITransactionHistoryDateProps) => (
    <div key={date} className={style.dateGroup}>
        <h3 className={style.date}>{formatDate(date)}</h3>
        {transactionForDate.map((transaction) => (
            <div key={transaction.id} className={style.transaction}>
                <TransactionHistoryCategory transaction={transaction} />
                <TransactionHistoryAmount transaction={transaction} />
            </div>
        ))}
    </div>
);
