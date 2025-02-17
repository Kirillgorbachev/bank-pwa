import { SoonAppearPage } from '@/shared/ui/SoonAppearPage/ui/SoonAppearPage';

import cls from './BtnCreateCard.module.scss';

import { CardModal } from '@/shared/ui/BtnCreateCard/component/CardModal';
import { CardList } from '@/shared/ui/BtnCreateCard/ui/CardList';
import { createCards } from '@/shared/ui/BtnCreateCard/utils/createCard';
import { getModalContentById } from '@/shared/ui/BtnCreateCard/utils/getModal';
import { useCardActions } from '@/shared/ui/BtnCreateCard/utils/useCardActions';
import { executeModalAction } from '@/shared/ui/PaymentCardPay/utils/executeModalAction';

export const BtnCreateCard = () => {
    const {
        isCardModalOpen,
        closeCard,
        currentCardId,
        modalStyleType,
        modalActions,
        isSoonAppearOpen,
        closeSoonAppearModal,
        onContentClick,
    } = useCardActions();

    return (
        <div className={cls.cardMainContainer}>
            <CardList cards={createCards} onCardClick={(id) => executeModalAction(id, modalActions)} />
            <CardModal
                isOpen={isCardModalOpen}
                content={getModalContentById(createCards, currentCardId) || 'Default content'}
                closeModal={closeCard}
                onContentClick={onContentClick}
                modalStyleType={modalStyleType}
            />
            <SoonAppearPage isModalOpen={isSoonAppearOpen} closeModal={closeSoonAppearModal} />
        </div>
    );
};
