import { Clock } from '../../../shared/ui/Icon/assets/Clock';
import { Home } from '../../../shared/ui/Icon/assets/Home';
import { Message } from '../../../shared/ui/Icon/assets/Message';
import { Payments } from '../../../shared/ui/Icon/assets/Payments';
import { Service } from '../../../shared/ui/Icon/assets/Service';

import { MenuItem } from './MenuItem';

import cls from './Menu.module.scss';

import { AppRoutesEnum } from '@/shared/const/router/router';

export const Menu = () => {
    const content = [
        { icon: Home, name: 'Главный', link: '/' },
        { icon: Clock, name: 'История', link: AppRoutesEnum.History },
        { icon: Payments, name: 'Платежи', link: AppRoutesEnum.Payments },
        { icon: Message, name: 'Чат', link: AppRoutesEnum.Chat },
        { icon: Service, name: 'Сервисы', link: AppRoutesEnum.ServicePage },
    ];

    return (
        <div className={cls.menu}>
            {content.map((item) => (
                <MenuItem icon={item.icon} name={item.name} link={item.link} key={item.name} />
            ))}
        </div>
    );
};
