import type { ReactNode } from 'react';

import { InstructionExportIcon } from '@/shared/ui/ButtonDownloadApp/iconsInstructions/instruction-export';
import manualImageFirst from '@/shared/ui/ButtonDownloadApp/iconsInstructions/manual-image-1.png';
import manualImageSecond from '@/shared/ui/ButtonDownloadApp/iconsInstructions/manual-image-2.png';

import cls from '../ui/ContentDownloadIOS.module.scss';

interface IStep {
    stepNumber: number;
    text: ReactNode;
    link?: string;
    imageSrc?: string;
    imageAlt?: string;
}

export const steps: IStep[] = [
    {
        stepNumber: 1,
        text: 'Откройте с телефона сайт:',
        link: 'https://neobank.surf.dev/',
    },
    {
        stepNumber: 2,
        text: (
            <>
                Нажмите «Поделиться» <InstructionExportIcon className={cls.icon} /> в нижнем меню браузера
            </>
        ),
        imageSrc: manualImageFirst,
        imageAlt: 'Manual Image 1',
    },
    {
        stepNumber: 3,
        text: (
            <>
                Выберите в меню вариант «На экран «Домой» и нажмите, <br /> чтобы добавить иконку приложения на рабочий
                стол
            </>
        ),
        imageSrc: manualImageSecond,
        imageAlt: 'Manual Image 2',
    },
];
