import { useState } from 'react';

import { CardIssue } from '../../CardIssue';
import { DebitCardItem } from '../../DebitCardItem';

import cls from './DebitCardList.module.scss';

import { useGetCardsTypeQuery } from '@/shared/ui/DebitCardList/api/debitCardsTypeApi';

export const DebitCardList = () => {
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
    const { data: cardsTypeList = [] } = useGetCardsTypeQuery();

    // Функция для обработки клика на карту
    const handleCardClick = (cardId: string) => {
        setSelectedCardId(cardId);
    };

    // Если карта выбрана, находим её данные
    const selectedCard = cardsTypeList.find((card) => card.id === selectedCardId);

    return (
        <div className={cls.cardList}>
            {selectedCard ? (
                <CardIssue card={selectedCard} />
            ) : (
                cardsTypeList.map((card) => (
                    <div key={card.id} onClick={() => handleCardClick(card.id)}>
                        <DebitCardItem card={card} className={cls.cardItem} />
                    </div>
                ))
            )}
        </div>
    );
};
