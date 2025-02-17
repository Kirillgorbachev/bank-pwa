import { toast } from 'react-toastify';

import { InstructionPwaIcon } from '@/shared/ui/ButtonDownloadApp/iconsInstructions/instruction-pwa';
import { AndroidImage } from '@/shared/ui/ButtonDownloadApp/iconsInstructions/instructions-angroid';
import { RuStoreImage } from '@/shared/ui/ButtonDownloadApp/iconsInstructions/instructions-rustore';
import { useDeviceDetect } from '@/shared/ui/ButtonDownloadApp/utils/useDeviceDetect';

import { HeaderComponent } from '../components/HeaderComponent';
import { StepComponent } from '../components/StepComponent';
import { StoreContainer } from '../components/StoreContainer';

import cls from './ContentDownloadAndroid.module.scss';

import { Button } from '@/shared/ui/Button';

interface IDownloadAndroid {
    onClick?: () => void;
}

export const ContentDownloadAndroid = ({ onClick }: IDownloadAndroid) => {
    const { isMobile } = useDeviceDetect();

    const titleText = isMobile ? 'Cкачайте наше приложение,\nдля этого перейдите на сервис' : 'Как скачать на Android';

    const handleButtonClick = () => {
        toast.info('Здесь должна была быть ссылка)');
    };

    return (
        <div className={`${cls.contentDownloadFirst} ${cls.contentDownloadFirstAndroid}`} onClick={onClick}>
            {isMobile && <div className={cls.mobileHeaderBar} />}
            <HeaderComponent title={titleText} icon={!isMobile && <AndroidImage />} />
            <StepComponent
                stepNumber={1}
                text={
                    <>
                        Откройте с телефона сервис RuStore – это официальный <br />
                        магазин приложений
                    </>
                }
            />
            <StoreContainer icon={<RuStoreImage />} className={cls.storeContainer} />
            <div className={cls.stepTwoContainer}>
                <StepComponent stepNumber={2} text="Скачайте приложение «PWA Surf»" />
                <StoreContainer icon={<InstructionPwaIcon />} />
            </div>
            {isMobile && (
                <Button title="Перейти для скачивания" className={cls.downloadButton} onClick={handleButtonClick} />
            )}
        </div>
    );
};
