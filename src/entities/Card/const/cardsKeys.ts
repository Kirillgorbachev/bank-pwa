export const IconCardsKeys = {
    MASTERCARD: 'MastercardLogo',
    VISA: 'VisaLogo',
    CREDITCARD: 'card',
    PIGGYBANK: 'bank',
    MIR: 'MirLogo',
} as const;

export type TIconCardsKey = (typeof IconCardsKeys)[keyof typeof IconCardsKeys];
