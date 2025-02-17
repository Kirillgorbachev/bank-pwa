import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { useAppSelector } from '@/app/hooks/useAppSelector';

import { ArrowToRight } from '../assets/ArrowToRight';
import defaultAvatar from '../assets/defaultAvatar.png';

import cls from './User.module.scss';

import { routes } from '@/shared/const/router/router';

interface IUserProps {
    className?: string;
    openEditingProfileModal?: () => void;
}

export const User = ({ className, openEditingProfileModal }: IUserProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const userName = useAppSelector((state) => state.user.data?.name);

    const onProfilePage = location.pathname.includes(routes.profile);

    const goToProfile = () => {
        if (!location.pathname.includes(routes.profile)) {
            navigate(routes.profile);
        }
    };

    return (
        <div className={classNames(cls.user, { [cls.profile]: onProfilePage }, className)} onClick={goToProfile}>
            <div className={cls.avatarContainer}>
                <img className={cls.avatar} src={defaultAvatar} alt="Photo" />
            </div>
            <div className={cls.content}>
                <p className={cls.name}>{userName}</p>
                {onProfilePage ? (
                    <button className={cls.editButton} onClick={openEditingProfileModal}>
                        <p className={cls.title}>Редактировать данные</p>
                        <ArrowToRight className={cls.icon} />
                    </button>
                ) : (
                    <p className={cls.greetings}>Добро пожаловать!</p>
                )}
            </div>
            <div className={cls.goToProfileButton}>
                <ArrowToRight />
            </div>
        </div>
    );
};
