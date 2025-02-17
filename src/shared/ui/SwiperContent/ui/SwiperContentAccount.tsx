import './SwiperContent.scss';

import type { ICard } from '@/entities/Card/model/CardsSlice';
import { AccountsTopContent } from '@/shared/ui/AccountsTopContent';
import { CardsContent } from '@/shared/ui/CardsContent';

interface ICardDisplayProps {
    items: ICard[];
}

export const SwiperContentAccount = ({ items }: ICardDisplayProps) => (
    <div className="content-container">
        <div className="top-content">
            <AccountsTopContent />
        </div>
        <CardsContent items={items} isPasswordVisible={false} />
    </div>
);
