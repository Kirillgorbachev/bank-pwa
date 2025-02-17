import { InstructionAppleIcon } from '@/shared/ui/ButtonDownloadApp/iconsInstructions/instruction-apple';
import { useDeviceDetect } from '@/shared/ui/ButtonDownloadApp/utils/useDeviceDetect';

import { StepComponent } from '../components/StepBlock';

import cls from './ContentDownloadIOS.module.scss';

import { Button } from '@/shared/ui/Button';
import { HeaderComponentIOS } from '@/shared/ui/ConentDownloadIOS/components/HeaderComponentIOS';
import { mobileSteps } from '@/shared/ui/ConentDownloadIOS/components/mobileSteps';
import { steps } from '@/shared/ui/ConentDownloadIOS/components/stepsData';

interface IDownloadIOS {
    onClick?: () => void;
}

export const ContentDownloadIOS = ({ onClick }: IDownloadIOS) => {
    const { isMobile } = useDeviceDetect();

    const titleText = isMobile ? 'Добавьте иконку на\n главный экран' : 'Как скачать на IOS';
    const stepsToUse = isMobile ? mobileSteps : steps;

    const handleButtonClick = () => {
        console.log('Понятно');
    };

    return (
        <div className={`${cls.contentDownloadSecond} ${cls.contentDownloadSecondIOS}`} onClick={onClick}>
            {isMobile && <div className={cls.mobileHeaderBar} />}
            <HeaderComponentIOS title={titleText} icon={!isMobile && <InstructionAppleIcon />} />
            {stepsToUse.map(({ stepNumber, text, imageSrc, imageAlt }) => (
                <StepComponent
                    key={stepNumber}
                    stepNumber={stepNumber}
                    text={text}
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                />
            ))}
            {isMobile && <Button title="Понятно" className={cls.downloadButton} onClick={handleButtonClick} />}
        </div>
    );
};
