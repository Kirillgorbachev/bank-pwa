import styles from './TransactionHistory.module.scss';

import type { ITransaction } from '@/shared/types/transactionTypes';

export const TransactionHistoryAmount = ({ transaction }: { transaction: ITransaction }) => (
    <div>
        <div className={styles.amountConteiner}>
            <span className={transaction.amount > 0 ? styles.amountRefill : styles.amountWriteOff}></span>
            <div className={styles.amount}>
                {Math.abs(transaction.amount).toLocaleString('ru-RU', {
                    style: 'currency',
                    currency: 'RUB',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                })}
            </div>
        </div>
        <div className={styles.source}>{transaction.cardLabel}</div>
    </div>
);
