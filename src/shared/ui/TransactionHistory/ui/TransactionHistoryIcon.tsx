import { TransactionTypes, type TTransactionType } from './TransactionType';

import styles from './TransactionHistory.module.scss';

import { RefillIcon } from '@/shared/assets/icons/RefillIcon';
import { WriteOffIcon } from '@/shared/assets/icons/WriteOffIcon';

interface ITransactionHistoryIconProps {
    type: TTransactionType;
}

export const TransactionHistoryIcon = ({ type }: ITransactionHistoryIconProps) => (
    <div className={styles.icon}>
        {type === TransactionTypes.Transfer || type === TransactionTypes.Refill ? <RefillIcon /> : <WriteOffIcon />}
    </div>
);
