export const TransactionTypes = {
    Refill: 'Пополнение',
    WriteOff: 'Списание',
    Transfer: 'Перевод',
} as const;

export type TTransactionType = (typeof TransactionTypes)[keyof typeof TransactionTypes];
