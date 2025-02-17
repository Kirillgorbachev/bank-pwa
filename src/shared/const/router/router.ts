export const routes = {
    login: '/login',
    history: '/history',
    payment: '/payments',
    service: '/service',
    chat: '/chat',
    profile: '/profile',
    PWAFeatures: '/PWAFeatures',
};

export const notFoundRoute = '*';

export enum RootRoutesEnum {
    Login = 'login',
    NotFound = 'not_found',
    PageLayout = 'page_layout',
}

export enum AppRoutesEnum {
    Main = 'main',
    History = 'history',
    Payments = 'payments',
    Chat = 'chat',
    ServicePage = 'service',
    ProfilePage = 'profile',
    PWAFeaturesPage = 'pwafeatures',
}
