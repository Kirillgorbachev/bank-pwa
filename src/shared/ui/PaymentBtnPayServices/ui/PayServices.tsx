import type { ReactNode } from 'react';

import { PaySevicesOne } from '@/shared/ui/PaymentBtnPayServices/icon/pay-sevices-1';
import { PaySevicesTwo } from '@/shared/ui/PaymentBtnPayServices/icon/pay-sevices-2';
import { PaySevicesThree } from '@/shared/ui/PaymentBtnPayServices/icon/pay-sevices-3';
import { PaySevicesFour } from '@/shared/ui/PaymentBtnPayServices/icon/pay-sevices-4';
import { PaySevicesFive } from '@/shared/ui/PaymentBtnPayServices/icon/pay-sevices-5';

interface ICardSevices {
    id: string;
    icon: ReactNode;
    text: string;
}

export const paymentCardSevices: ICardSevices[] = [
    {
        id: 'servicesCardMobile',
        icon: <PaySevicesOne />,
        text: 'Мобильная связь',
    },
    {
        id: 'servicesCardInternet',
        icon: <PaySevicesTwo />,
        text: 'Интернет',
    },
    {
        id: 'servicesCardCom',
        icon: <PaySevicesThree />,
        text: 'Коммунальные услуги',
    },
    {
        id: 'servicesCardTv',
        icon: <PaySevicesFour />,
        text: 'Телевидение',
    },
    {
        id: 'servicesCardSocial',
        icon: <PaySevicesFive />,
        text: 'Социальные сети',
    },
];
