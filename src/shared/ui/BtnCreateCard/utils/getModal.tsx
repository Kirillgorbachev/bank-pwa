import type { ICreateCard } from '@/shared/ui/BtnCreateCard/utils/createCard';

export const getModalContentById = (cardList: ICreateCard[], id: string) => {
    const foundCard = cardList.find((item) => item.id === id);

    if (!id) {
        return null;
    }

    if (!foundCard) {
        console.warn(`Card with id "${id}" not found.`);

        return null;
    }

    return foundCard.modalContent;
};
