import { InstructionExportIcon } from '@/shared/ui/ButtonDownloadApp/iconsInstructions/instruction-export';
import manualAdaptivFirst from '@/shared/ui/ButtonDownloadApp/iconsInstructions/manual-image-adaptiv-1.png';
import manualAdaptivSecond from '@/shared/ui/ButtonDownloadApp/iconsInstructions/manual-image-adaptiv-2.png';

import cls from '../ui/ContentDownloadIOS.module.scss';

export const mobileSteps = [
    {
        stepNumber: 1,
        text: (
            <>
                <br />
                Нажмите «Поделиться» <InstructionExportIcon className={cls.icon} /> в нижнем меню <br />
                браузера
            </>
        ),
        imageSrc: manualAdaptivFirst,
        imageAlt: 'Manual Adaptiv 1',
    },
    {
        stepNumber: 2,
        text: (
            <>
                <br />
                Выберите в меню — На экран «Домой» <br /> и нажмите, чтобы добавить
            </>
        ),
        imageSrc: manualAdaptivSecond,
        imageAlt: 'Manual Adaptiv 2',
    },
];
