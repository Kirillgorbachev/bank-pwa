import { useEffect, useState } from 'react';

import { getContacts, isContactsApiAvailable } from '../api/contactsApi';
import type { IContact } from '../typs/types';

export const useReadContacts = () => {
    const [contact, setContact] = useState<IContact[]>([]);
    const [log, setLog] = useState<string>('');
    const [isAvailable, setIsAvailable] = useState<boolean>(false);

    useEffect(() => {
        setIsAvailable(isContactsApiAvailable());
    }, []);

    const readContacts = async () => {
        try {
            const fetchedContacts = await getContacts();
            setContact(fetchedContacts);
            setLog(`Найдено ${fetchedContacts.length} контактов.`);

            if (fetchedContacts.length > 0) {
                const firstContact = fetchedContacts[0];
                setLog(`Первый контакт: ${firstContact.name?.join(' ')} (${firstContact.tel?.split(', ')})`);
            }
        } catch (err: any) {
            setLog(`Не удалось получить контакты: ${err.message}`);
        }

        console.log(log);
    };

    return { contact, isAvailable, log, readContacts };
};
