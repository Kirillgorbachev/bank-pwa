import type { ReactNode } from 'react';

import { IconPayOne } from '@/shared/ui/PaymentCardPay/icon/icon-pay-1';
import { IconPayTwo } from '@/shared/ui/PaymentCardPay/icon/icon-pay-2';
import { IconPayThree } from '@/shared/ui/PaymentCardPay/icon/icon-pay-3';

interface ICardPay {
    id: string;
    icon: ReactNode;
    text: ReactNode;
}

export const paymentCardPay: ICardPay[] = [
    {
        id: 'payCardQr',
        icon: <IconPayOne />,
        text: (
            <>
                <span>Оплата по QR</span>
            </>
        ),
    },
    {
        id: 'payCardAuto',
        icon: <IconPayTwo />,
        text: (
            <>
                <span>Автоплатежи</span>
                <br />
                <span>и шаблоны</span>
            </>
        ),
    },
    {
        id: 'payCardTelephone',
        icon: <IconPayThree />,
        text: (
            <>
                <span>Оплата</span>
                <br />
                <span>телефона</span>
            </>
        ),
    },
];
