import cls from './ContactsList.module.scss';

import { Contact } from '@/shared/ui/ContactsList/ui/contact/Contact';

interface IContact {
    id: string;
    name: string;
    phoneNumber: string;
    avatar?: string;
}

interface IContactsListProps {
    contacts: IContact[];
    isLoading: boolean;
    onContactClick: (id: string, phoneNumber: string) => void;
    selectedContactId: string | null;
}

export const ContactsList = ({ contacts, isLoading, onContactClick, selectedContactId }: IContactsListProps) => (
    <div className={cls.contactsList}>
        {isLoading && <p>Загрузка...</p>}
        {!isLoading && contacts.length === 0 && <p>Контакты не найдены.</p>}
        {contacts.map((contact) => (
            <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                phoneNumber={contact.phoneNumber}
                avatar={contact.avatar}
                selectedContactId={selectedContactId}
                onContactClick={onContactClick}
            />
        ))}
    </div>
);
