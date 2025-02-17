import { Fragment } from 'react';

import { formatNumber } from '@/app/utils/formatNumber';
import { parseCard } from '@/app/utils/parseCard';
import { render } from '@/app/utils/render';
import type { ICard } from '@/entities/Card/model/CardsSlice';
import { MastercardIcon } from '@/shared/assets/icons/MastercardIcon';
import { PiggyBankIcon } from '@/shared/assets/icons/PiggyBankIcon';
import { VisaIcon } from '@/shared/assets/icons/VisaIcon';
import { CreditIcon } from '@/shared/assets/icons/СreditIcon';
import { TotalSumInput } from '@/shared/ui/TotalSumInput/ui/TotalSumInput';

type TCardType = 'Mastercard' | 'Card' | 'Bank';

const iconMap: Record<TCardType, JSX.Element> = {
    Mastercard: <MastercardIcon />,
    Card: <CreditIcon />,
    Bank: <PiggyBankIcon />,
};
const typeNames: Partial<Record<TCardType, string>> = {
    Card: 'Кредит',
    Bank: 'Копилка',
};

interface ICardContentProps {
    items: ICard[];
    isPasswordVisible: boolean;
}

export const CardsContent = ({ items, isPasswordVisible }: ICardContentProps) => (
    <div className="card-component">
        {items.map((infoCard) => {
            const { leftPart, rightPart } = parseCard(infoCard.label);
            const cardType = render(typeNames, leftPart, leftPart);

            return (
                <Fragment key={infoCard.id}>
                    {render(iconMap, infoCard.value, <VisaIcon />)}
                    <div className="card-component-info">
                        {cardType === 'Кредит' || cardType === 'Копилка' ? (
                            <h3 className="card-component-info-h3">{formatNumber(infoCard.balance)} ₽</h3>
                        ) : (
                            <div className="card-component-info-input">
                                <TotalSumInput total={infoCard.balance} isPasswordVisible={isPasswordVisible} />
                            </div>
                        )}
                        <p className="card-component-info-p">{cardType}</p>{' '}
                        <span className="card-component-info-span">•• {rightPart}</span>
                    </div>
                </Fragment>
            );
        })}
    </div>
);
