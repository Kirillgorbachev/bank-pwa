import classNames from 'classnames';

import cls from './NotificationButton.module.scss';

import { Notification } from '@/shared/assets/icons/Notification';

interface INotificationButtonProps {
    className?: string;
    notificationCount: number;
}

export const NotificationButton = ({ className, notificationCount }: INotificationButtonProps) => (
    <button className={classNames(cls.notificationButton, className)}>
        <Notification />
        {notificationCount > 0 && <p className={cls.notificationCount}>{notificationCount}</p>}
    </button>
);
