import type { ReactNode } from 'react';

import cls from './PaymentCardTransfers.module.scss';

import { TransferIconOne } from '@/shared/ui/PaymentCardTransfers/icon/transfer-icon-1';
import { TransferIconTwo } from '@/shared/ui/PaymentCardTransfers/icon/transfer-icon-2';
import { TransferIconThree } from '@/shared/ui/PaymentCardTransfers/icon/transfer-icon-3';

interface ICardTransfers {
    id: string;
    icon: ReactNode;
    text: ReactNode;
}

export const paymentCardTransfers: ICardTransfers[] = [
    {
        id: 'transfersCard',
        icon: <TransferIconOne />,
        text: (
            <>
                <span className={cls.desktopOnly}>Перевод</span>
                <br className={cls.desktopOnly} />
                <span>По номеру телефона</span>
            </>
        ),
    },
    {
        id: 'transferBetweenAccounts',
        icon: <TransferIconTwo />,
        text: (
            <>
                <span>Между</span>
                <br />
                <span>счетами</span>
            </>
        ),
    },
    {
        id: 'transferCardDetails',
        icon: <TransferIconThree />,
        text: (
            <>
                <span>Перевод</span>
                <br />
                <span>по реквизитам</span>
            </>
        ),
    },
];
