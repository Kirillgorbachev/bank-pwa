import cls from './ContactSelectorButton.module.scss';

import { ContactIcon } from '@/shared/assets/icons/ContactIcon';

interface IContactSelectorButtonProps {
    onClick: () => void;
    isActive: boolean;
}

export const ContactSelectorButton = ({ onClick, isActive }: IContactSelectorButtonProps) => (
    <div className={`${cls.contactButton} ${isActive ? cls.active : ''}`} onClick={onClick}>
        <span>
            <ContactIcon />
        </span>
        <p className={cls.buttonText}>Выбрать контакт</p>
    </div>
);
