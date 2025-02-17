import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReAuth } from './baseQueries';

export const baseApi = createApi({
    reducerPath: 'baseApiWithAuth',
    baseQuery: baseQueryWithReAuth,
    tagTypes: ['Cards', 'User', 'Messages', 'Contacts', 'Goals', 'PaymentSystems', 'Documents', 'CardsType'],
    endpoints: () => ({}),
});
