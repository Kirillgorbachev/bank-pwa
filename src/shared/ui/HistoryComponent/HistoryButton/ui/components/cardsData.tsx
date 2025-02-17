import type { ReactNode } from 'react';

import iconStoriesFirst from '@/shared/ui/HistoryComponent/HistoryButton/icons/icon-stories-1.png';
import iconStoriesTwo from '@/shared/ui/HistoryComponent/HistoryButton/icons/icon-stories-2.png';
import iconStoriesThree from '@/shared/ui/HistoryComponent/HistoryButton/icons/icon-stories-3.png';

interface ICardData {
    id: string;
    icon: string;
    text: ReactNode;
}

export const cardsData: ICardData[] = [
    {
        id: 'pay-qr',
        icon: iconStoriesFirst,
        text: (
            <>
                <span>Платите</span>
                <br />
                <span>по QR-коду</span>
            </>
        ),
    },
    {
        id: 'points',
        icon: iconStoriesTwo,
        text: (
            <>
                <span>Баллы</span>
                <br />
                <span>за покупки</span>
            </>
        ),
    },
    {
        id: 'invest',
        icon: iconStoriesThree,
        text: (
            <>
                <span>Начните</span>
                <br />
                <span>инвестировать</span>
            </>
        ),
    },
];
