import type { ReactNode } from 'react';

import { DebitCards } from '../../DebitCards';

import { IconCreateCardFirst } from '@/shared/ui/BtnCreateCard/icon/btn-create-cart-1';
import { IconCreateCardTwo } from '@/shared/ui/BtnCreateCard/icon/btn-create-cart-2';
import { IconCreateCardThree } from '@/shared/ui/BtnCreateCard/icon/btn-create-cart-3';

export interface ICreateCard {
    id: string;
    icon: ReactNode;
    text: ReactNode;
    modalContent?: React.JSX.Element;
}

export const createCards: ICreateCard[] = [
    {
        id: 'debCard',
        icon: <IconCreateCardFirst />,
        text: (
            <>
                <span>Оформить</span>
                <br />
                <span>дебетовую карту</span>
            </>
        ),
        modalContent: DebitCards(),
    },
    {
        id: 'creditCard',
        icon: <IconCreateCardTwo />,
        text: (
            <>
                <span>Оформить</span>
                <br />
                <span>кредитную карту</span>
            </>
        ),
    },
    {
        id: 'score',
        icon: <IconCreateCardThree />,
        text: (
            <>
                <span>Открыть счет</span>
            </>
        ),
    },
];
