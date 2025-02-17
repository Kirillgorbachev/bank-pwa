import cls from './BtnCreateCard.module.scss';

import type { ICreateCard } from '@/shared/ui/BtnCreateCard/utils/createCard';
import { CardComponent } from '@/shared/ui/ButtonComponent';

export const CardList = ({ cards, onCardClick }: { cards: ICreateCard[]; onCardClick: (id: string) => void }) => (
    <div className={cls.cardContainer}>
        {cards.map((card) => (
            <CardComponent
                className={cls.cardComponent}
                key={card.id}
                icon={card.icon}
                text={card.text}
                onClick={() => onCardClick(card.id)}
            />
        ))}
    </div>
);
