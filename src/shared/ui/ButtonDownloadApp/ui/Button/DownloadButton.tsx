import { AppIcon } from '@/shared/assets/icons/AppIcon';
import { IconArrow } from '@/shared/ui/ButtonDownloadApp/icons/icon-arrow';

import cls from '@/shared/ui/ButtonDownloadApp/ui/Button/ButtonDownloadApp.module.scss';

interface IDownloadButtonProps {
    onClick: () => void;
}

export function DownloadButton({ onClick }: IDownloadButtonProps) {
    return (
        <button className={cls.buttonContainer} onClick={onClick}>
            <div className={cls.appIcon}>
                <AppIcon />
            </div>
            <p className={cls.buttonText}></p>
            <div className={cls.appArrow}>
                <IconArrow />
            </div>
        </button>
    );
}
