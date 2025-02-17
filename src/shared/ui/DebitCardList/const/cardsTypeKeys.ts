export const IconCardsTypeKeys = {
    GoldCard: 'gold',
    SilverCard: 'silver',
    BlackCard: 'black',
} as const;

export type TIconCardsTypeKey = (typeof IconCardsTypeKeys)[keyof typeof IconCardsTypeKeys];
