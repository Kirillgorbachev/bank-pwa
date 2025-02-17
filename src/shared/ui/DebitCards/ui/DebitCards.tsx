import { DebitCardList } from '../../DebitCardList';
import { TitleComponent } from '../../Title';

import cls from './DebitCards.module.scss';

export const DebitCards = () => (
    <div className={cls.debitCards}>
        <TitleComponent text="Дебетовые карты" />
        <DebitCardList />
    </div>
);
