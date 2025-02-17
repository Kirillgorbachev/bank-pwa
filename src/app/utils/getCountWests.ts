import { calculateTotal } from '@/app/utils/calculateTotal';
import type { ITransaction } from '@/shared/types/transactionTypes';

export const getCountWests = (transactions: ITransaction[], type: string): number =>
    Math.abs(
        calculateTotal(
            transactions,
            (transaction) => transaction.type === type,
            (transaction) => transaction.amount || 0,
        ),
    );
