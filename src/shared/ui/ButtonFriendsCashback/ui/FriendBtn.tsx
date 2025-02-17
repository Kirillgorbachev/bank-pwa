import type { ReactNode } from 'react';

import { IconFriends } from '@/shared/ui/ButtonFriendsCashback/icons/fiends-icon';

interface ICreateCard {
    id: string;
    icon: ReactNode;
    text: ReactNode;
}

export const friendsCards: ICreateCard[] = [
    {
        id: 'friend-card',
        icon: <IconFriends />,
        text: (
            <>
                <span>Приглашайте</span>
                <br />
                <span>друзей</span>
            </>
        ),
    },
];
