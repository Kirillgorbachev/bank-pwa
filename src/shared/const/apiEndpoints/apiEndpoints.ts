export const API_ENDPOINTS = {
    MESSAGES: '/messages',
    PAYMENT_SYSTEMS: '/paymentSystems',
    GOALS: '/goals',
    CONTACTS: '/contacts',
    USERS: '/users',
    CARDS: '/cards',
    DOCUMENTS: '/documents',
    DEBITCARDSTYPE: '/debitCardsType',
};

export const API_BASE_URL =
    window.location.hostname === 'localhost'
        ? 'http://localhost:3001'
        : 'https://surf-frontend-bootcamp-back.surfstudio.ru/';
