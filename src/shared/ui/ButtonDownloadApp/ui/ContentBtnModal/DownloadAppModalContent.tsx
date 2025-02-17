import { useEffect } from 'react';

import cls from './DownloadAppModalContent.module.scss';

import { ContentDownloadAndroid } from '@/shared/ui/ComtentDownloadAndroid/ui/ContentDownloadAndroid';
import { ContentDownloadIOS } from '@/shared/ui/ConentDownloadIOS/ui/ContentDownloadIOS';
import { TitleComponent } from '@/shared/ui/Title';

export const DownloadAppModalContent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cls.manualContent}>
            <TitleComponent className={cls.title} text="Скачать приложение на телефон" />
            <ContentDownloadAndroid />
            <ContentDownloadIOS />
        </div>
    );
};
