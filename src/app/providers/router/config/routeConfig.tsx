import { PaymentPage } from '../../../../pages/PaymentPage';
import { PageLayout } from '../../ui/PageLayout';

import { ChatPage } from '@/pages/ChatPage';
import { HistoryPage } from '@/pages/HistoryPage';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { PWAFeaturesPage } from '@/pages/PWAFeaturesPage';
import { ServicePage } from '@/pages/ServicePage';
import { AppRoutesEnum, RootRoutesEnum, routes } from '@/shared/const/router/router';
import type { TAppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<RootRoutesEnum, TAppRoutesProps> = {
    [RootRoutesEnum.Login]: {
        path: routes.login,
        element: <LoginPage />,
    },
    [RootRoutesEnum.PageLayout]: {
        path: '/',
        element: <PageLayout />,
        nestedRoutes: {
            [AppRoutesEnum.Main]: {
                path: '/',
                element: <HomePage />,
                authOnly: true,
            },
            [AppRoutesEnum.History]: {
                path: routes.history,
                element: <HistoryPage />,
                authOnly: true,
            },
            [AppRoutesEnum.Payments]: {
                path: routes.payment,
                element: <PaymentPage />,
                authOnly: true,
            },
            [AppRoutesEnum.Chat]: {
                path: routes.chat,
                element: <ChatPage />,
                authOnly: true,
            },
            [AppRoutesEnum.ServicePage]: {
                path: routes.service,
                element: <ServicePage />,
                authOnly: true,
            },
            [AppRoutesEnum.ProfilePage]: {
                path: routes.profile,
                element: <ProfilePage />,
                authOnly: true,
            },
            [AppRoutesEnum.PWAFeaturesPage]: {
                path: routes.PWAFeatures,
                element: <PWAFeaturesPage />,
                authOnly: true,
            },
        },
    },
    [RootRoutesEnum.NotFound]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
