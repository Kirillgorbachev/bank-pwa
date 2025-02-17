import { mapIcon } from './iconMapper';

import type { TIconCardsKey } from '@/entities/Card/const/cardsKeys';
import type { ICard } from '@/entities/Card/model/CardsSlice';

export const formatCardOptions = (cardOptions: ICard[]) =>
    cardOptions.map((card: ICard) => ({
        value: card.value,
        label: card.label,
        balance: card.balance,
        icon: mapIcon(card.icon as TIconCardsKey),
    }));
