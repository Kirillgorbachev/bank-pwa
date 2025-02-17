import { SoonAppearPage } from '@/shared/ui/SoonAppearPage/ui/SoonAppearPage';

import { cashbackCards } from './CashbackCard';
import { friendsCards } from './FriendBtn';

import cls from './AddBtnCashbackFriends.module.scss';

import { useModal } from '@/app/hooks/useModal';

export const AddBtnCashbackFriends = () => {
    const cards = [...cashbackCards, ...friendsCards];

    const { isOpen: isSoonAppearOpen, openModal: openSoonAppearModal, closeModal: closeSoonAppearModal } = useModal();

    return (
        <div>
            <div className={cls.cardContainer}>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={cls.card}
                        onClick={() => {
                            openSoonAppearModal();
                        }}>
                        <div className={cls.cardContent}>
                            <div className={cls.iconContainer}>{card.icon}</div>
                            <div className={cls.cardText}>{card.text}</div>
                        </div>
                    </div>
                ))}
            </div>
            <SoonAppearPage isModalOpen={isSoonAppearOpen} closeModal={closeSoonAppearModal} />
        </div>
    );
};
