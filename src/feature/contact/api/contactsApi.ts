import type { IContact, INavigatorExtended } from '../typs/types';

const navigatorExtended = navigator as INavigatorExtended;

export const isContactsApiAvailable = (): boolean => {
    const hasModernApi = typeof navigatorExtended.contacts?.select === 'function';
    const hasOldApi = typeof navigatorExtended.mozContact?.find === 'function';

    return hasModernApi || hasOldApi;
};

export const getContacts = async (): Promise<IContact[]> => {
    const api = navigatorExtended.contacts;

    if (api && typeof api.select === 'function') {
        const contacts = await api.select(['name', 'tel'], { multiple: false });

        return contacts.map((contact) => ({
            name: contact.name,
            tel: Array.isArray(contact.tel) ? contact.tel[0] : contact.tel,
        }));
    }

    throw new Error('API контактов не поддерживается.');
};

export const getOldContacts = async (): Promise<IContact[]> => {
    const api = navigatorExtended.mozContact;

    if (api && typeof api.find === 'function') {
        const criteria = { sortBy: 'familyName', sortOrder: 'ascending' };
        const rawContacts = await api.find(criteria);

        return rawContacts.map((contact) => ({
            ...contact,
            tel: Array.isArray(contact.tel) ? contact.tel[0] : contact.tel,
        }));
    }

    throw new Error('Устаревший API контактов не поддерживается.');
};
