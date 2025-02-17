import type { ReactNode } from 'react';

import cashbackIconAdaptiv from '../icons/adaptiv-icon.png';
import cashbackIcon1 from '../icons/cashback-icon-1.png';
import cashbackIcon2 from '../icons/cashback-icon-2.png';
import cashbackIcon3 from '../icons/cashback-icon-3.png';

import cls from './AddBtnCashbackFriends.module.scss';

interface ICreateCard {
    id: string;
    icon: ReactNode;
    text: ReactNode;
}

export const cashbackCards: ICreateCard[] = [
    {
        id: 'cash-bonus',
        icon: (
            <div className={cls.iconContainer}>
                <div className={cls.desktopIcons}>
                    <img src={cashbackIcon1} alt="Cashback Icon 1" />
                    <img src={cashbackIcon2} alt="Cashback Icon 2" />
                    <img src={cashbackIcon3} alt="Cashback Icon 3" />
                </div>
                <div className={cls.mobileIcon}>
                    <img src={cashbackIconAdaptiv} alt="Cashback Mobile Icon" />
                </div>
            </div>
        ),
        text: (
            <>
                <span>Кэшбек</span>
                <br />
                <span>и бонусы</span>
            </>
        ),
    },
];
