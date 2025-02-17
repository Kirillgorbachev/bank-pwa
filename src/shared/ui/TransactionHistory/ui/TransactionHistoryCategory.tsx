import { TransactionHistoryIcon } from './TransactionHistoryIcon';

import styles from './TransactionHistory.module.scss';

import type { ITransaction } from '@/shared/types/transactionTypes';

export const TransactionHistoryCategory = ({ transaction }: { transaction: ITransaction }) => (
    <div className={styles.categoryConteiner}>
        <TransactionHistoryIcon type={transaction.type} />
        <div>
            <div className={styles.category}>{transaction.category}</div>
            <div className={styles.type}>{transaction.type}</div>
        </div>
    </div>
);
