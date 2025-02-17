export const SuperCategories = {
    Supermarkets: 'Супермаркет',
    Cretits: 'Кредиты и задолжности',
    Transfers: 'Переводы',
    Services: 'Обслуживание',
} as const;

export type TSuperCategory = (typeof SuperCategories)[keyof typeof SuperCategories];
export type TSuperCategoryKey = keyof typeof SuperCategories;
