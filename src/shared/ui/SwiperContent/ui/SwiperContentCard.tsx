import './SwiperContent.scss';

import { useHideInput } from '@/app/hooks/useHideInput';
import type { ICard } from '@/entities/Card/model/CardsSlice';
import { CardsContent } from '@/shared/ui/CardsContent';
import { CardsTopContent } from '@/shared/ui/CardsTopContent';

export interface ICardDisplayProps {
    items: ICard[];
}

export const SwiperContentCard = ({ items }: ICardDisplayProps) => {
    const totalValue = items.reduce((value, currentValue) => value + Number(currentValue.balance), 0);
    const totalPoints = items.reduce((point, currentPoint) => point + Number(currentPoint.points), 0);
    const { isPasswordVisible, togglePasswordVisibility } = useHideInput();

    return (
        <div className="content-container">
            <div className="top-content">
                <CardsTopContent
                    total={String(totalValue)}
                    totalPoints={String(totalPoints)}
                    isPasswordVisible={isPasswordVisible}
                    togglePasswordVisibility={togglePasswordVisibility}
                />
            </div>
            <CardsContent items={items} isPasswordVisible={isPasswordVisible} />
        </div>
    );
};
