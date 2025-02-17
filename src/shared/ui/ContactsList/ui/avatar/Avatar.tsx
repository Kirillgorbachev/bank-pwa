import cls from './Avatar.module.scss';

import defaultAvatar from '@/entities/user/assets/defaultAvatar.png';

interface IAvatarProps {
    avatar?: string;
    name: string;
}

export const Avatar = ({ avatar, name }: IAvatarProps) => {
    if (avatar === 'defaultAvatar') {
        return <img className={cls.avatar} src={defaultAvatar} alt="Photo" />;
    }

    const firstLetter = name[0].toUpperCase();

    return (
        <div className={cls.avatarCircle}>
            <span className={cls.avatarLetter}>{firstLetter}</span>
        </div>
    );
};
