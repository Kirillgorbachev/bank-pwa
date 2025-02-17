import classNames from 'classnames';

import { Menu } from '../../Menu';

import cls from './Sidebar.module.scss';

import { User } from '@/entities/user/ui/User';
import { ExitButton } from '@/shared/ui/ExitButton';
import { NotificationButton } from '@/shared/ui/NotificationButton';
import { SettingsButton } from '@/shared/ui/SettingsButton';

interface ISidebarProps {
    className: string;
    notificationCount: number;
}

export const Sidebar = ({ className, notificationCount }: ISidebarProps) => {
    const sidebarClassName = classNames(cls.sidebar, className);

    return (
        <aside className={sidebarClassName}>
            <div className={cls.content}>
                <div className={cls.controls}>
                    <NotificationButton notificationCount={notificationCount} />
                    <SettingsButton />
                </div>
                <div className={cls.user_content}>
                    <User />
                </div>
                <Menu />
            </div>
            <div className={cls.exit_container}>
                <ExitButton />
            </div>
        </aside>
    );
};
