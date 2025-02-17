import { monthName } from '../const/month/month';

import type { ITransaction } from '@/shared/types/transactionTypes';

export const filterTransaction = (transactions: ITransaction[], filter: string): ITransaction[] => {
    switch (filter) {
        case 'Пополнение':
            return transactions.filter((transaction) => transaction.amount > 0);
        case 'Списание':
            return transactions.filter((transaction) => transaction.amount < 0);
        case 'Все':
        default:
            return transactions;
    }
};

export const filterByType = (transactions: ITransaction[], selectedType: 'wastes' | 'deposits') =>
    transactions.filter((transaction) => (selectedType === 'wastes' ? transaction.amount < 0 : transaction.amount > 0));

export const filterByPeriod = (
    transactions: ITransaction[],
    year: string,
    month: string,
    selectedPeriodFirst?: string,
    selectedPeriodLast?: string,
) =>
    transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);

        if (selectedPeriodFirst && !selectedPeriodLast) {
            return transactionDate.toISOString().split('T')[0] === selectedPeriodFirst;
        }

        if (selectedPeriodFirst && selectedPeriodLast) {
            const firstDate = new Date(selectedPeriodFirst);
            const lastDate = new Date(selectedPeriodLast);

            return transactionDate >= firstDate && transactionDate <= lastDate;
        }

        return (
            transactionDate.getFullYear().toString() === year &&
            monthName[transactionDate.getMonth()].toLowerCase() === month
        );
    });
