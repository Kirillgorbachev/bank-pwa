import { useEffect, useState } from 'react';

import { Modal } from '../Modal';

import cls from './PhoneInputContainer.module.scss';

import { useBrowserInfo } from '@/app/hooks/useBrauserInfo';
import { useDeviceOS } from '@/app/hooks/useDeviceOS';
import { usePhoneInputFeature } from '@/feature/contact/hooks/usePhoneInputFeature';
import { useReadContacts } from '@/feature/contact/hooks/useReadContacts';
import { IosInstruction } from '@/feature/contact/ui/IosInstruction';
import { useGetContactsQuery } from '@/feature/phoneTransfer/api/ContactsApi';
import { PhoneIcon } from '@/shared/assets/icons/PhoneIcon';
import { ContactsList } from '@/shared/ui/ContactsList/ui/contactsList/ContactsList';

interface IPhoneInputProps {
    phone: string;
    onPhoneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPhoneSelect: (phoneNumber: string) => void;
}

export const PhoneInputContainer = ({ phone, onPhoneChange, onPhoneSelect }: IPhoneInputProps) => {
    const { data: contacts = [], isLoading } = useGetContactsQuery();
    const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
    const [localPhone, setLocalPhone] = useState(phone);
    const { readContacts, log, contact } = useReadContacts();
    const { showContact, isInstructionVisible, handleInputClick, closeInstruction, setShowContact } =
        usePhoneInputFeature();
    const deviceInfo = useDeviceOS();
    const brauserInfo = useBrowserInfo();
    console.log(deviceInfo.osName, brauserInfo);
    console.log(log);

    useEffect(() => {
        console.log('showContact', showContact);

        if (showContact) {
            readContacts().then(() => {
                console.log('readContacts');
                setShowContact(false);
            });
        }
    }, [showContact, readContacts, setShowContact]);

    useEffect(() => {
        if (contact?.[0]?.tel?.[0]) {
            console.log('contact?.[0]?.tel?.[0]', contact?.[0]?.tel?.[0]);
            const phoneFromContact = contact[0].tel;
            console.log('phoneFromContact', phoneFromContact);
            setLocalPhone(phoneFromContact);
            onPhoneSelect(phoneFromContact);
        }
    }, [contact, onPhoneSelect]);

    const handleContactClick = (id: string, phoneNumber: string) => {
        setSelectedContactId(id);
        setLocalPhone(phoneNumber);
        onPhoneSelect(phoneNumber);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalPhone(event.target.value);
        onPhoneChange(event);
    };

    return (
        <div className={cls.recipientContainer}>
            <label className={cls.label} htmlFor="recipientPhone">
                Кому перевести
            </label>
            <div className={cls.inputContainer}>
                <span onClick={handleInputClick}>
                    <PhoneIcon />
                </span>
                <input
                    type="text"
                    placeholder="Введите номер телефона"
                    value={localPhone}
                    onChange={handleInputChange}
                    className={cls.input}
                />
            </div>
            <ContactsList
                contacts={contacts}
                isLoading={isLoading}
                onContactClick={handleContactClick}
                selectedContactId={selectedContactId}
            />
            <Modal
                isModalOpen={isInstructionVisible}
                closeModal={() => {
                    closeInstruction();
                }}
                modalStyleType="long">
                <IosInstruction />
            </Modal>
        </div>
    );
};
