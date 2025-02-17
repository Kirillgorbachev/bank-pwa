import cls from './Contact.module.scss';

import { Avatar } from '@/shared/ui/ContactsList/ui/avatar/Avatar';
import { formatPhoneNumber } from '@/shared/ui/ContactsList/utils/utils';

interface IContactProps {
    id: string;
    name: string;
    phoneNumber: string;
    avatar?: string;
    selectedContactId: string | null;
    onContactClick: (id: string, phoneNumber: string) => void;
}

export const Contact = ({ id, name, phoneNumber, avatar, selectedContactId, onContactClick }: IContactProps) => {
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    return (
        <div
            key={id}
            className={`${cls.contactCard} ${selectedContactId === id ? cls.selected : ''}`}
            onClick={() => onContactClick(id, formattedPhoneNumber)}>
            <Avatar avatar={avatar} name={name} />
            <p className={cls.contactName}>{name}</p>
            <p className={cls.contactPhone}>{formattedPhoneNumber}</p>
        </div>
    );
};
