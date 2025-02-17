import type { ITransaction } from '@/shared/types/transactionTypes';

interface ICardTransaction {
    label: string;
    info?: ITransaction[];
}

export const mapTransactionsWithLabels = (options: ICardTransaction[]): ITransaction[] =>
    options.flatMap(
        (card) =>
            card.info?.map((transaction) => ({
                ...transaction,
                cardLabel: card.label,
            })) || [],
    );
