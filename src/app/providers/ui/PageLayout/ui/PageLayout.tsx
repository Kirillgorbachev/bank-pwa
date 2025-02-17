import { useState } from 'react';
import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';

import cls from './PageLayout.module.scss';

import { routes } from '@/shared/const/router/router';
import { NotificationButton } from '@/shared/ui/NotificationButton';
import { SearchInput } from '@/shared/ui/SearchInput';
import { Sidebar } from '@/widgets/Sidebar';

export const PageLayout = () => {
    const location = useLocation();

    const isChatPage = location.pathname === '/chat';
    const isProfilePage = location.pathname.includes(routes.profile);

    const [notificationCount, setNotificationCount] = useState(0);

    const onNotificationSent = () => {
        setNotificationCount((prevCount) => prevCount + 1);
        console.log('счетчик запущен');
        console.log(notificationCount);
    };

    return (
        <div className={cls.main_layout}>
            <Sidebar className={cls.sidebar} notificationCount={notificationCount} />
            <div className={cls.main_layout_content}>
                <header className={`${cls.header} ${isChatPage && cls.no_margin}`}>
                    {!isChatPage && !isProfilePage && (
                        <>
                            <SearchInput />
                            <NotificationButton
                                className={cls.notificationButton}
                                notificationCount={notificationCount}
                            />
                        </>
                    )}
                </header>
                <main className={`${cls.container} ${isChatPage && cls.no_margin}`}>
                    <Outlet context={{ onNotificationSent }} />
                </main>
            </div>
        </div>
    );
};
