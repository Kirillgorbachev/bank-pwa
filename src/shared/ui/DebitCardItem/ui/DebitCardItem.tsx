import classNames from 'classnames';

import type { TIconCardsTypeKey } from '../../DebitCardList/const/cardsTypeKeys';
import { mapCardTypeIcon } from '../../DebitCardList/utils/iconCardTypeMapper';

import cls from './DebitCardItem.module.scss';

export interface ICard {
    id: string;
    icon: TIconCardsTypeKey;
    name: string;
    description: string;
    maintenanceFee: number;
}

export interface IDebitCardItemProps {
    card: ICard;
    className?: string;
}

export const DebitCardItem = ({ card, className }: IDebitCardItemProps) => (
    <div className={classNames(cls.card, className)}>
        {mapCardTypeIcon(card.icon as TIconCardsTypeKey)}
        <div className={cls.content}>
            <h3 className={cls.title}>{card.name}</h3>
            <p className={cls.description}>{card.description}</p>
        </div>
    </div>
);
