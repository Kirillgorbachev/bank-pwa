import { useState } from 'react';

import cls from './BannerMain.module.scss';

import clockBanner from '@/shared/ui/BannerMain/icons/clockBanner.png';
import { IconCloseBanner } from '@/shared/ui/BannerMain/icons/closeBanner';
import lineBanner from '@/shared/ui/BannerMain/icons/lineBanner.png';

export const BannerMainBtn = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={cls.bannerContainer}>
            <div className={cls.banner}>
                <div className={cls.textContainer}>
                    <h3 className={cls.bannerTitle}>Защита карты</h3>
                    <p className={cls.subText}>
                        Защитите карту <br /> при покупках онлайн
                    </p>
                </div>
                <img src={lineBanner} alt="Line Image" className={cls.lineBanner} />
                <img src={clockBanner} alt="Clock Image" className={cls.clockBanner} />
                <div className={cls.closeBtn} role="button" onClick={handleClose}>
                    <IconCloseBanner className={cls.closeBanner} />
                </div>
            </div>
        </div>
    );
};
