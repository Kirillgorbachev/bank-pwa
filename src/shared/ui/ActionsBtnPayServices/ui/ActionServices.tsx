import type { ReactNode } from 'react';

import { ActionServiceOne } from '@/shared/ui/ActionsBtnPayServices/icon/action-services-1';
import { ActionServiceTwo } from '@/shared/ui/ActionsBtnPayServices/icon/action-services-2';

interface ICardActions {
    id: string;
    icon: ReactNode;
    text: string;
}

export const actionsCardSevices: ICardActions[] = [
    {
        id: 'actionsCardCash',
        icon: <ActionServiceOne />,
        text: 'Снять наличные',
    },
    {
        id: 'actionsCardGetCash',
        icon: <ActionServiceTwo />,
        text: 'Запросить деньги',
    },
];
