export interface ICardInfo {
    id: number;
    type: string;
    count: string;
    cardNumber: string;
}

export interface ICard {
    id: number;
    total?: string;
    totalPoints?: string;
    infoCards: ICardInfo[];
}

export interface IGoals {
    id: number;
    total: string;
    object: string;
    goalStatus: string;
}

export interface ICreateGoalPayload {
    total: string;
    object: string;
    goalStatus: string;
}

export interface IUpdateGoalPayload {
    id: number;
    total?: string;
    object?: string;
    goalStatus?: string;
}

export const Cards: ICard[] = [
    {
        id: 1,
        total: '48418',
        totalPoints: '543',
        infoCards: [
            { id: 1, type: 'Mastercard', count: '13649', cardNumber: '6009' },
            { id: 2, type: 'Visa Classic', count: '2324', cardNumber: '3467' },
        ],
    },
];

export const Accounts: ICard[] = [
    {
        id: 1,
        infoCards: [
            { id: 1, type: 'Card', count: '-42094', cardNumber: '3253' },
            { id: 2, type: 'Bank', count: '10000', cardNumber: '8578' },
        ],
    },
];

export const Goals: IGoals[] = [
    { id: 1, total: '300000', object: 'Vacation', goalStatus: '82' },
    { id: 2, total: '50000', object: 'Repair', goalStatus: '56' },
    { id: 3, total: '2000000', object: 'Car', goalStatus: '5' },
];
