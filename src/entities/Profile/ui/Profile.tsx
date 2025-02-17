import cls from './Profile.module.scss';

import { useModal } from '@/app/hooks/useModal';
import { DocumentList } from '@/entities/DocumentList';
import { EditingProfileModal } from '@/entities/EditingProfileModal';
import { User } from '@/entities/user/ui/User';
import { BackButton } from '@/shared/ui/BackButton/ui/BackButton';
import { ExitButton } from '@/shared/ui/ExitButton';
import { SettingsButton } from '@/shared/ui/SettingsButton';
import { TitleComponent } from '@/shared/ui/Title';
import { ThemeSwitch } from '@/widgets/ThemeSwitch';

export const Profile = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <div className={cls.profile}>
            <div className={cls.row}>
                <BackButton />
                <TitleComponent text="Профиль" />
                <SettingsButton />
            </div>
            <User openEditingProfileModal={openModal} />
            <DocumentList />
            <ThemeSwitch />
            <ExitButton />
            <EditingProfileModal isOpen={isOpen} closeModal={closeModal} />
        </div>
    );
};
