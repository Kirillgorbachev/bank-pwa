import type { ReactNode } from 'react';

import safari from '../ui/iconsInstructions/safari.png';

interface IStep {
    stepNumber: number;
    text: ReactNode;
    imageSrc?: string;
    imageAlt?: string;
}

export const steps: IStep[] = [
    {
        stepNumber: 1,
        text: 'Откройте настройки телефона',
    },
    {
        stepNumber: 2,
        text: 'Нажмите на Safari',
        imageSrc: safari,
        imageAlt: 'Safari Icon',
    },
    {
        stepNumber: 3,
        text: 'Перейдите в раздел "Дополнения"',
    },
    {
        stepNumber: 4,
        text: 'Перейдите в раздел "Experimental Features"',
    },
    {
        stepNumber: 5,
        text: 'Включите "Contact Picker API"',
    },
];
