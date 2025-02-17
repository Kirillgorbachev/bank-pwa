import type { TTransactionType } from '../ui/TransactionHistory/ui/TransactionType';

import type { TSuperCategory } from './superCategories';

export interface ITransaction {
    id: string;
    type: TTransactionType;
    amount: number;
    points: number;
    date: string;
    category: string;
    superCategory: TSuperCategory;
    source: string;
    cardLabel: string;
}

export interface ISuperCategoryItem {
    superCategory: TSuperCategory;
    amount: number;
}
